"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "Center Console MOLLE Panel",
      description: "Modular storage solution for your center console",
      image: "/images/4runner-molle-panel-installed-1.jpeg", // Changed to real photo
      link: "/vehicles/4runner/4th-gen/interior/1",
      price: "$129.99",
    },
    {
      id: 2,
      name: "Alpine Trail Cubby",
      description: "Secure storage cubby for the rear cargo area",
      image: "/images/alpine-trail/cubby-main.jpeg",
      link: "/products/alpine-trail/cubby",
      price: "$175.00",
    },
    {
      id: 3,
      name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
      description: "Modular storage for your rear cargo area",
      image: "/images/alpine-trail/rear-cargo-molle-main.jpeg",
      link: "/vehicles/4runner/4th-gen/interior/4",
      price: "$165.00",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={product.link} className="block group">
            <Card className="bg-white border-gray-200 overflow-hidden group rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-charcoal-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-charcoal-700 font-bold text-lg">{product.price}</p>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
