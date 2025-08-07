import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Clock, Mail } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function StandardRockSlidersPage() {
  const relatedProducts = [
    {
      id: "expedition-front-bumper",
      name: "Expedition Series Front Bumper",
      price: "$1,850.00",
      image: "/images/coming-soon-placeholder.jpeg",
      href: "/vehicles/4runner/4th-gen/front-bumpers/1",
    },
    {
      id: "high-clearance-front-bumper",
      name: "High Clearance Front Bumper",
      price: "$1,650.00",
      image: "/images/coming-soon-placeholder.jpeg",
      href: "/vehicles/4runner/4th-gen/front-bumpers/4",
    },
    {
      id: "alpine-trail-cubby",
      name: "Alpine Trail Cubby",
      price: "$175.00",
      image: "/images/alpine-trail/cubby-installed.jpeg",
      href: "/products/alpine-trail/cubby",
    },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner" className="hover:text-gray-700">4Runner</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-gray-700">4th Gen</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/vehicles/4runner/4th-gen/rock-sliders" className="hover:text-gray-700">Rock Sliders</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="font-medium text-gray-800">Standard Rock Sliders</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square w-full rounded-lg overflow-hidden bg-gray-100 mb-4">
              <Image
                src="/images/coming-soon-placeholder.jpeg"
                alt="Standard Rock Sliders"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Standard Rock Sliders</h1>
            <p className="mt-4 text-3xl text-gray-900">$950.00</p>

            <div className="mt-6">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md" role="alert">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-3" />
                  <p className="font-bold">Coming Soon!</p>
                </div>
                <p className="mt-2">This product is currently in development. Sign up below to be notified when it becomes available for pre-order.</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  Protect your 4th Gen 4Runner's rocker panels from rocks, stumps, and other trail hazards with our heavy-duty rock sliders. These sliders are built to take a beating, providing peace of mind on the toughest trails.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Features</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>Frame-mounted for maximum strength</li>
                <li>Optional kick-out for added protection and use as a step</li>
                <li>CNC cut and formed from heavy-duty steel tubing</li>
                <li>Durable black powder coat finish</li>
                <li>Bolt-on installation</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Get Notified</h3>
              <p className="text-gray-600 mt-2">Be the first to know when this product is available.</p>
              <div className="mt-4 flex gap-2">
                <Input type="email" placeholder="Your email address" className="flex-grow" />
                <Button className="bg-charcoal-700 hover:bg-charcoal-600 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">You Might Also Like</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <Link href={product.href}>
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-gray-900">{product.price}</p>
                    <Button asChild>
                      <Link href={product.href}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
