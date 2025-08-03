"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredProducts = [
  {
    id: 1,
    name: "4th Gen 4Runner Center Console MOLLE Panel",
    price: "$120.00",
    originalPrice: "$149.99",
    image: "/images/4runner-molle-panel-installed-1.jpeg",
    badge: "ON SALE",
    category: "Interior",
    href: "/vehicles/4runner/4th-gen/interior/1",
  },
  {
    id: 2,
    name: "4th Gen 4Runner Alpine Pro Pod Front Bumper",
    price: "$2,250.00",
    originalPrice: "$2,500.00",
    image: "/placeholder.svg?height=400&width=400&text=Product+Image",
    badge: "COMING SOON",
    category: "Front Bumpers",
    href: "/vehicles/4runner/4th-gen/front-bumpers/1",
  },
  {
    id: 3,
    name: "4th Gen 4Runner Rear Window MOLLE Panel",
    price: "$275.00",
    image: "/placeholder.svg?height=400&width=400&text=Product+Image",
    badge: "COMING SOON",
    category: "Interior",
    href: "/vehicles/4runner/4th-gen/interior/3",
  },
  {
    id: 4,
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    price: "$165.00",
    image: "/placeholder.svg?height=400&width=400&text=Product+Image",
    badge: "COMING SOON",
    category: "Interior",
    href: "/vehicles/4runner/4th-gen/interior/4",
  },
]

export default function ProductShowcase() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <Link key={product.id} href={product.href} className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.badge && (
                  <div
                    className={`absolute top-2 left-2 text-white text-xs font-bold px-3 py-1 rounded-full ${
                      product.badge === "AVAILABLE"
                        ? "bg-green-600"
                        : product.badge === "ON SALE"
                          ? "bg-red-600"
                          : product.badge === "COMING SOON"
                            ? "bg-orange-600"
                            : "bg-red-600"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-charcoal-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-xl font-bold text-charcoal-600">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
                  )}
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-charcoal-600 text-charcoal-600 hover:bg-charcoal-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
