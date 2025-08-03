import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Shield, Star } from "lucide-react"

export default function FourRunnerPage() {
  const generations = [
    {
      id: "3rd-gen",
      name: "3rd Gen",
      years: "1996-2002",
      image: "/images/4runner-3rd-gen-stock.jpg",
      description: "The classic generation that defined the 4Runner's legendary capability.",
      status: "In Development",
      statusColor: "text-orange-500",
      link: "/vehicles/4runner/3rd-gen",
    },
    {
      id: "4th-gen",
      name: "4th Gen",
      years: "2003-2009",
      image: "/images/4runner-4th-gen-stock.jpg",
      description: "Our main production focus with available products and fastest lead times.",
      status: "Available Now",
      statusColor: "text-green-500",
      link: "/vehicles/4runner/4th-gen",
      featured: true,
    },
    {
      id: "5th-gen",
      name: "5th Gen",
      years: "2010-2023",
      image: "/images/4runner-5th-gen-stock.jpg",
      description: "The most popular generation with modern amenities and proven reliability.",
      status: "In Development",
      statusColor: "text-orange-500",
      link: "/vehicles/4runner/5th-gen",
    },
    {
      id: "6th-gen",
      name: "6th Gen",
      years: "2024-Present",
      image: "/images/4runner-6th-gen-stock.jpeg",
      description: "The all-new generation with cutting-edge technology and capability.",
      status: "Coming Soon",
      statusColor: "text-red-500",
      link: "/vehicles/4runner/6th-gen",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">TOYOTA 4RUNNER</h1>
              <p className="text-xl text-gray-200 mb-6">Premium Off-Road Accessories for Every Generation</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Engineered specifically for Toyota's legendary SUV platform
              </p>
            </div>
          </div>
          <img src="/images/4runner-4th-gen-stock.jpg" alt="Toyota 4Runner" className="w-full h-full object-cover" />
        </div>

        {/* Generation Selection */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">SELECT YOUR GENERATION</h2>
            <div className="h-1 w-16 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose your 4Runner generation to explore our custom-engineered accessories designed specifically for your
              vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generations.map((gen) => (
              <Link key={gen.id} href={gen.link} className="block group">
                <Card
                  className={`bg-zinc-800 border-zinc-700 overflow-hidden hover:scale-[1.02] transition-all duration-300 ${gen.featured ? "ring-2 ring-red-500" : ""}`}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={gen.image || "/placeholder.svg"}
                      alt={`${gen.name} Toyota 4Runner`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${gen.statusColor} bg-black/70`}>
                        {gen.status}
                      </span>
                    </div>
                    {gen.featured && (
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                          <Star className="h-3 w-3 mr-1" />
                          FEATURED
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {gen.name} 4RUNNER
                      </h3>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{gen.years}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{gen.description}</p>
                    <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                      <span className="font-medium text-sm">Explore Products</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Why 4Runner */}
        <section className="bg-zinc-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">WHY CHOOSE 4RUNNER ACCESSORIES?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Platform</h3>
              <p className="text-gray-300">
                The 4Runner's legendary reliability and off-road capability make it the perfect platform for our premium
                accessories.
              </p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Generation-Specific</h3>
              <p className="text-gray-300">
                Every product is engineered specifically for each generation, ensuring perfect fitment and maximum
                performance.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Specialty</h3>
              <p className="text-gray-300">
                4Runner accessories are our specialty, with the 4th generation being our main production focus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
