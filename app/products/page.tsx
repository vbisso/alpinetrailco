"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search, Truck, Shield, Users, Award } from 'lucide-react'
import ProductCard from "@/components/ProductCard"
import { motion } from "framer-motion"

const productCategories = [
{
  id: "front-bumpers",
  name: "Front Bumpers",
  description: "Heavy-duty protection with integrated lighting options",
  image: "/images/4runner-4th-gen-bumper-1.png",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 8,
  href: "/products/front-bumpers",
},
{
  id: "rock-sliders",
  name: "Rock Sliders",
  description: "Side protection with integrated step design",
  image: "/images/4runner-rock-sliders-1.jpeg",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 6,
  href: "/products/rock-sliders",
},
{
  id: "rear-bumpers",
  name: "Rear Bumpers",
  description: "Tire carriers and recovery point integration",
  image: "/images/coming-soon-placeholder.jpeg",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 4,
  href: "/products/rear-bumpers",
  comingSoon: true,
},
{
  id: "interior",
  name: "Interior Accessories",
  description: "Organization and storage solutions",
  image: "/images/4runner-molle-panel-main.png",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 3,
  href: "/products/interior",
},
{
  id: "lighting",
  name: "Baja Designs Lighting",
  description: "Premium LED lighting solutions",
  image: "/images/baja-designs/squadron-pro.png",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 15,
  href: "/products/baja-designs",
},
{
  id: "skid-plates",
  name: "Skid Plates",
  description: "Undercarriage protection systems",
  image: "/images/coming-soon-placeholder.jpeg",
  vehicleCompatibility: ["4Runner", "Tacoma"],
  productCount: 5,
  href: "/products/skid-plates",
  comingSoon: true,
},
]

const featuredProducts = [
{
  id: "1",
  name: "4th Gen 4Runner Alpine Pro Pod Front Bumper",
  price: "Starting at $2,899",
  image: "/images/4runner-4th-gen-bumper-1.png",
  description: "High clearance front bumper with integrated 7-pod Baja Designs light system",
  badge: "BESTSELLER",
  href: "/vehicles/4runner/4th-gen/front-bumpers/4",
  category: "Front Bumpers",
  rating: 5,
  reviews: 23,
},
{
  id: "2",
  name: "4th Gen 4Runner Rock Sliders",
  price: "Starting at $1,299",
  image: "/images/4runner-rock-sliders-1.jpeg",
  description: "Heavy-duty protection with integrated step design",
  href: "/vehicles/4runner/4th-gen/rock-sliders/1",
  category: "Rock Sliders",
  rating: 5,
  reviews: 18,
},
{
  id: "3",
  name: "4th Gen 4Runner MOLLE Panel System",
  price: "$149",
  image: "/images/4runner-molle-panel-main.png",
  description: "Modular organization system for your cargo area",
  href: "/vehicles/4runner/4th-gen/interior/1",
  category: "Interior",
  rating: 5,
  reviews: 47,
},
{
  id: "4",
  name: "Baja Designs Squadron Pro",
  price: "Starting at $329",
  image: "/images/baja-designs/squadron-pro.png",
  description: "High-performance LED driving/combo light",
  href: "/products/baja-designs/squadron-pro",
  category: "Lighting",
  rating: 5,
  reviews: 89,
},
{
  id: "5",
  name: "Baja Designs S8 Light Bar",
  price: "Starting at $1,299",
  image: "/images/baja-designs/s8-light-bar.png",
  description: "50-inch curved LED light bar for maximum visibility",
  href: "/products/baja-designs/s8-light-bar",
  category: "Lighting",
  rating: 5,
  reviews: 34,
},
{
  id: "6",
  name: "Baja Designs LP6 Pro",
  price: "Starting at $899",
  image: "/images/baja-designs/lp6-pro.png",
  description: "6-inch round LED driving light with multiple beam patterns",
  href: "/products/baja-designs/lp6-pro",
  category: "Lighting",
  rating: 5,
  reviews: 56,
},
]

const vehicles = [
{
  name: "4th Gen Tacoma",
  years: "2024-Present",
  image: "/images/tacoma-4th-gen-stock.jpg",
  href: "/vehicles/tacoma/4th-gen",
  status: "Coming Soon",
},
{
  name: "3rd Gen Tacoma",
  years: "2016-2023",
  image: "/images/tacoma-3rd-gen-trd-stock.webp",
  href: "/vehicles/tacoma/3rd-gen",
  status: "Available",
},
{
  name: "6th Gen 4Runner",
  years: "2024-Present",
  image: "/images/4runner-6th-gen-stock.jpeg",
  href: "/vehicles/4runner/6th-gen",
  status: "Coming Soon",
},
{
  name: "5th Gen 4Runner",
  years: "2010-2023",
  image: "/images/4runner-5th-gen-stock.jpg",
  href: "/vehicles/4runner/5th-gen",
  status: "Available",
},
{
  name: "4th Gen 4Runner",
  years: "2003-2009",
  image: "/images/4runner-4th-gen-stock.jpg",
  href: "/vehicles/4runner/4th-gen",
  status: "Available",
},
{
  name: "3rd Gen 4Runner",
  years: "1996-2002",
  image: "/images/4runner-3rd-gen-stock.jpg",
  href: "/vehicles/4runner/3rd-gen",
  status: "Available",
},
]

export default function ProductsPage() {
const [searchTerm, setSearchTerm] = useState("")
const [selectedCategory, setSelectedCategory] = useState("all")
const [selectedVehicle, setSelectedVehicle] = useState("all")

return (
  <div className="min-h-screen bg-gray-50">
    {/* Breadcrumb */}
    <div className="bg-white border-b">
      <div className="container px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Products</span>
        </nav>
      </div>
    </div>

    {/* Hero Section */}
    <section className="bg-white py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover our complete range of premium off-road accessories for Toyota Tacoma and 4Runner vehicles. Every
            product is designed, engineered, and manufactured in the USA.
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="front-bumpers">Front Bumpers</SelectItem>
                <SelectItem value="rock-sliders">Rock Sliders</SelectItem>
                <SelectItem value="interior">Interior</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vehicles</SelectItem>
                <SelectItem value="tacoma">Tacoma</SelectItem>
                <SelectItem value="4runner">4Runner</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Product Categories */}
    <section className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our product categories to find the perfect accessories for your build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {category.comingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge className="bg-red-600 hover:bg-red-700 text-white text-lg px-4 py-2">
                          Coming Soon
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {category.productCount} Products
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.vehicleCompatibility.map((vehicle) => (
                        <Badge key={vehicle} variant="outline" className="text-xs">
                          {vehicle}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                      <span>Browse Category</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-16 bg-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most popular products, trusted by thousands of off-road enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Shop by Vehicle */}
    <section className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Vehicle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find products specifically designed for your Toyota generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={vehicle.href}>
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={
                          vehicle.status === "Available"
                            ? "bg-green-500 hover:bg-green-600 text-white"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }
                      >
                        {vehicle.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-red-300 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-sm text-gray-300">{vehicle.years}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Alpine Trail Co.</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're not just another fabrication shop. We're off-road enthusiasts who understand what you need on the
            trail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="h-12 w-12 text-red-500" />,
              title: "American Made",
              description: "100% fabricated in the USA with premium materials and craftsmanship.",
            },
            {
              icon: <Truck className="h-12 w-12 text-red-500" />,
              title: "Trail Tested",
              description: "Every product is tested in real-world conditions by our team of off-road enthusiasts.",
            },
            {
              icon: <Users className="h-12 w-12 text-red-500" />,
              title: "Community Driven",
              description: "Built by the community, for the community. Your feedback shapes our designs.",
            },
            {
              icon: <Award className="h-12 w-12 text-red-500" />,
              title: "Quality Guarantee",
              description: "We stand behind our work with comprehensive warranties and exceptional service.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
)
}
