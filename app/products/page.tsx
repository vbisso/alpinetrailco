"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const allProducts = Object.entries(products).flatMap(
  ([vehicleKey, categories]) =>
    Object.entries(categories).flatMap(([categoryKey, items]) =>
      Object.values(items).map((product) => ({
        id: product.id,
        name: product.name,
        price: product.priceFormatted || `$${product.price.toFixed(2)}`,
        image: product.images[0]?.src,
        description: product.shortDescription,
        href: `/products/${vehicleKey}/${categoryKey}/${product.id}`,
        category: product.category || categoryKey,
      }))
    )
);

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
              Discover our premium off-road accessories. Designed, engineered,
              and manufactured in the USA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allProducts.map((product, index) => (
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
