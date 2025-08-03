"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Truck } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface VehicleSpecificCTAsProps {
  vehicle: "tacoma" | "4runner"
  generation: string
  className?: string
}

export default function VehicleSpecificCTAs({ vehicle, generation, className = "" }: VehicleSpecificCTAsProps) {
  const vehicleData = {
    tacoma: {
      name: "Tacoma",
      generations: {
        "2nd-gen": { name: "2nd Gen", years: "2005-2015", popular: ["Front Bumper", "Rock Sliders", "Bed Rack"] },
        "3rd-gen": { name: "3rd Gen", years: "2016-2023", popular: ["Front Bumper", "Rear Bumper", "Rock Sliders"] },
        "4th-gen": { name: "4th Gen", years: "2024+", popular: ["Coming Soon", "Pre-Order", "Notify Me"] },
      },
    },
    "4runner": {
      name: "4Runner",
      generations: {
        "3rd-gen": { name: "3rd Gen", years: "1996-2002", popular: ["Front Bumper", "Rock Sliders", "Roof Rack"] },
        "4th-gen": { name: "4th Gen", years: "2003-2009", popular: ["Front Bumper", "MOLLE Panel", "Ladder"] },
        "5th-gen": { name: "5th Gen", years: "2010-2023", popular: ["Front Bumper", "Rear Bumper", "Rock Sliders"] },
        "6th-gen": { name: "6th Gen", years: "2024+", popular: ["Coming Soon", "Pre-Order", "Notify Me"] },
      },
    },
  }

  // Safety check to prevent undefined errors
  const currentVehicle = vehicleData[vehicle]
  if (!currentVehicle) {
    return null
  }

  const currentGen = currentVehicle.generations[generation]
  if (!currentGen) {
    return null
  }

  const isComingSoon = currentGen.popular.includes("Coming Soon")

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Truck className="h-6 w-6 text-charcoal-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {currentGen.name} {currentVehicle.name}
                </h3>
                <p className="text-gray-600 text-sm">{currentGen.years}</p>
              </div>
            </div>

            {!isComingSoon ? (
              <>
                <p className="text-gray-600 mb-4">Popular products for your generation:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentGen.popular.map((product) => (
                    <span key={product} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {product}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-charcoal-700 hover:bg-charcoal-600 text-white flex-1">
                    <Link href={`/vehicles/${vehicle}/${generation}`}>
                      Shop {currentGen.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-charcoal-600 text-charcoal-600 hover:bg-charcoal-600 hover:text-white"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-4">
                  We're developing products for the new {currentGen.name} {currentVehicle.name}. Be the first to know
                  when they're available!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-charcoal-700 hover:bg-charcoal-600 text-white flex-1">
                    <Link href={`/vehicles/${vehicle}/${generation}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-charcoal-600 text-charcoal-600 hover:bg-charcoal-600 hover:text-white"
                  >
                    Notify Me
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
