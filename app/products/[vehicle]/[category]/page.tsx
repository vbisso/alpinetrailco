import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ProductPageProps {
  params: {
    vehicle: string
    category: string
  }
}

export default function ProductCategoryPage({ params }: ProductPageProps) {
  const { vehicle, category } = params

  // This would be replaced with actual data fetching in a real application
  const products = [
    {
      id: 1,
      name: `${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} - Pro Series`,
      price: "$1,299.99",
      image: "/placeholder.svg?height=400&width=600",
      description: "Our flagship model with integrated LED lighting and winch compatibility.",
    },
    {
      id: 2,
      name: `${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} - Trail Series`,
      price: "$999.99",
      image: "/placeholder.svg?height=400&width=600",
      description: "Designed for the weekend warrior with essential protection and recovery points.",
    },
    {
      id: 3,
      name: `${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} - Expedition Series`,
      price: "$1,499.99",
      image: "/placeholder.svg?height=400&width=600",
      description: "Our most comprehensive option with maximum protection and accessory mounts.",
    },
    {
      id: 4,
      name: `${vehicle.charAt(0).toUpperCase() + vehicle.slice(1)} ${category.charAt(0).toUpperCase() + category.slice(1)} - Stealth Series`,
      price: "$1,199.99",
      image: "/placeholder.svg?height=400&width=600",
      description: "Low-profile design that maintains factory approach angles while adding protection.",
    },
  ]

  const vehicleDisplay = vehicle === "tacoma" ? "Tacoma" : "4Runner"
  const categoryDisplay = (() => {
    switch (category) {
      case "bumpers":
        return "Front Bumpers"
      case "rear-bumpers":
        return "Rear Bumpers"
      case "sliders":
        return "Rock Sliders"
      case "racks":
        return "Roof Racks"
      default:
        return category.charAt(0).toUpperCase() + category.slice(1)
    }
  })()

  return (
    <div className="container px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {vehicleDisplay} {categoryDisplay}
        </h1>
        <p className="text-gray-300">
          Premium quality {categoryDisplay.toLowerCase()} designed specifically for your {vehicleDisplay}, offering
          superior protection and enhanced off-road capability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-zinc-800 border-zinc-700 overflow-hidden group">
            <div className="aspect-video overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-white text-xl mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-3 line-clamp-2">{product.description}</p>
              <p className="text-red-500 font-bold mb-4">{product.price}</p>
              <Link href={`/products/${vehicle}/${category}/${product.id}`}>
                <Button className="w-full bg-zinc-700 hover:bg-red-600">VIEW DETAILS</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
