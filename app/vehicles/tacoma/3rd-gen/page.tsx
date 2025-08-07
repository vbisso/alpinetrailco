import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Clock, Mail } from 'lucide-react'

export default function TacomaThirdGenPage() {
  // Coming Soon categories for 3rd Gen Tacoma
  const comingSoonCategories = [
    {
      id: "front-bumpers",
      name: "Front Bumpers",
      image: "/placeholder.svg?height=600&width=800&text=Front+Bumpers",
      description: "High-clearance front bumpers with winch mounts and light provisions.",
    },
    {
      id: "rear-bumpers",
      name: "Rear Bumpers",
      image: "/placeholder.svg?height=600&width=800&text=Rear+Bumpers",
      description: "Heavy-duty rear bumpers with swing-out tire carriers and recovery points.",
    },
    {
      id: "rock-sliders",
      name: "Rock Sliders",
      image: "/placeholder.svg?height=600&width=800&text=Rock+Sliders",
      description: "Body-mounted rock sliders providing rocker panel protection.",
    },
    {
      id: "skid-plates",
      name: "Skid Plates",
      image: "/placeholder.svg?height=600&width=800&text=Skid+Plates",
      description: "Underbody protection for your engine, transmission, and transfer case.",
    },
    {
      id: "roof-racks",
      name: "Roof Racks",
      image: "/placeholder.svg?height=600&width=800&text=Roof+Racks",
      description: "Modular roof rack systems for additional storage and gear mounting.",
    },
    {
      id: "ladders",
      name: "Ladders",
      image: "/placeholder.svg?height=600&width=800&text=Ladders",
      description: "Rear ladders for easy access to your roof rack and gear.",
    },
  ]

  // Baja Designs products for 3rd Gen Tacoma
  const bajaDesignsProducts = [
    {
      id: 1,
      name: "Squadron Racer LED Light",
      price: "$299.95",
      image: "/images/baja-designs/squadron-racer.jpg",
      link: "/products/baja-designs/1",
    },
    {
      id: 8,
      name: "Rock Light Kit (Clear)",
      price: "$399.95",
      image: "/images/baja-designs/rock-lights-clear.jpg",
      link: "/products/baja-designs/8",
    },
    {
      id: 5,
      name: "S2 Pro LED Light (Clear)",
      price: "$249.95",
      image: "/images/baja-designs/s2-pro-clear.jpg",
      link: "/products/baja-designs/5",
    },
  ]

  return (
    <div className="container px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/vehicles/tacoma" className="hover:text-red-500">
          Tacoma
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-300">3rd Gen (2016-2023)</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">3RD GEN TACOMA (2016-2023)</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Premium off-road accessories designed specifically for your 3rd Gen Toyota Tacoma
            </p>
          </div>
        </div>
        <img
          src="/images/tacoma-3rd-gen-hero.jpeg"
          alt="3rd Gen Toyota Tacoma"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Development Status */}
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Clock className="h-8 w-8 text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">PRODUCTS IN DEVELOPMENT</h2>
        </div>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          We're currently developing our line of products for the 3rd Gen Tacoma. Our engineering team is working on
          designs specifically tailored to this generation's unique requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400"
          />
          <Button className="bg-orange-600 hover:bg-orange-700 flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            NOTIFY ME
          </Button>
        </div>
        <p className="text-sm text-gray-400 mt-4">Be the first to know when 3rd Gen products become available</p>
      </div>

      {/* Baja Designs Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">BAJA DESIGNS LIGHTING</h2>
          <Link href="/products/baja-designs" className="text-red-500 hover:text-red-400 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bajaDesignsProducts.map((product) => (
            <Card key={product.id} className="bg-zinc-800 border-zinc-700 overflow-hidden group">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Baja Designs
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-white mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-red-500 font-bold mb-3">{product.price}</p>
                <Link href={product.link}>
                  <Button className="w-full bg-zinc-700 hover:bg-red-600">VIEW DETAILS</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coming Soon Product Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">UPCOMING PRODUCT CATEGORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonCategories.map((category) => (
            <div key={category.id} className="group block">
              <div className="relative h-64 rounded-lg overflow-hidden mb-3 border-2 border-dashed border-zinc-600">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                  <Clock className="h-8 w-8 text-orange-500 mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <span className="text-orange-500 font-medium">In Development</span>
                </div>
              </div>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">REP THE BRAND</h2>
        <div className="flex justify-center">
            <Card key="alpine-trail-shirt" className="bg-zinc-800 border-zinc-700 overflow-hidden group max-w-sm">
                <div className="aspect-video overflow-hidden relative">
                    <img
                        src="/images/merch/alpine-trail-shirt-front.png"
                        alt="Alpine Trail Co. Signature Tee"
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 bg-white"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        MERCH
                    </div>
                </div>
                <CardContent className="p-4">
                    <h3 className="font-bold text-white mb-2 line-clamp-2">Alpine Trail Co. Signature Tee</h3>
                    <p className="text-red-500 font-bold mb-3">$25.00</p>
                    <Link href="/products/merch/shirt">
                        <Button className="w-full bg-zinc-700 hover:bg-red-600">VIEW DETAILS</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
