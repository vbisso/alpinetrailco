"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Mail, Star, Truck, Shield, Wrench, Clock, Tag } from "lucide-react"

export default function AlpineProPodBumperPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const images = [
    "/placeholder.svg?height=600&width=600&text=Product+Image",
    "/placeholder.svg?height=600&width=600&text=Product+Image",
    "/placeholder.svg?height=600&width=600&text=Product+Image",
    "/placeholder.svg?height=600&width=600&text=Product+Image",
  ]

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-toyota-red">
              Home
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner" className="hover:text-toyota-red">
              4Runner
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner/4th-gen" className="hover:text-toyota-red">
              4th Gen
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner/4th-gen/front-bumpers" className="hover:text-toyota-red">
              Front Bumpers
            </Link>
            <span>/</span>
            <span className="text-gray-900">Alpine Pro Pod Front Bumper</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 py-8">
        <Link
          href="/vehicles/4runner/4th-gen/front-bumpers"
          className="inline-flex items-center text-toyota-red hover:text-red-700 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Front Bumpers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Alpine Pro Pod Front Bumper"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-toyota-red" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-600 hover:bg-orange-700">COMING SOON</Badge>
                <Badge className="bg-red-600 hover:bg-red-700">PRE-ORDER SALE</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">4th Gen 4Runner Alpine Pro Pod Front Bumper</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">(Pre-order reviews)</span>
                </div>
              </div>

              {/* Sale Price Display */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-4xl font-bold text-toyota-red">$2,250</span>
                </div>
                <span className="text-2xl text-gray-500 line-through">$2,500</span>
                <span className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded">Save $250</span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-orange-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-orange-800 mb-1">Currently in Development</h3>
                  <p className="text-orange-700 text-sm">
                    This product is currently being developed and tested. Expected availability: Spring 2024. Pre-order
                    now to lock in the sale price and be first in line when production begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Order Sale Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <Tag className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 mb-1">Pre-Order Sale - Save $250!</h3>
                  <p className="text-red-700 text-sm">
                    Lock in this special pre-order price of $2,250 (normally $2,500). Price will increase to full MSRP
                    once production begins. Sign up below to secure your spot and pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The Alpine Pro Pod Front Bumper combines rugged protection with sleek aesthetics. Engineered
                specifically for the 4th generation 4Runner, this bumper features integrated light pods and premium
                construction for the ultimate off-road experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck className="h-4 w-4 text-toyota-red" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-toyota-red" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Wrench className="h-4 w-4 text-toyota-red" />
                  <span>Professional Install</span>
                </div>
              </div>

              {/* Notify Me Form */}
              {!isSubscribed ? (
                <form onSubmit={handleNotifyMe} className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-toyota-red" />
                    Reserve Your Pre-Order Spot
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Be the first to know when pre-orders open and lock in the $2,250 sale price. Limited quantity
                    available at this price.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toyota-red focus:border-transparent"
                    />
                    <Button type="submit" className="bg-toyota-red hover:bg-red-700 text-white px-6">
                      Reserve Spot
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">✓</span>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-green-800">You're reserved!</h3>
                      <p className="text-green-700 text-sm">
                        We'll notify you when pre-orders open and your $2,250 sale price is locked in.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    The Alpine Pro Pod Front Bumper is the ultimate upgrade for your 4th generation 4Runner. Designed
                    and manufactured in-house, this bumper combines form and function to deliver unmatched protection
                    and style.
                  </p>
                  <p className="mb-4">
                    Key features include integrated light pods for auxiliary lighting, reinforced mounting points for
                    recovery gear, and a sleek profile that maintains your vehicle's approach angle. The bumper is
                    constructed from high-strength steel and finished with a durable powder coat.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Integrated light pods for auxiliary lighting</li>
                    <li>Reinforced recovery points</li>
                    <li>High-strength steel construction</li>
                    <li>Durable powder coat finish</li>
                    <li>Maintains approach angle</li>
                    <li>Professional installation recommended</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Planned Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dimensions</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Width: 72 inches</li>
                      <li>Height: 18 inches</li>
                      <li>Depth: 12 inches</li>
                      <li>Weight: 85 lbs (estimated)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Materials</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>3/16" steel construction</li>
                      <li>Powder coat finish</li>
                      <li>Stainless steel hardware</li>
                      <li>LED light pod ready</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Specifications are preliminary and subject to change during development.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation Information</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Professional installation will be recommended for this bumper. Installation is expected to take 2-3
                    hours and require basic hand tools and a lift or jack stands.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expected Installation Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Remove factory bumper and fog lights</li>
                      <li>Install new bumper using provided hardware</li>
                      <li>Install LED pods or reinstall fog lights</li>
                      <li>Connect wiring and test all functions</li>
                      <li>Perform final inspection and torque check</li>
                    </ol>
                  </div>
                  <p className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <strong>Note:</strong> Detailed installation instructions will be provided with the final product.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Progress</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Design Phase</h4>
                      <p className="text-gray-600 text-sm">CAD design completed and reviewed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prototyping</h4>
                      <p className="text-gray-600 text-sm">Currently building and testing prototype</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Testing & Refinement</h4>
                      <p className="text-gray-600 text-sm">Planned field testing and final adjustments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">•</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Production</h4>
                      <p className="text-gray-600 text-sm">Setup production line and begin manufacturing</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Pre-Order Timeline:</strong> We anticipate opening pre-orders in Spring 2024 with delivery
                    starting Summer 2024. Reserve your spot now to lock in the $2,250 sale price.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
