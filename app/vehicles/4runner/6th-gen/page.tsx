import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronRight, Mail, Calendar, Wrench, Shield } from 'lucide-react'
import BajaDesignsShowcase from "@/components/baja-designs-showcase"

export default function SixthGen4RunnerPage() {
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
          <span className="text-gray-300">6th Generation</span>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">6TH GEN 4RUNNER</h1>
              <p className="text-xl text-gray-200 mb-2">2024-Present</p>
              <p className="text-lg text-gray-300">The All-New Generation</p>
            </div>
          </div>
          <img
            src="/images/4runner-6th-gen-stock.jpeg"
            alt="6th Generation Toyota 4Runner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coming Soon Notice */}
        <section className="bg-zinc-800 rounded-lg p-8 mb-12">
          <div className="text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">PRODUCTS COMING SOON</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're currently developing a complete line of premium accessories for the all-new 6th Generation 4Runner.
              Our engineering team is working to deliver the same quality and precision you expect from Alpine Trail Co.
            </p>
            <p className="text-red-400 font-semibold mb-8">Development Timeline: Late 2025 - Early 2026</p>

            <div className="max-w-md mx-auto">
              <p className="text-gray-300 mb-4">Get notified when 6th Gen products become available:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-700 border-zinc-600 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                  <Mail className="h-4 w-4 mr-2" />
                  NOTIFY ME
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Baja Designs Products */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AVAILABLE LIGHTING SOLUTIONS</h2>
            <div className="h-1 w-16 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              While we develop our custom accessories, enhance your 6th Gen 4Runner with premium Baja Designs lighting.
            </p>
          </div>
          <BajaDesignsShowcase />
        </section>

        {/* Upcoming Product Categories */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">UPCOMING PRODUCT CATEGORIES</h2>
            <div className="h-1 w-16 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our planned product lineup for the 6th Generation 4Runner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Front Bumpers",
                description: "Heavy-duty protection with integrated lighting solutions",
                image: "/images/coming-soon-placeholder.jpeg",
              },
              {
                name: "Rock Sliders",
                description: "CNC cut steel protection for your rocker panels",
                image: "/images/coming-soon-placeholder.jpeg",
              },
              {
                name: "Interior Accessories",
                description: "Custom MOLLE panels and organizational solutions",
                image: "/images/coming-soon-placeholder.jpeg",
              },
              {
                name: "Rear Bumpers",
                description: "Expedition-ready rear protection and recovery points",
                image: "/images/coming-soon-placeholder.jpeg",
              },
              {
                name: "Skid Plates",
                description: "Comprehensive undercarriage protection systems",
                image: "/images/coming-soon-placeholder.jpeg",
              },
              {
                name: "Roof Racks",
                description: "Modular roof rack systems for gear and accessories",
                image: "/images/coming-soon-placeholder.jpeg",
              },
            ].map((category) => (
              <Card key={category.name} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="flex items-center text-red-500">
                    <span className="font-medium">Coming Soon</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Wait for Our Products */}
        <section className="bg-zinc-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">WHY WAIT FOR ALPINE TRAIL CO.?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Quality</h3>
              <p className="text-gray-300">
                Our 4th Gen 4Runner products have established our reputation for exceptional quality and fitment.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Perfect Engineering</h3>
              <p className="text-gray-300">
                Every product is specifically engineered for the 6th Gen platform - no compromises or universal fits.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Worth the Wait</h3>
              <p className="text-gray-300">
                Our development process ensures you get the highest quality accessories designed to last a lifetime.
              </p>
            </div>
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
    </div>
  )
}
