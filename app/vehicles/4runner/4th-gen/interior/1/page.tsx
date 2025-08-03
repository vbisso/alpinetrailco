"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Star, Truck, Shield, Clock, Wrench, Package, CheckCircle, ShoppingCart, Tag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const productImages = [
  "/images/4runner-molle-panel-main.png",
  "/images/4runner-molle-panel-installed-1.jpeg",
  "/images/4runner-molle-panel-installed-2.jpeg",
]

const specifications = [
  { label: "Material", value: "Laser-cut steel with powder coating" },
  { label: "Compatibility", value: "4th Gen 4Runner (2003-2009)" },
  { label: "Mounting", value: "Bolt-on installation" },
  { label: "Weight", value: "8 lbs" },
  { label: "Finish", value: "Textured black powder coat" },
  { label: "Hardware", value: "Stainless steel bolts included" },
]

const features = [
  "MOLLE-compatible webbing system",
  "Modular organization options",
  "Easy bolt-on installation",
  "Durable powder-coated finish",
  "Fits standard MOLLE accessories",
  "Maximizes cargo area efficiency",
]

export default function MOLLEPanelPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setIsAddingToCart(true)

    // Add item to cart
    addItem({
      id: "4runner-4th-gen-molle-panel-1",
      name: "4th Gen 4Runner MOLLE Panel System",
      price: 120,
      image: productImages[0],
      vehicle: "4Runner 4th Gen",
      category: "Interior",
    })

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsAddingToCart(false)
  }

  const subtotal = 120 * quantity
  const shipping = 25
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner" className="hover:text-gray-900">
              4Runner
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner/4th-gen" className="hover:text-gray-900">
              4th Gen
            </Link>
            <span>/</span>
            <Link href="/vehicles/4runner/4th-gen/interior" className="hover:text-gray-900">
              Interior
            </Link>
            <span>/</span>
            <span className="text-gray-900">MOLLE Panel System</span>
          </nav>
        </div>
      </div>

      <div className="container px-4 py-8">
        <Button variant="ghost" className="mb-6 p-0 h-auto text-gray-600 hover:text-gray-900" asChild>
          <Link href="/vehicles/4runner/4th-gen/interior">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Interior Accessories
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white shadow-lg">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="4th Gen 4Runner MOLLE Panel System"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-red-500" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`MOLLE Panel view ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-red-600 text-white hover:bg-red-700">ON SALE</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Stock</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Interior</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">4th Gen 4Runner MOLLE Panel System</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(47 reviews)</span>
              </div>

              {/* Sale Price Display */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-red-600 mr-2" />
                  <span className="text-4xl font-bold text-red-600">$120</span>
                </div>
                <span className="text-2xl text-gray-500 line-through">$149.99</span>
                <span className="bg-red-100 text-red-800 text-sm font-bold px-2 py-1 rounded">Save $29.99</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p>
                Transform your 4th Gen 4Runner's cargo area with our precision-engineered MOLLE Panel System. This
                modular organization solution provides endless customization options for your gear storage needs.
              </p>
            </div>

            {/* Sale Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <Tag className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 mb-1">Limited Time Sale!</h3>
                  <p className="text-red-700 text-sm">
                    Save $29.99 on this popular MOLLE panel system. Perfect for organizing your gear and maximizing your
                    4Runner's storage potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Installation</div>
                  <div className="text-xs text-gray-600">5-15 minutes</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Wrench className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Difficulty</div>
                  <div className="text-xs text-gray-600">Very Easy</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Package className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Tools Required</div>
                  <div className="text-xs text-gray-600">Drill, Marking Tools</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Truck className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Shipping</div>
                  <div className="text-xs text-gray-600">$25 flat rate</div>
                </CardContent>
              </Card>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    Subtotal ({quantity} item{quantity > 1 ? "s" : ""}):
                  </span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>${shipping}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {isAddingToCart ? "Adding..." : `Add to Cart - $${total}`}
                </Button>
                <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Warranty & Shipping */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Quality guarantee against manufacturing defects</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-blue-600" />
                <span>$25 flat rate shipping - Ships within 1 week</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                <span>100% American made</span>
              </div>
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
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      The 4th Gen 4Runner MOLLE Panel System is the ultimate organization solution for your cargo area.
                      Precision laser-cut from high-quality steel and finished with a durable powder coating, this
                      system transforms your storage capabilities.
                    </p>
                    <p>
                      The MOLLE (Modular Lightweight Load-carrying Equipment) system originated from military
                      applications and provides unmatched versatility for organizing your gear. Whether you're heading
                      out for a weekend camping trip or need to organize your daily carry items, this system adapts to
                      your needs.
                    </p>
                    <h4>Key Features:</h4>
                    <ul>
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900">{spec.label}:</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Installation Guide</h3>
                  <div className="prose prose-gray max-w-none">
                    <p>
                      The MOLLE Panel System is designed for easy installation with basic tools. The entire process
                      typically takes 5-15 minutes.
                    </p>
                    <h4>Tools Required:</h4>
                    <ul>
                      <li>Drill with appropriate bits</li>
                      <li>Marking tools (pencil, marker)</li>
                      <li>Level (recommended)</li>
                    </ul>
                    <h4>Installation Steps:</h4>
                    <ol>
                      <li>Clean the mounting surface thoroughly</li>
                      <li>Position the panel and mark mounting holes</li>
                      <li>Drill pilot holes</li>
                      <li>Secure panel with provided hardware</li>
                      <li>Test fitment and adjust as needed</li>
                    </ol>
                    <p>
                      <strong>Note:</strong> Installation instructions and all necessary hardware are included with your
                      purchase.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Mike R.</span>
                        <span className="text-sm text-gray-600">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Perfect addition to my 4Runner! Installation was super easy and the quality is excellent. Love
                        how I can customize the organization based on what I'm carrying. Great value at the sale price!"
                      </p>
                    </div>
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Sarah T.</span>
                        <span className="text-sm text-gray-600">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Great build quality and fits perfectly. The powder coating looks like it will hold up well to
                        heavy use. Highly recommend, especially at this price!"
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="font-medium">Dave K.</span>
                        <span className="text-sm text-gray-600">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        "Solid product, easy install. Only wish it came with some basic MOLLE accessories to get
                        started, but overall very happy with the purchase. The sale price made it an easy decision."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
