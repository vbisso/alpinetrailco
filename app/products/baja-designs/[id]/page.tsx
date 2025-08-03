"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Truck, Shield, Zap, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = {
  "squadron-pro": {
    id: "squadron-pro",
    name: "Squadron Pro LED Light",
    price: 299,
    originalPrice: 349,
    description:
      "The Squadron Pro is Baja Designs most versatile LED light. With multiple beam patterns and lens options, it's perfect for any off-road application.",
    features: [
      "40W High-Performance LED",
      "IP69K Waterproof Rating",
      "Polycarbonate Lens",
      "Aluminum Housing",
      "50,000+ Hour Lifespan",
      "Multiple Beam Patterns Available",
    ],
    specifications: {
      "Power Draw": "40W",
      Lumens: "4,900",
      "Beam Distance": "1,148 ft",
      "Operating Voltage": "9-32V DC",
      "Operating Temperature": "-40°F to +145°F",
      Dimensions: '4.7" x 4.7" x 2.8"',
    },
    images: [
      "/images/baja-designs/squadron-pro.png",
      "/images/baja-designs/squadron-pro-side.png",
      "/images/baja-designs/squadron-pro-back.png",
      "/images/baja-designs/squadron-pro-mounted.png",
    ],
    inStock: true,
    category: "LED Lights",
    brand: "Baja Designs",
  },
  "s8-light-bar": {
    id: "s8-light-bar",
    name: "S8 LED Light Bar",
    price: 899,
    originalPrice: 999,
    description:
      "The S8 LED Light Bar delivers maximum performance with Baja Designs' latest LED technology. Perfect for serious off-road enthusiasts.",
    features: [
      "160W High-Output LEDs",
      "IP69K Waterproof Rating",
      "Polycarbonate Lens",
      "6061 Aluminum Housing",
      "Lifetime LED Warranty",
      "Multiple Mounting Options",
    ],
    specifications: {
      "Power Draw": "160W",
      Lumens: "19,200",
      "Beam Distance": "2,296 ft",
      "Operating Voltage": "9-32V DC",
      "Operating Temperature": "-40°F to +145°F",
      Dimensions: '20" x 3.5" x 4.2"',
    },
    images: [
      "/images/baja-designs/s8-light-bar.png",
      "/images/baja-designs/s8-light-bar-side.png",
      "/images/baja-designs/s8-light-bar-back.png",
      "/images/baja-designs/s8-light-bar-mounted.png",
    ],
    inStock: true,
    category: "Light Bars",
    brand: "Baja Designs",
  },
  "lp6-pro": {
    id: "lp6-pro",
    name: "LP6 Pro LED Light",
    price: 449,
    originalPrice: 499,
    description:
      "The LP6 Pro combines the power of six LEDs in a compact, lightweight package. Ideal for bumper mounting and auxiliary lighting.",
    features: [
      "60W High-Performance LEDs",
      "IP69K Waterproof Rating",
      "Polycarbonate Lens",
      "Aluminum Housing",
      "Lifetime LED Warranty",
      "Compact Design",
    ],
    specifications: {
      "Power Draw": "60W",
      Lumens: "7,350",
      "Beam Distance": "1,476 ft",
      "Operating Voltage": "9-32V DC",
      "Operating Temperature": "-40°F to +145°F",
      Dimensions: '6.7" x 6.7" x 3.1"',
    },
    images: [
      "/images/baja-designs/lp6-pro.png",
      "/images/baja-designs/lp6-pro-side.png",
      "/images/baja-designs/lp6-pro-back.png",
      "/images/baja-designs/lp6-pro-mounted.png",
    ],
    inStock: true,
    category: "LED Lights",
    brand: "Baja Designs",
  },
}

export default function ProductPage() {
  const params = useParams()
  const { dispatch } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const product = products[params.id as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products/baja-designs">
            <Button className="bg-red-600 hover:bg-red-700">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
    })

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsAddingToCart(false)
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <span>/</span>
            <Link href="/products/baja-designs" className="hover:text-white">
              Baja Designs
            </Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square mb-4 bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {discount > 0 && <Badge className="absolute top-4 left-4 bg-red-600 text-white">{discount}% OFF</Badge>}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-red-600" : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge variant="outline" className="mb-2 border-red-600 text-red-400">
                {product.brand}
              </Badge>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">(47 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-red-400">${product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {product.inStock ? (
                <p className="text-green-400 font-medium">✓ In Stock</p>
              ) : (
                <p className="text-red-400 font-medium">Out of Stock</p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>

            {/* Add to Cart */}
            <div className="mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isAddingToCart ? "Adding..." : "Add to Cart"}
              </Button>
            </div>

            {/* Features */}
            <Card className="bg-gray-900 border-gray-800 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-red-400" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg">
                <Truck className="h-6 w-6 text-red-400" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-400">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg">
                <Shield className="h-6 w-6 text-red-400" />
                <div>
                  <p className="font-semibold">Lifetime Warranty</p>
                  <p className="text-sm text-gray-400">On LED components</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <Card className="bg-gray-900 border-gray-800 mt-12">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Eye className="h-5 w-5 mr-2 text-red-400" />
              Technical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="p-4 bg-gray-800 rounded-lg">
                  <p className="text-gray-400 text-sm">{key}</p>
                  <p className="font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
