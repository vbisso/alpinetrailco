"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { ChevronRight, ShoppingCart } from 'lucide-react'
import Link from "next/link"

const product = {
  name: "Rear Window MOLLE Panel System",
  price: 120.00,
  images: [
    { id: 1, src: "/images/4runner-molle-panel-main.png", alt: "Rear Window MOLLE Panel System" },
    { id: 2, src: "/images/4runner-molle-panel-installed-1.jpeg", alt: "Installed Rear Window MOLLE Panel" },
    { id: 3, src: "/images/4runner-molle-panel-installed-2.jpeg", alt: "MOLLE Panel with gear" },
  ],
  description: "Maximize your cargo area with this versatile MOLLE panel system for the rear windows. CNC cut from high-grade steel, this panel allows for endless mounting possibilities for your gear, from recovery equipment to first-aid kits. Easy bolt-on installation with no drilling required.",
  features: [
    "CNC cut from high-grade steel for precision and durability.",
    "Black powder coat finish for a sleek look and corrosion resistance.",
    "Easy bolt-on installation uses factory mounting points.",
    "Provides modular storage for a wide variety of accessories and gear.",
  ],
}

export default function RearWindowMollePage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/vehicles/4runner/4th-gen">4th Gen 4Runner</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/vehicles/4runner/4th-gen/interior">Interior</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight className="h-4 w-4" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
              <Image src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image) => (
                <button key={image.id} onClick={() => setSelectedImage(image)} className={`relative aspect-video rounded-lg overflow-hidden border-2 ${selectedImage.id === image.id ? 'border-red-600' : 'border-transparent'}`}>
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-red-600 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white mb-8">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
