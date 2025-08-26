"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const availableProducts = [
  {
    id: "1",
    name: "Alpine Trail Cubby",
    price: "$175.00", // Updated price from $160.00 to $175.00
    image: "/images/alpine-trail/cubby-installed.jpeg", // Updated image path to use the new Alpine Trail Cubby photo
    description: "Secure storage cubby for the rear cargo area",
    href: "/products/alpine-trail/cubby",
    category: "Interior",
  },
  {
    id: "2",
    name: "Center Console MOLLE Panel",
    price: "$129.99",
    image: "/images/4runner-molle-panel-installed-1.jpeg",
    description: "Modular storage solution for your center console",
    href: "/vehicles/4runner/4th-gen/interior/2",
    category: "Interior",
  },
  {
    id: "3",
    name: "Rear Cargo MOLLE Panel",
    price: "$185.00",
    image: "/images/4runner-rear-cargo-molle.jpeg",
    description: "Modular storage for your rear cargo area",
    href: "/vehicles/4runner/4th-gen/interior/4",
    category: "Interior",
  },
  {
    id: "4",
    name: "1st Gen Tundra Interior Modular Panel",
    price: "$145.00",
    image: "/images/tundra/1st-gen-interior-panel-main.jpeg",
    description:
      "Custom MOLLE panel designed specifically for 1st generation Toyota Tundra",
    href: "/products/tundra/1st-gen-interior-panel",
    category: "Interior",
  },
  {
    id: "5",
    name: "Alpine Trail Co. Signature Tee",
    price: "$25.00",
    image: "/images/merch/alpine-trail-shirt-front.png",
    description: "Rep the brand with our signature t-shirt",
    href: "/products/merch/shirt",
    category: "Apparel",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Products</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our currently available premium off-road accessories.
              Every product is designed, engineered, and manufactured in the
              USA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Products */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {availableProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
