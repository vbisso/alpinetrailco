"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ChevronRight, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCategoryPageProps {
  params: { vehicle: string; generation: string };
}

export default function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { vehicle, generation } = params;
  const genData = products[vehicle]?.[generation];

  if (!genData) {
    return <div className="p-10 text-center">No products found</div>;
  }

  const categories = genData.categories;
  const allProducts = Object.values(categories).flatMap((cat) =>
    Object.values(cat)
  );

  const availableProducts = allProducts.filter((p) => p.inStock);
  const comingSoonProducts = allProducts.filter((p) => !p.inStock);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] bg-gray-800">
        <Image
          src={genData.image || "/placeholder.svg"}
          alt={`${generation} ${vehicle}`}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase">
            {generation.replace("-", " ")} {vehicle}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Unlock the full potential of your {generation.replace("-", " ")}{" "}
            {vehicle} with our premium off-road fabrication parts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/products/${vehicle}`} className="hover:text-gray-700">
            {vehicle.charAt(0).toUpperCase() + vehicle.slice(1)}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-800 font-medium">
            {generation.replace("-", " ")}
          </span>
        </nav>

        {/* Available Now */}
        {availableProducts.length > 0 && (
          <section id="available-now" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Available Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.priceFormatted || `$${p.price.toFixed(2)}`}
                  image={p.images[0]?.src}
                  description={p.shortDescription}
                  href={`/products/${vehicle}/${generation}/${p.category}/${p.id}`}
                  inStock={p.inStock}
                  vehicle={p.vehicle}
                  generation={p.generation}
                  category={p.category}
                />
              ))}
            </div>
          </section>
        )}

        {/* Coming Soon OR Development Status */}
        {comingSoonProducts.length > 0 ? (
          <section id="coming-soon">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.images[0]?.src}
                  description={p.shortDescription}
                  comingSoon
                  vehicle={p.vehicle}
                  generation={p.generation}
                  category={p.category}
                />
              ))}
            </div>
          </section>
        ) : allProducts.length === 0 ? (
          // Development Status block when no products at all
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">
                PRODUCTS IN DEVELOPMENT
              </h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're currently developing our line of products for the{" "}
              {generation.replace("-", " ")} {vehicle}. Our engineering team is
              working on designs specifically tailored to this generation's
              unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white placeholder-gray-400"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                NOTIFY ME
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Be the first to know when {generation.replace("-", " ")} {vehicle}{" "}
              products become available
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
