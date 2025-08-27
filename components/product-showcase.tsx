"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const featuredIds = [
  "center-console-molle-panel",
  "alpine-trail-cubby",
  "rear-cargo-storage-molle-panel",
  "tundra-1st-gen-molle-panel",
  "alpine-trail-shirt-1",
];

function getFeaturedProducts() {
  const result: any[] = [];

  Object.entries(products).forEach(([vehicleKey, generations]) => {
    Object.entries(generations).forEach(([genKey, genData]) => {
      Object.values(genData.categories).forEach((categoryProducts) => {
        Object.values(categoryProducts).forEach((product) => {
          if (featuredIds.includes(product.id)) {
            result.push({
              id: product.id,
              name: product.name,
              vehicle: product.vehicle,
              generation: product.generation,
              price: product.priceFormatted || `$${product.price.toFixed(2)}`,
              image: product.images[0]?.src,
              description: product.shortDescription,
              href: `/products/${vehicleKey}/${genKey}/${product.category}/${product.id}`,
              category: product.category || "general",
            });
          }
        });
      });
    });
  });

  return result;
}

export default function ProductShowcase() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {featuredProducts.map((product, index) => (
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
  );
}
