"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, ShoppingCart } from 'lucide-react'
import { useCart } from "@/contexts/cart-context"

export default function FourRunnerFourthGenRearCargoMollePanelPage() {
  const { addToCart } = useCart()

  const product = {
    id: 4,
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    price: 165.00,
    priceFormatted: "$165.00",
    image: "/images/4runner-rear-cargo-molle.jpeg",
    images: [
        { id: 1, src: "/images/4runner-rear-cargo-molle.jpeg", alt: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel installed" },
        { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "More angles of the MOLLE panel" },
    ],
    description:
      "A custom-fit MOLLE panel designed to fit inside the removable storage compartment in the rear cargo area of your 4th Gen 4Runner, maximizing organization and accessibility.",
    features: [
      "Optimizes unused space within the factory storage compartment",
      "MOLLE-compatible grid for attaching pouches, tools, and gear",
      "Durable steel construction with a textured black powder coat finish",
      "Simple, non-invasive installation within the existing storage space",
      "Keeps items secure and organized, preventing shifting during off-road adventures",
    ],
    specifications: [
      { label: "Material", value: "Steel" },
      { label: "Finish", value: "Textured Black Powder Coat" },
      { label: "Weight", value: "2.5 lbs" },
      { label: "Installation", value: "Drop-in fit within factory storage compartment" },
      { label: "Compatibility", value: "All 4th Gen Toyota 4Runner models (2003-2009)" },
    ],
    installation: [
      "Remove the factory removable storage panel from the trunk.",
      "Place the Alpine Trail Co. MOLLE panel inside the compartment.",
      "Secure the panel using the provided hardware (if applicable, or it's a friction fit).",
      "Reinstall the factory storage panel into the trunk.",
      "Begin organizing your gear with MOLLE-compatible accessories!",
    ],
  }
  
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
    });
    // Optionally, show a toast notification
  }


  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner" className="hover:text-gray-700">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-gray-700">
            4th Gen
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen/interior" className="hover:text-gray-700">
            Interior Accessories
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-bold">{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={mainImage.src || "/placeholder.svg"}
                alt={mainImage.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {product.images.map((img) => (
                 <button key={img.id} onClick={() => setMainImage(img)} className={`w-20 h-20 rounded-md overflow-hidden border-2 ${mainImage.id === img.id ? 'border-charcoal-600' : 'border-transparent'}`}>
                    <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                    />
                 </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            
            <p className="text-3xl font-bold text-charcoal-700 mb-6">{product.priceFormatted}</p>

            <Button size="lg" className="w-full bg-charcoal-700 hover:bg-charcoal-600" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
            </Button>

            <Tabs defaultValue="features" className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="install">Installation</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-4 border border-t-0 rounded-b-lg bg-gray-50">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specs" className="p-4 border border-t-0 rounded-b-lg bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                  {product.specifications.map((spec, index) => (
                    <div key={index}>
                      <span className="font-semibold text-gray-800">{spec.label}:</span> {spec.value}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="install" className="p-4 border border-t-0 rounded-b-lg bg-gray-50">
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {product.installation.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
