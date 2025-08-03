import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function FourRunnerFourthGenInteriorPage() {
  // Interior products for 4th Gen 4Runner
  const products = [
    {
      id: 1,
      name: "4th Gen 4Runner Center Console MOLLE Panel",
      price: "$120.00",
      originalPrice: "$149.99",
      image: "/images/4runner-molle-panel-installed-1.jpeg",
      description:
        "Plasma-cut steel MOLLE panel that replaces the factory center console lid, providing modular storage options for your gear.",
      badge: "ON SALE",
      status: "available",
    },
    {
      id: 2,
      name: "4th Gen 4Runner Alpine Trail Cubby",
      price: "$175.00",
      image: "/placeholder.svg?height=400&width=600&text=Alpine+Trail+Cubby",
      description:
        "Custom storage solution for rear wheel well areas, maximizing cargo organization with MOLLE compatibility.",
      badge: "COMING SOON",
      status: "coming-soon",
    },
    {
      id: 3,
      name: "4th Gen 4Runner Rear Window MOLLE Panel",
      price: "$275.00",
      image: "/placeholder.svg?height=400&width=600&text=Rear+Window+MOLLE",
      description:
        "MOLLE panel system for rear window interior mounting, uses all factory bolt holes with left/right side options.",
      badge: "COMING SOON",
      status: "coming-soon",
    },
    {
      id: 4,
      name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
      price: "$99.99",
      image: "/placeholder.svg?height=400&width=600&text=Rear+Cargo+MOLLE",
      description: "MOLLE panel for the removable storage compartment in the trunk, enhancing organization.",
      badge: "COMING SOON",
      status: "coming-soon",
    },
    {
      id: 5,
      name: "4th Gen 4Runner Rear Seat Delete Panel",
      price: "$299.99",
      image: "/placeholder.svg?height=400&width=600&text=Seat+Delete",
      badge: "COMING SOON",
      status: "coming-soon",
    },
    {
      id: 6,
      name: "4th Gen 4Runner Door Panel MOLLE Inserts",
      price: "$199.99",
      image: "/placeholder.svg?height=400&width=600&text=Door+MOLLE",
      badge: "COMING SOON",
      status: "coming-soon",
    },
    {
      id: 7,
      name: "4th Gen 4Runner Overhead Console Storage",
      price: "$249.99",
      image: "/placeholder.svg?height=400&width=600&text=Overhead+Storage",
      badge: "COMING SOON",
      status: "coming-soon",
    },
  ]

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
          <span className="text-gray-600">Interior Accessories</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">4th Gen 4Runner Interior Accessories</h1>
          <p className="text-gray-600">
            Custom interior solutions designed to maximize storage and organization in your 4th Gen 4Runner, featuring
            MOLLE-compatible panels and modular storage systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white border-gray-200 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
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
                          : product.badge === "COMING SOON"
                            ? "bg-orange-600"
                            : "bg-red-600"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <p className="text-charcoal-600 font-bold">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                  )}
                </div>
                <Link href={`/vehicles/4runner/4th-gen/interior/${product.id}`}>
                  <Button
                    className={`w-full ${
                      product.status === "available"
                        ? "bg-charcoal-700 hover:bg-charcoal-600"
                        : "bg-orange-600 hover:bg-orange-700"
                    }`}
                  >
                    {product.status === "available" ? "VIEW DETAILS" : "LEARN MORE"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
