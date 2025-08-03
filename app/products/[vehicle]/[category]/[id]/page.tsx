"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ChevronLeft, Truck, Shield, PenToolIcon as Tool } from "lucide-react"
import Link from "next/link"

interface ProductDetailPageProps {
  params: {
    vehicle: string
    category: string
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { vehicle, category, id } = params
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // This would be replaced with actual data fetching in a real application
  const product = {
    id: Number.parseInt(id),
    name: `${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} - Pro Series`,
    price: "$1,299.99",
    images: [
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
      "/placeholder.svg?height=600&width=800&text=Product+Image",
    ],
    description:
      "Our flagship model with integrated LED lighting and winch compatibility. Designed specifically for the Toyota Tacoma, this bumper offers superior protection while maintaining excellent approach angles for off-road performance.",
    features: [
      'Precision plasma-cut 3/16" steel construction',
      "Powder-coated textured black finish",
      "Integrated LED light mounts",
      "Winch compatible up to 12,000 lbs",
      'Recovery points with 3/4" shackle mounts',
      "Maintains factory sensors and camera functionality",
      "Designed for optimal approach angles",
      "Easy bolt-on installation with no cutting required",
    ],
    specs: {
      material: '3/16" Steel',
      finish: "Textured Powder Coat",
      weight: "125 lbs",
      winchCapacity: "12,000 lbs",
      compatibleYears: "2016-2023",
      installTime: "3-4 hours",
      includedHardware: "Yes, Grade 8 hardware included",
    },
    installationNotes:
      "Professional installation recommended but not required. All necessary hardware and detailed instructions included. May require removal of factory components.",
  }

  const vehicleDisplay = vehicle === "tacoma" ? "Tacoma" : "4Runner"
  const categoryDisplay = (() => {
    switch (category) {
      case "bumpers":
        return "Front Bumper"
      case "rear-bumpers":
        return "Rear Bumper"
      case "sliders":
        return "Rock Sliders"
      case "racks":
        return "Roof Rack"
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  })()

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="container px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href={`/products/${vehicle}`} className="hover:text-red-500">
          {vehicleDisplay}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href={`/products/${vehicle}/${category}`} className="hover:text-red-500">
          {categoryDisplay}s
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-300">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image with Navigation */}
          <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden group">
            <img
              src={product.images[selectedImageIndex] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {product.images.length}
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-zinc-800 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-red-500 ring-2 ring-red-500/20"
                      : "border-transparent hover:border-gray-400"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
          <p className="text-2xl text-red-500 font-bold mb-6">{product.price}</p>

          <p className="text-gray-300 mb-6">{product.description}</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center text-gray-300">
              <Truck className="h-5 w-5 mr-2 text-red-500" />
              <span>Free shipping on orders over $500</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Shield className="h-5 w-5 mr-2 text-red-500" />
              <span>Lifetime warranty against manufacturing defects</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Tool className="h-5 w-5 mr-2 text-red-500" />
              <span>Professional installation available</span>
            </div>
          </div>

          <Button className="w-full bg-red-600 hover:bg-red-700 text-lg py-6">ADD TO CART</Button>

          <Tabs defaultValue="features" className="mt-8">
            <TabsList className="grid grid-cols-3 bg-zinc-800">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs" className="mt-4">
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 border-b border-zinc-700 py-2">
                    <span className="text-gray-400">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </span>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="installation" className="mt-4">
              <p className="text-gray-300">{product.installationNotes}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
