"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

// Utility to get featured products directly from dictionary
function getFeaturedProducts() {
  return [
    products["4runner"]["4th-gen"]["interior"]["center-console-molle-panel"],
    products["4runner"]["4th-gen"]["interior"]["alpine-trail-cubby"],
    products["4runner"]["4th-gen"]["interior"][
      "rear-cargo-storage-molle-panel"
    ],
    products["tundra"]["1st-gen"]["interior"]["tundra-1st-gen-molle-panel"],
  ];
}

export default function ProductShowcase() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {featuredProducts.map((product: any) => {
        const href = `/products/${product.vehicle}/${product.generation}/${product.category}/${product.id}`;

        return (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src={product.images[0]?.src || "/placeholder.svg"}
                alt={product.images[0]?.alt || product.name}
                width={400}
                height={400}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  <Link href={href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.shortDescription}
                </p>
              </div>
              <p className="text-lg font-medium text-gray-900">
                {product.priceFormatted || `$${product.price.toFixed(2)}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
