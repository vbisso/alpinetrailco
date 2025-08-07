import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: "Center Console MOLLE Panel",
    description: "Modular storage solution for your center console",
    price: "$129.99",
    image: "/images/4runner-molle-panel-installed-1.jpeg",
    href: "/vehicles/4runner/4th-gen/interior/2",
  },
  {
    id: 2,
    name: "Alpine Trail Cubby",
    description: "Secure storage cubby for the rear cargo area",
    price: "$175.00",
    image: "/images/alpine-trail/cubby-installed.jpeg",
    href: "/products/alpine-trail/cubby",
  },
  {
    id: 3,
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    description: "Modular storage for your rear cargo area",
    price: "$165.00",
    image: "/images/4runner-rear-cargo-molle.jpeg",
    href: "/vehicles/4runner/4th-gen/interior/4",
  },
]

export default function ProductShowcase() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              FEATURED PRODUCTS
            </h2>
            <div className="mt-2 h-1 w-20 bg-charcoal-700" />
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-charcoal-600 hover:text-charcoal-800 flex items-center gap-1"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
