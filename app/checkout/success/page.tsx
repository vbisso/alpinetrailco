"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Package, Truck, Mail } from "lucide-react"

export default function CheckoutSuccessPage() {
  const [orderNumber] = useState(() => `AT-${Date.now().toString().slice(-6)}`)
  const [estimatedDelivery] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 7)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your order. We've received your payment and will begin processing your items immediately.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order Number</p>
                  <p className="font-semibold">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-semibold text-green-600">{estimatedDelivery}</p>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Order Confirmation Email</p>
                    <p className="text-sm text-gray-600">
                      You'll receive a detailed order confirmation email within the next few minutes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Package className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Order Processing</p>
                    <p className="text-sm text-gray-600">
                      Our team will begin preparing your order for shipment. Custom items may require additional
                      processing time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Truck className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Shipping Notification</p>
                    <p className="text-sm text-gray-600">
                      Once your order ships, you'll receive tracking information to monitor your delivery.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Support */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about your order, don't hesitate to reach out to our customer support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    Track Your Order
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Continue Shopping */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
