import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Wrench, Shield, Clock } from "lucide-react"

export default function FourthGen4RunnerPage() {
  // Only the MOLLE panel has actual photos - everything else is coming soon
  const availableProducts = [
    {
      id: 1,
      name: "Center Console MOLLE Panel",
      price: "$120.00",
      originalPrice: "$149.99",
      image: "/images/4runner-molle-panel-installed-1.jpeg",
      description: "Laser-cut MOLLE panel for organizing gear in your center console.",
      category: "interior",
      status: "available",
      badge: "ON SALE",
    },
  ]

  // All other products are coming soon
  const comingSoonProducts = [
    {
      name: "Alpine Trail Cubby",
      price: "$175.00",
      image: "/placeholder.svg?height=400&width=400&text=Alpine+Trail+Cubby",
      description: "Custom storage solution for rear wheel well areas with MOLLE compatibility.",
      category: "interior",
      status: "coming-soon",
      id: 2,
    },
    {
      name: "Rear Window MOLLE Panel",
      price: "$275.00",
      image: "/placeholder.svg?height=400&width=400&text=Rear+Window+MOLLE",
      description: "MOLLE panel for rear window interior using factory bolt holes with left/right options.",
      category: "interior",
      status: "coming-soon",
      id: 3,
    },
    {
      name: "Rear Cargo Storage MOLLE Panel",
      price: "$99.99",
      image: "/placeholder.svg?height=400&width=400&text=Rear+Cargo+MOLLE",
      description: "MOLLE panel for the removable storage compartment in the trunk, enhancing organization.",
      category: "interior",
      status: "coming-soon",
      id: 4,
    },
    {
      name: "High Clearance Front Bumper",
      price: "$2,250.00",
      originalPrice: "$2,500.00",
      image: "/images/coming-soon-placeholder.jpeg",
      description: "Premium steel construction with integrated light mounts and recovery points.",
      category: "front-bumpers",
      status: "coming-soon",
      badge: "PRE-ORDER SALE",
      id: 1, // This ID is for the specific bumper product page
    },
    {
      name: "Expedition Front Bumper",
      price: "$1,499.99",
      image: "/images/coming-soon-placeholder.jpeg",
      description: "Heavy-duty expedition bumper with winch mount and maximum protection.",
      category: "front-bumpers",
      status: "coming-soon",
    },
    {
      name: "Heavy Duty Rock Sliders",
      price: "$899.99",
      image: "/images/coming-soon-placeholder.jpeg",
      description: "Bolt-on rock sliders with integrated step and maximum protection.",
      category: "rock-sliders",
      status: "coming-soon",
    },
    {
      name: "Rear Bumper with Swing-Outs",
      description: "Heavy-duty rear bumper with tire carrier and jerry can mounts.",
      category: "rear-bumpers",
      status: "coming-soon",
    },
    {
      name: "Skid Plate Package",
      description: "Complete underbody protection for engine, transmission, and transfer case.",
      category: "skid-plates",
      status: "coming-soon",
    },
    {
      name: "Roof Rack System",
      description: "Modular roof rack with multiple mounting configurations.",
      category: "roof-racks",
      status: "coming-soon",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-12">
        {/* Hero Section */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">4TH GEN 4RUNNER</h1>
              <p className="text-xl text-gray-200 mb-6">2003-2009 • Premium Off-Road Accessories</p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our main production focus - engineered specifically for the 4th generation 4Runner
              </p>
            </div>
          </div>
          <img
            src="/images/4runner-4th-gen-stock.jpg"
            alt="4th Gen Toyota 4Runner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Available Products */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">AVAILABLE NOW</h2>
              <div className="h-1 w-16 bg-red-600"></div>
            </div>
            <div className="flex items-center text-green-500">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-medium">In Production</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {availableProducts.map((product, index) => (
              <Link key={index} href={`/vehicles/4runner/4th-gen/${product.category}/${product.id}`} className="block">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <div
                        className={`absolute top-2 left-2 text-white text-xs font-bold px-3 py-1 rounded-full ${
                          product.badge === "ON SALE"
                            ? "bg-red-600"
                            : product.badge === "AVAILABLE"
                              ? "bg-green-600"
                              : "bg-orange-600"
                        }`}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center space-x-2 mb-4">
                      <p className="text-red-500 font-bold">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      )}
                    </div>
                    <div className="text-center text-sm text-gray-400 group-hover:text-red-500 transition-colors">
                      Click to view details →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon Products */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">COMING SOON</h2>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center text-orange-500">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-medium">In Development</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProducts.map((product, index) => (
              <Card key={index} className="bg-zinc-800 border-zinc-700 border-dashed opacity-75">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/images/coming-soon-placeholder.jpeg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-white text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                  {product.price && (
                    <div className="flex items-center space-x-2 mb-4">
                      <p className="text-orange-500 font-bold">{product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                      )}
                    </div>
                  )}
                  {product.id ? (
                    <Link href={`/vehicles/4runner/4th-gen/${product.category}/${product.id}`}>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">LEARN MORE</Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full bg-zinc-600 text-gray-400 cursor-not-allowed">
                      NOTIFY WHEN AVAILABLE
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose 4th Gen */}
        <section className="bg-zinc-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">WHY 4TH GEN 4RUNNER?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Platform</h3>
              <p className="text-gray-300">
                The 4th generation 4Runner is known for its reliability and off-road capability, making it the perfect
                platform for our accessories.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Perfect Fit</h3>
              <p className="text-gray-300">
                Every product is designed specifically for the 4th gen, ensuring perfect fitment and maximum
                performance.
              </p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Focus</h3>
              <p className="text-gray-300">
                As our main production focus, 4th gen products receive priority development and fastest lead times.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
