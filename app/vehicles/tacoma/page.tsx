import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Wrench } from "lucide-react"

export default function TacomaPage() {
  const generations = [
    {
      id: "2nd-gen",
      name: "2nd Gen",
      years: "2005-2015",
      image: "/images/tacoma-2nd-gen-stock.avif",
      description: "The reliable workhorse generation with proven off-road capability.",
      status: "In Development",
      statusColor: "text-orange-500",
      link: "/vehicles/tacoma/2nd-gen",
    },
    {
      id: "3rd-gen",
      name: "3rd Gen",
      years: "2016-2023",
      image: "/images/tacoma-3rd-gen-trd-stock.webp",
      description: "The modern Tacoma with advanced technology and refined off-road features.",
      status: "In Development",
      statusColor: "text-orange-500",
      link: "/vehicles/tacoma/3rd-gen",
    },
    {
      id: "4th-gen",
      name: "4th Gen",
      years: "2024-Present",
      image: "/images/tacoma-4th-gen-stock.jpg",
      description: "The all-new generation with cutting-edge design and capability.",
      status: "Coming Soon",
      statusColor: "text-red-500",
      link: "/vehicles/tacoma/4th-gen",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">TOYOTA TACOMA</h1>
              <p className="text-xl text-gray-200 mb-6">Premium Off-Road Accessories for Every Generation</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Engineered specifically for Toyota's legendary mid-size pickup truck
              </p>
            </div>
          </div>
          <img src="/images/tacoma-3rd-gen-trd-stock.webp" alt="Toyota Tacoma" className="w-full h-full object-cover" />
        </div>

        {/* Generation Selection */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">SELECT YOUR GENERATION</h2>
            <div className="h-1 w-16 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose your Tacoma generation to explore our custom-engineered accessories designed specifically for your
              truck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generations.map((gen) => (
              <Link key={gen.id} href={gen.link} className="block group">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={gen.image || "/placeholder.svg"}
                      alt={`${gen.name} Toyota Tacoma`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${gen.statusColor} bg-black/70`}>
                        {gen.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {gen.name} TACOMA
                      </h3>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{gen.years}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{gen.description}</p>
                    <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                      <span className="font-medium">Explore Products</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Development Timeline */}
        <section className="bg-zinc-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">TACOMA DEVELOPMENT ROADMAP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wrench className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">2nd & 3rd Gen</h3>
              <p className="text-gray-300">
                Currently in development. These proven generations will receive our engineering focus after completing
                the 4th Gen 4Runner line.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">4th Gen</h3>
              <p className="text-gray-300">
                The all-new generation is being evaluated for product development. Sign up for notifications on
                availability.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Commitment</h3>
              <p className="text-gray-300">
                Every Tacoma product will be engineered to the same standards as our 4Runner accessories - built to
                last.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
