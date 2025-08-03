"use client"

import type React from "react"
import { Shield } from "lucide-react" // Import Shield component

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ChevronRight, Mail, Clock, Package, Wrench } from "lucide-react"
import Link from "next/link"

export default function AlpineTrailCubbyPage() {
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
    id: 2,
    name: "4th Gen 4Runner Alpine Trail Cubby",
    price: "$175.00", // Updated price
    images: [
      "/placeholder.svg?height=600&width=800&text=Alpine+Trail+Cubby",
      "/placeholder.svg?height=600&width=800&text=Installation+View",
      "/placeholder.svg?height=600&width=800&text=Storage+Capacity",
      "/placeholder.svg?height=600&width=800&text=MOLLE+Compatibility",
    ],
    description:
      "Maximize your 4th Gen 4Runner's cargo space with our innovative Alpine Trail Cubby. This custom-designed storage solution transforms the unused wheel well area into organized, accessible storage with MOLLE-compatible panels.",
    features: [
      "Custom-fit design for 4th Gen 4Runner wheel well area",
      "MOLLE-compatible panel system for modular organization",
      "Steel construction with textured powder coat finish",
      "Utilizes previously wasted space near rear wheel wells",
      "Easy bolt-in installation with included hardware",
      "Weather-resistant design for outdoor adventures",
      "Compatible with factory cargo area features",
      "Improves cargo organization and accessibility",
    ],
    plannedSpecs: {
      material: "Steel with Powder Coat",
      finish: "Textured Black Powder Coat",
      weight: "12 lbs per side",
      installation: "Bolt-in, no cutting required",
      compatibility: "2003-2009 4Runner (all trims)",
      molleCompatible: "Yes, standard MOLLE accessories",
      construction: "Fabricated steel panels",
    },
    developmentNotes:
      "Currently in final design phase with prototype testing underway. We're perfecting the fit and finish to ensure seamless integration with your 4Runner's cargo area while maximizing storage potential.",
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner" className="hover:text-red-500">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-red-500">
            4th Gen
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen/interior" className="hover:text-red-500">
            Interior
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-300">Alpine Trail Cubby</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">COMING SOON</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
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
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-2xl text-red-500 font-bold mb-6">{product.price}</p>

            {/* Coming Soon Notice */}
            <div className="bg-orange-900/20 border border-orange-600 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-orange-500 mr-2" />
                <span className="font-semibold text-orange-500">Development in Progress</span>
              </div>
              <p className="text-orange-200 text-sm">
                This product is currently in development. Sign up below to be notified when it becomes available and to
                secure early-bird pricing.
              </p>
            </div>

            <p className="text-gray-300 mb-6">{product.description}</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center text-gray-300">
                <Package className="h-5 w-5 mr-2 text-red-500" />
                <span>Maximizes unused wheel well space</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="h-5 w-5 mr-2 text-red-500" /> {/* Declare Shield component */}
                <span>MOLLE-compatible modular organization</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Wrench className="h-5 w-5 mr-2 text-red-500" />
                <span>Easy bolt-in installation</span>
              </div>
            </div>

            {/* Notify Me Form */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Get Notified When Available</h3>
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="text-green-500 mb-2">✓ You're on the list!</div>
                  <p className="text-gray-300 text-sm">We'll notify you as soon as the Alpine Trail Cubby is ready.</p>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-zinc-700 border-zinc-600 text-white"
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700">
                    {isSubmitting ? (
                      <>
                        <Mail className="h-4 w-4 mr-2 animate-spin" />
                        Adding to List...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Notify Me
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            <Tabs defaultValue="features" className="mt-8">
              <TabsList className="grid grid-cols-3 bg-zinc-800">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Planned Specs</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
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
                  {Object.entries(product.plannedSpecs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 border-b border-zinc-700 py-2">
                      <span className="text-gray-400">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="development" className="mt-4">
                <div className="space-y-4">
                  <p className="text-gray-300">{product.developmentNotes}</p>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-3">Development Timeline</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">Concept Design - Complete</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">3D Modeling - Complete</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">Prototype Testing - In Progress</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                        <span className="text-gray-400">Production Setup - Pending</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                        <span className="text-gray-400">Launch - Spring 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
