"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Mail, Clock, CheckCircle, Package, Wrench } from "lucide-react"

export default function RearWindowMollePanelPage() {
  const [selectedSide, setSelectedSide] = useState("left")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail("")
  }

  const product = {
    id: 3,
    name: "4th Gen 4Runner Rear Window MOLLE Panel",
    price: "$275.00", // Updated price
    images: [
      "/placeholder.svg?height=600&width=800&text=Rear+Window+MOLLE+Panel",
      "/placeholder.svg?height=600&width=800&text=Left+Side+Panel",
      "/placeholder.svg?height=600&width=800&text=Right+Side+Panel",
      "/placeholder.svg?height=600&width=800&text=Installation+View",
    ],
    description:
      "Custom MOLLE panel designed for the rear window interior of your 4th Gen 4Runner. Utilizes all factory bolt holes for a clean, no-drill installation.",
    features: [
      "Uses all stock bolt holes - no drilling required",
      "Available for left or right side",
      "MOLLE-compatible for modular organization",
      "Powder-coated steel construction",
      "Weather-resistant finish",
      "Easy bolt-on installation",
      "Maintains factory appearance",
      "Compatible with factory window mechanisms",
    ],
    specifications: {
      Material: "Steel with Powder Coat Finish",
      Compatibility: "2003-2009 Toyota 4Runner (4th Gen)",
      Installation: "Bolt-on using factory holes",
      Finish: "Textured Black Powder Coat",
      Weight: "3.5 lbs per panel",
      Mounting: "Factory bolt locations",
      "Side Options": "Left or Right (sold individually)",
      "MOLLE Compatibility": "Standard MOLLE webbing",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner" className="hover:text-gray-600">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-gray-600">
            4th Gen
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen/interior" className="hover:text-gray-600">
            Interior
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-600">Rear Window MOLLE Panel</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-video bg-white rounded-lg overflow-hidden border">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded border overflow-hidden cursor-pointer hover:border-red-500 transition-colors"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-orange-600 text-white mb-4">COMING SOON</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Side Selection */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Select Side:</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedSide("left")}
                  className={`px-6 py-3 rounded-lg border-2 font-medium transition-colors ${
                    selectedSide === "left"
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Left Side
                </button>
                <button
                  onClick={() => setSelectedSide("right")}
                  className={`px-6 py-3 rounded-lg border-2 font-medium transition-colors ${
                    selectedSide === "right"
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Right Side
                </button>
              </div>
              <p className="text-sm text-gray-500">Panels are sold individually. Select your preferred side.</p>
            </div>

            {/* Development Status */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-800">Development Status</h3>
                </div>
                <p className="text-orange-700 text-sm mb-3">
                  Currently in final design phase. Expected availability: Spring 2024
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Design Complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">Prototype Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">Final Production Setup</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notify Me Form */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Get Notified When Available</h3>
                {isSubmitted ? (
                  <div className="text-center py-4">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <p className="text-green-600 font-medium">Thank you! We'll notify you when it's available.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-700">
                      {isSubmitting ? (
                        <>
                          <Mail className="h-4 w-4 mr-2 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 mr-2" />
                          Notify Me ({selectedSide} side)
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Planned Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Installation Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Remove Factory Trim</h4>
                      <p className="text-gray-600">
                        Carefully remove the factory rear window trim panel using appropriate tools.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Position MOLLE Panel</h4>
                      <p className="text-gray-600">
                        Align the MOLLE panel with existing factory bolt holes - no drilling required.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Secure with Factory Hardware</h4>
                      <p className="text-gray-600">Use existing factory bolts to secure the panel in place.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Test Functionality</h4>
                      <p className="text-gray-600">
                        Ensure all window mechanisms operate normally and panel is secure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wrench className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium text-blue-800">Installation Time</h4>
                  </div>
                  <p className="text-blue-700">Estimated installation time: 30-45 minutes per panel</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Development Progress</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Design Phase Complete</h4>
                        <p className="text-sm text-gray-600">CAD design and engineering completed</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Prototype Testing</h4>
                        <p className="text-sm text-gray-600">Fit and function testing on multiple vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">Production Setup</h4>
                        <p className="text-sm text-gray-600">Finalizing manufacturing processes and tooling</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Package className="h-5 w-5 text-gray-400" />
                      <div>
                        <h4 className="font-medium text-gray-900">Production Launch</h4>
                        <p className="text-sm text-gray-600">Expected Spring 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
