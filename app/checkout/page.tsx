"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

declare global {
  interface Window {
    Square?: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const { state, clearCart } = useCart();

  // ----- Square state -----
  const [card, setCard] = useState<any>(null);
  const [cardReady, setCardReady] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const mountedOnceRef = useRef(false); // React 18 StrictMode guard

  // public envs
  const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID!;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!;

  // ----- Checkout form state -----
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // ----- Totals -----
  const subtotal = state.total;
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // ===== Square: load SDK + mount card once =====
  useEffect(() => {
    if (mountedOnceRef.current) return;
    mountedOnceRef.current = true;

    let localCard: any;

    const load = async () => {
      // Load sandbox SDK script if not present
      if (!window.Square && !document.getElementById("square-web-sdk")) {
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          s.id = "square-web-sdk";
          // Use sandbox while testing. Switch to https://web.squarecdn.com/v1/square.js for production.
          s.src = "https://sandbox.web.squarecdn.com/v1/square.js";
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("Failed to load Square SDK"));
          document.body.appendChild(s);
        });
      }

      if (!window.Square || !appId || !locationId) {
        console.error("Square SDK or envs missing");
        return;
      }

      const payments = await window.Square.payments(appId, locationId);

      // If hot-reload already mounted into the container, don't mount again
      if (cardContainerRef.current?.childElementCount) {
        setCardReady(true);
        return;
      }

      localCard = await payments.card();
      await localCard.attach(cardContainerRef.current!);

      setCard(localCard);
      setCardReady(true);
    };

    load().catch((e) => {
      console.error("Square init failed", e);
      setCardReady(false);
    });

    // Clean up on actual unmount
    return () => {
      try {
        localCard?.destroy?.();
      } catch {
        // no-op
      }
    };
  }, [appId, locationId]);

  // ----- Handlers -----
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardReady || !card) return;
    setIsProcessing(true);

    try {
      // Tokenize via Web Payments SDK
      const tokenResult = await card.tokenize();
      if (tokenResult.status !== "OK") {
        throw new Error(
          tokenResult.errors?.[0]?.message ?? "Card tokenize failed"
        );
      }
      const sourceId = tokenResult.token;

      // Build cart items in cents for the API
      const items = state.items.map((i) => ({
        name: i.name,
        quantity: i.quantity,
        unitAmount: Math.round(i.price * 100), // dollars -> cents
      }));

      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceId,
          items,
          shippingCents: Math.round((subtotal > 500 ? 0 : 50) * 100),
          taxCents: Math.round(tax * 100),
          email: formData.email,
          shippingAddress: {
            addressLine1: formData.address,
            locality: formData.city,
            administrativeDistrictLevel1: formData.state,
            postalCode: formData.zipCode,
            country: "US",
          },
          idempotencyKey: crypto.randomUUID(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Payment failed");
      }

      clearCart();
      router.push("/checkout/success");
    } catch (err) {
      console.error(err);
      // TODO: show toast / inline error if you like
    } finally {
      setIsProcessing(false);
    }
  };

  // Empty cart state
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add some items to your cart before checking out.
            </p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ----- Page -----
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link
            href="/cart"
            className="flex items-center text-gray-600 hover:text-red-600 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Cart
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Secure Checkout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Shipping Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Information (Square) */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      {/* Square Card element mounts here */}
                      <div
                        ref={cardContainerRef}
                        id="card-container"
                        className="border rounded p-3"
                      />
                      {!cardReady && (
                        <p className="text-sm text-gray-500">
                          Loading secure payment fields…
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={agreeToTerms}
                      onCheckedChange={(checked) =>
                        setAgreeToTerms(Boolean(checked))
                      }
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-red-600 hover:underline"
                      >
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-red-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!agreeToTerms || isProcessing || !cardReady}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Processing Payment...
                      </>
                    ) : (
                      `Complete Order - $${total.toFixed(2)}`
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={
                          item.image ||
                          "/placeholder.svg?height=60&width=60&text=Product"
                        }
                        alt={item.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <hr />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-semibold">
                          FREE
                        </span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center text-sm text-gray-600">
                    <Lock className="h-4 w-4 mr-2" />
                    Your payment information is secure and encrypted
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
