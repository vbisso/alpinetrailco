import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function FourRunnerFourthGenRockSlidersPage() {
  // Rock slider products for 4th Gen 4Runner
  const products = [
    {
      id: 1,
      name: "4th Gen 4Runner Heavy Duty Rock Sliders",
      price: "$899.99",
      image: "/images/4runner-rock-sliders-1.jpeg",
      description:
        "Heavy-duty rock sliders with integrated kick-out step, providing rocker panel protection and easy vehicle access for your 4th Gen 4Runner.",
    },
    {
      id: 2,
      name: "4th Gen 4Runner Low Profile Rock Sliders",
      price: "$799.99",
      image: "/images/4runner-rock-sliders-2.jpeg",
      description:
        "Low-profile rock sliders designed for maximum ground clearance while providing essential rocker panel protection.",
    },
    {
      id: 3,
      name: "4th Gen 4Runner Expedition Rock Sliders",
      price: "$999.99",
      image: "/placeholder.svg?height=400&width=600&text=Expedition+Sliders",
      description:
        "Expedition-grade rock sliders with integrated recovery points and additional mounting provisions for accessories.",
    },
    {
      id: 4,
      name: "4th Gen 4Runner Stealth Rock Sliders",
      price: "$849.99",
      image: "/placeholder.svg?height=400&width=600&text=Stealth+Sliders",
      description: "Stealth design rock sliders that maintain factory appearance while providing superior protection.",
    },
  ]

  return (
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
        <span className="text-gray-600">Rock Sliders</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">4th Gen 4Runner Rock Sliders</h1>
        <p className="text-gray-600">
          Premium quality rock sliders designed specifically for your 4th Gen 4Runner (2003-2009), offering superior
          rocker panel protection and enhanced off-road capability with integrated step functionality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-white border-gray-200 overflow-hidden group">
            <div className="aspect-video overflow-hidden bg-gray-50">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-gray-900 text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
              <p className="text-charcoal-600 font-bold mb-4">{product.price}</p>
              <Link href={`/vehicles/4runner/4th-gen/rock-sliders/${product.id}`}>
                <Button className="w-full bg-charcoal-700 hover:bg-charcoal-600">VIEW DETAILS</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
