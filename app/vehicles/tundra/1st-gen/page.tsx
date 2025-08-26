import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function Tundra1stGenPage() {
  const availableProducts = [
    {
      id: "tundra-interior-panel",
      name: "1st Gen Tundra Interior Modular Panel",
      price: "$145.00",
      image: "/images/tundra/1st-gen-molle-panel-1.jpeg",
      category: "INTERIOR",
      href: "/vehicles/tundra/1st-gen/interior/1",
      description: "Modular storage solution for your center console",
    },
  ];

  const comingSoonProducts = [
    {
      id: "tundra-front-bumper",
      name: "1st Gen Tundra Front Bumper",
      price: "Coming Soon",
      image: "/images/coming-soon-placeholder.jpeg",
      category: "FRONT BUMPERS",
      href: "#",
    },
    {
      id: "tundra-rock-sliders",
      name: "1st Gen Tundra Rock Sliders",
      price: "Coming Soon",
      image: "/images/coming-soon-placeholder.jpeg",
      category: "ROCK SLIDERS",
      href: "#",
    },
  ];

  const merchProducts = [
    {
      id: "alpine-trail-tee",
      name: "Alpine Trail Co. Signature Tee",
      price: "$25.00",
      image: "/images/merch/alpine-trail-shirt-front.png",
      category: "MERCH",
      href: "/products/merch/shirt",
      description: "Show your Alpine Trail Co. pride",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-900 py-4">
        <div className="container px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <Link
              href="/vehicles/tundra"
              className="text-gray-300 hover:text-white"
            >
              Tundra
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-500" />
            <span className="text-white font-medium">1st Gen (2000-2006)</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="/images/tundra/toyota-tundra-1st-generation-pickup-truck.jpeg"
            alt="1st Gen Toyota Tundra"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            1ST GEN TUNDRA
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            2000-2006 • Premium accessories for your first-generation Tundra
          </p>
        </div>
      </section>

      {/* Available Now Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Now
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Rep the Brand Section */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rep the Brand
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Exciting new products in development for your 1st Gen Tundra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                comingSoon
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
