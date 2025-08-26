"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Shield,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";

export default function TundraInteriorPanelPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addItem } = useCart();

  const product = {
    id: "tundra-1st-gen-molle-panel",
    name: "1st Gen Tundra Interior Modular Panel",
    price: 145.0,
    priceFormatted: "$145.00",
    images: [
      {
        src: "/images/tundra/1st-gen-interior-panel-main.jpeg",
        alt: "1st Gen Tundra Interior Modular Panel - Full View",
      },
      {
        src: "/images/tundra/1st-gen-molle-panel-1.jpeg",
        alt: "1st Gen Tundra Interior Modular Panel - Main View",
      },
      {
        src: "/images/tundra/1st-gen-molle-panel-2.jpeg",
        alt: "1st Gen Tundra Interior Modular Panel - Detail View",
      },
      {
        src: "/images/tundra/1st-gen-molle-panel-3.jpeg",
        alt: "1st Gen Tundra Interior Modular Panel - Close Up",
      },
      {
        src: "/images/tundra/1st-gen-molle-panel-4.jpeg",
        alt: "1st Gen Tundra Interior Modular Panel - Installation View",
      },
    ],
    description:
      "Custom MOLLE panel designed specifically for the 1st generation Toyota Tundra center console area.",
    features: [
      "Durable construction designed for off-road use",
      "Easy installation with included hardware",
      "Custom fit for 1st generation Tundra (2000-2006)",
    ],
    inStock: true,
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
    });

    await new Promise((resolve) => setTimeout(resolve, 500)); // simulate
    setIsAddingToCart(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <a
                href="/vehicles/tundra"
                className="text-gray-500 hover:text-gray-700"
              >
                Tundra
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <a
                href="/vehicles/tundra/1st-gen"
                className="text-gray-500 hover:text-gray-700"
              >
                1st Gen
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-bold">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={
                  product.images[selectedImageIndex].src || "/placeholder.svg"
                }
                alt={product.images[selectedImageIndex].alt}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-lg bg-gray-100 border-2 transition-colors ${
                    selectedImageIndex === index
                      ? "border-orange-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                <Truck className="mr-1 h-3 w-3" />
                1st Gen Tundra (2000-2006)
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.priceFormatted}
              </span>
              <Badge
                variant="outline"
                className="text-green-600 border-green-600"
              >
                Available Now
              </Badge>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Product Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Installation
                </h4>
                <p className="text-sm text-gray-600">
                  Installation instructions are the same as the 4th Gen 4Runner
                  Center Console MOLLE Panel. All necessary hardware and
                  detailed instructions are included with your purchase.
                </p>
              </CardContent>
            </Card>

            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock || isAddingToCart}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isAddingToCart
                ? "Adding..."
                : `Add to Cart - ${product.priceFormatted}`}
            </Button>

            <div className="text-sm text-gray-500">
              <p>• Free shipping on orders over $100</p>
              <p>• 30-day return policy</p>
              <p>• Made in USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
