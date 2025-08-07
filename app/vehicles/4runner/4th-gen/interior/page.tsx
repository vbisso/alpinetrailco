"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

const interiorProducts = [
  {
    id: 1,
    name: "Rear Window MOLLE Panel System",
    description: "Maximize your cargo area with this versatile MOLLE panel system for the rear windows.",
    image: "/images/4runner-molle-panel-main.png",
    price: 120.0,
    status: "On Sale",
    href: "/vehicles/4runner/4th-gen/interior/1",
  },
  {
    id: 2,
    name: "Center Console MOLLE Panel",
    description: "Add accessible storage to your center console with these easy-to-install panels.",
    image: "/images/4runner-molle-panel-installed-1.jpeg", // This image is used for the card
    price: 129.99,
    status: "New",
    href: "/vehicles/4runner/4th-gen/interior/2",
  },
  {
    id: 3,
    name: "Overhead Console MOLLE Panel",
    description: "Utilize overhead space for radios, tools, and other small essentials.",
    image: "/images/coming-soon-placeholder.jpeg",
    price: null,
    status: "Coming Soon",
    href: "/vehicles/4runner/4th-gen/interior/3",
  },
  {
    id: 4,
    name: "Alpine Trail Cubby",
    description: "Secure storage cubby for the rear wheel well areas with MOLLE compatibility.",
    image: "/images/alpine-trail/cubby-installed.jpeg",
    price: 175.0,
    status: "In Stock",
    href: "/products/alpine-trail/cubby",
  },
  {
    id: 5,
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    description: "Modular storage for your rear cargo area.",
    image: "/images/4runner-rear-cargo-molle.jpeg",
    price: 165.00,
    status: "In Stock",
    href: "/vehicles/4runner/4th-gen/interior/4",
  },
]

export default function InteriorPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/vehicles/4runner" className="text-gray-500 hover:text-gray-700">4Runner</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/vehicles/4runner/4th-gen" className="text-gray-500 hover:text-gray-700">4th Gen</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-gray-800">Interior Accessories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">4th Gen 4Runner Interior Accessories</h1>
          <p className="mt-4 text-lg text-gray-600">
            Enhance your 4Runner's interior with our range of storage and organization solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {interiorProducts.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.status && (
                    <Badge
                      className={`absolute top-3 right-3 text-white ${
                        product.status === "On Sale" ? "bg-red-600" : 
                        product.status === "New" ? "bg-blue-600" : 
                        product.status === "In Stock" ? "bg-green-600" :
                        "bg-orange-500"
                      }`}
                    >
                      {product.status}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{product.name}</CardTitle>
                <p className="text-gray-600 text-sm h-10">{product.description}</p>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <div className="flex justify-between items-center w-full">
                  <div>
                    {product.price ? (
                      <p className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
                    ) : (
                      <p className="text-lg font-semibold text-gray-500">Coming Soon</p>
                    )}
                  </div>
                  <Button asChild className="bg-gray-800 text-white hover:bg-gray-900">
                    <Link href={product.href}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
