"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products, Product } from "@/data/products";

// Flatten products from the 4-level dictionary
const allProducts: Product[] = Object.entries(products)
  .flatMap(([vehicleKey, generations]) =>
    Object.entries(generations).flatMap(([generationKey, generationData]) =>
      Object.entries(generationData.categories).flatMap(
        ([categoryKey, items]) =>
          Object.values(items).map((product: any) => ({
            ...product,
            vehicle: vehicleKey,
            generation: generationKey,
            category: categoryKey,
          }))
      )
    )
  )
  .filter((product) => product.inStock);

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
            <ChevronRight className="h-4 w-4 mx-2" />

            <span className="text-gray-900 font-bold">Products</span>
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
          {allProducts.length === 0 ? (
            <div className="text-center text-gray-600 text-lg">
              No products available.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {allProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    vehicle={product.vehicle}
                    generation={product.generation}
                    price={
                      product.priceFormatted ||
                      (typeof product.price === "number"
                        ? `$${product.price.toFixed(2)}`
                        : undefined)
                    }
                    image={product.images?.[0]?.src}
                    description={product.shortDescription}
                    href={`/products/${product.vehicle}/${product.generation}/${product.category}/${product.id}`}
                    inStock={product.inStock}
                    category={product.category}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
