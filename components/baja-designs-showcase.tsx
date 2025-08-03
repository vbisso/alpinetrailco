"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Info } from "lucide-react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const featuredProducts = [
  {
    id: 1,
    name: "Squadron Racer LED Light",
    price: "$299.95",
    image: "/images/baja-designs/squadron-racer.jpg",
    category: "lights",
  },
  {
    id: 3,
    name: "LP6 Pro LED Light",
    price: "$399.95",
    image: "/images/baja-designs/lp6-pro-clear.jpg",
    category: "lights",
  },
  {
    id: 5,
    name: "S2 Pro LED Light",
    price: "$249.95",
    image: "/images/baja-designs/s2-pro-clear.jpg",
    category: "lights",
  },
  {
    id: 8,
    name: "Rock Light Kit",
    price: "$399.95",
    image: "/images/baja-designs/rock-lights-clear.jpg",
    category: "lights",
  },
]

export default function BajaDesignsShowcase() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white border-gray-200 overflow-hidden group rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-charcoal-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Baja Designs
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-charcoal-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-charcoal-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Drop-shipped from Baja Designs</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-charcoal-600 font-bold text-xl mb-4">{product.price}</p>
                <Link href={`/products/baja-designs/${product.id}`}>
                  <Button className="w-full bg-charcoal-700 hover:bg-charcoal-600 text-white transition-colors duration-300 rounded-lg">
                    VIEW DETAILS
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
