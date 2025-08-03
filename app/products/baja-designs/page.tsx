"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const bajaDesignsProducts = [
  {
    id: "squadron-pro",
    name: "Squadron Pro LED Lights",
    price: "$329.99",
    description: "Compact and powerful, the Squadron Pro is the perfect auxiliary light.",
    images: [
      "/images/baja-designs/squadron-pro.png",
      "/images/baja-designs/squadron-pro-side.png",
      "/images/baja-designs/squadron-pro-back.png",
      "/images/baja-designs/squadron-pro-mounted.png",
    ],
    category: "Pod Lights",
  },
  {
    id: "s8-light-bar",
    name: "S8 LED Light Bar",
    price: "$599.99",
    description: "Sleek and powerful, the S8 is a versatile light bar for any application.",
    images: [
      "/images/baja-designs/s8-light-bar.png",
      "/images/baja-designs/s8-light-bar-side.png",
      "/images/baja-designs/s8-light-bar-back.png",
      "/images/baja-designs/s8-light-bar-mounted.png",
    ],
    category: "Light Bars",
  },
  {
    id: "lp6-pro",
    name: "LP6 Pro LED Auxiliary Light",
    price: "$499.99",
    description: "The LP6 Pro is a high-performance auxiliary light with integrated DRL.",
    images: [
      "/images/baja-designs/lp6-pro.png",
      "/images/baja-designs/lp6-pro-side.png",
      "/images/baja-designs/lp6-pro-back.png",
      "/images/baja-designs/lp6-pro-mounted.png",
    ],
    category: "Round Lights",
  },
  {
    id: "s1-backup-light",
    name: "S1 Backup Light",
    price: "$129.99",
    description: "Compact and incredibly bright, the S1 is perfect for backup or utility lighting.",
    images: ["/images/baja-designs/s1-backup-light.png"],
    category: "Utility Lights",
  },
  {
    id: "onx6-arc",
    name: "OnX6 Arc Series Light Bar",
    price: "$1,299.99",
    description: "The OnX6 Arc Series offers a curved design for a wider light spread.",
    images: ["/images/baja-designs/onx6-arc.png"],
    category: "Light Bars",
  },
  {
    id: "rock-lights",
    name: "Rock Lights",
    price: "$99.99",
    description: "Illuminate your surroundings with Baja Designs Rock Lights.",
    images: ["/images/baja-designs/rock-lights.png"],
    category: "Utility Lights",
  },
  {
    id: "xl80-light",
    name: "XL80 LED Auxiliary Light",
    price: "$449.99",
    description: "The XL80 provides an incredible amount of light in a compact package.",
    images: ["/images/baja-designs/xl80-light.png"],
    category: "Pod Lights",
  },
  {
    id: "s2-pro",
    name: "S2 Pro LED Light",
    price: "$199.99",
    description: "Small but mighty, the S2 Pro is a versatile light for various applications.",
    images: ["/images/baja-designs/s2-pro.png"],
    category: "Pod Lights",
  },
  {
    id: "rtl-s-tail-light",
    name: "RTL-S Tail Light Bar",
    price: "$299.99",
    description: "Integrated tail light, brake light, and reverse light in one sleek bar.",
    images: ["/images/baja-designs/rtl-s-tail-light.png"],
    category: "Tail Lights",
  },
  {
    id: "fog-light-kit",
    name: "Fog Light Kit",
    price: "$399.99",
    description: "Upgrade your factory fog lights with high-performance Baja Designs LEDs.",
    images: ["/images/baja-designs/fog-light-kit.png"],
    category: "Fog Lights",
  },
]

export default function BajaDesignsPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [selectedThumbnail, setSelectedThumbnail] = useState(0)

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index)
    setSelectedThumbnail(index)
  }

  const handlePrevClick = () => {
    setCurrentImage((prev) => (prev === 0 ? bajaDesignsProducts[0].images.length - 1 : prev - 1))
    setSelectedThumbnail((prev) => (prev === 0 ? bajaDesignsProducts[0].images.length - 1 : prev - 1))
  }

  const handleNextClick = () => {
    setCurrentImage((prev) => (prev === bajaDesignsProducts[0].images.length - 1 ? 0 : prev + 1))
    setSelectedThumbnail((prev) => (prev === bajaDesignsProducts[0].images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">BAJA DESIGNS LIGHTING</h1>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/baja-designs/baja-designs-logo.jpeg"
            alt="Baja Designs Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our selection of high-performance off-road lighting solutions from Baja Designs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bajaDesignsProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <Link href={`/products/baja-designs/${product.id}`} className="block">
                <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-lg font-semibold text-red-600 mb-4">{product.price}</p>
                <Button asChild className="w-full bg-charcoal-700 hover:bg-charcoal-600 text-white">
                  <Link href={`/products/baja-designs/${product.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
