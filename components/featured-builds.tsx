"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const builds = [
  {
    id: 1,
    title: "Tacoma TRD Off-Road Build",
    description: "Complete front and rear bumper setup with rock sliders and roof rack",
    image: "/placeholder.svg?height=600&width=800",
    owner: "Mike T.",
    vehicle: "3rd Gen Tacoma",
  },
  {
    id: 2,
    title: "4Runner Trail Edition",
    description: "High clearance front bumper with integrated winch and full underbody protection",
    image: "/placeholder.svg?height=600&width=800",
    owner: "Sarah K.",
    vehicle: "5th Gen 4Runner",
  },
  {
    id: 3,
    title: "Tacoma Overland Build",
    description: "Expedition-ready with custom storage solutions and reinforced suspension",
    image: "/placeholder.svg?height=600&width=800",
    owner: "Chris R.",
    vehicle: "3rd Gen Tacoma",
  },
  {
    id: 4,
    title: "4Runner Rock Crawler",
    description: "Extreme off-road package with maximum articulation and protection",
    image: "/placeholder.svg?height=600&width=800",
    owner: "Jessica M.",
    vehicle: "4th Gen 4Runner",
  },
]

export default function FeaturedBuilds() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const buildsPerView = 3
  const maxIndex = builds.length - buildsPerView

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const visibleBuilds = builds.slice(currentIndex, currentIndex + buildsPerView)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleBuilds.map((build, index) => (
          <motion.div
            key={build.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white border-gray-200 overflow-hidden group rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={build.image || "/placeholder.svg"}
                  alt={build.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-charcoal-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {build.vehicle}
                </div>
              </div>
              <CardContent className="p-6 flex flex-col h-[calc(100%-33.33%)]">
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-charcoal-600 transition-colors duration-300">
                  {build.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{build.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">Built for: {build.owner}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-charcoal-600 hover:text-charcoal-700 hover:bg-transparent p-0 flex items-center gap-1"
                  >
                    View Build <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {builds.length > buildsPerView && (
        <div className="flex justify-center mt-12 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="border-gray-300 text-gray-700 hover:bg-charcoal-600 hover:text-white hover:border-charcoal-600 transition-colors duration-300 rounded-full h-12 w-12 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="border-gray-300 text-gray-700 hover:bg-charcoal-600 hover:text-white hover:border-charcoal-600 transition-colors duration-300 rounded-full h-12 w-12 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
