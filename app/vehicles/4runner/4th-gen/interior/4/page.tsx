"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Mail, Clock, CheckCircle2 } from "lucide-react"

export default function FourRunnerFourthGenRearCargoMollePanelPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this email to your backend
    console.log("Notify me email:", email)
    setSubmitted(true)
  }

  const product = {
    id: 4,
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    price: "$165.00", // Updated price
    image: "/placeholder.svg?height=600&width=800&text=Rear+Cargo+MOLLE+Panel",
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
    development: {
      status: "Design Finalized",
      progress: 90,
      timeline: [
        { stage: "Concept & Design", date: "Fall 2023", completed: true },
        { stage: "Prototyping", date: "Winter 2023", completed: true },
        { stage: "Testing & Refinement", date: "Spring 2024", completed: true },
        { stage: "Production Setup", date: "Summer 2024", completed: true },
        { stage: "Launch", date: "Late Summer 2024", completed: false },
      ],
      notes: "Final production run is being prepared. Expect availability by late Summer 2024.",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-charcoal-600">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner" className="hover:text-charcoal-600">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-charcoal-600">
            4th Gen
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen/interior" className="hover:text-charcoal-600">
            Interior Accessories
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-600">{product.name}</span>
        </div>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-video rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {/* Placeholder for thumbnails if needed later */}
              <div className="w-20 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs">
                No Images
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">COMING SOON</div>
            </div>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-6" role="alert">
              <p className="font-bold">Currently In Development</p>
              <p>
                This product is in its final stages of development. Sign up below to be notified when it's available!
              </p>
            </div>

            <div className="text-2xl font-bold text-charcoal-600 mb-6">{product.price}</div>

            {!submitted ? (
              <form onSubmit={handleNotifyMe} className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email to be notified"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-charcoal-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-charcoal-700 hover:bg-charcoal-600">
                  <Mail className="h-5 w-5 mr-2" /> NOTIFY ME
                </Button>
              </form>
            ) : (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                <p className="font-bold">Thank You!</p>
                <p>We'll notify you at {email} when this product is available.</p>
              </div>
            )}

            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="install">Installation</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="p-4 border border-t-0 rounded-b-lg bg-white">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specs" className="p-4 border border-t-0 rounded-b-lg bg-white">
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  {product.specifications.map((spec, index) => (
                    <div key={index}>
                      <span className="font-semibold">{spec.label}:</span> {spec.value}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="install" className="p-4 border border-t-0 rounded-b-lg bg-white">
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {product.installation.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </TabsContent>
              <TabsContent value="development" className="p-4 border border-t-0 rounded-b-lg bg-white">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <span className="font-bold">Current Status:</span> {product.development.status}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-orange-600 h-2.5 rounded-full"
                      style={{ width: `${product.development.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">{product.development.progress}% Complete</p>

                  <h3 className="font-bold text-gray-800 mt-4">Development Timeline:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {product.development.timeline.map((item, index) => (
                      <li key={index} className="flex items-center">
                        {item.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <Clock className="h-5 w-5 text-orange-500 mr-2" />
                        )}
                        <span className={item.completed ? "line-through text-gray-500" : ""}>
                          {item.stage} ({item.date})
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <span className="font-bold">Notes:</span> {product.development.notes}
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
