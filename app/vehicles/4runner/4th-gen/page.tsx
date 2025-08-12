import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BajaDesignsShowcase from "@/components/baja-designs-showcase";

const availableProducts = [
  {
    id: "center-console-molle-panel",
    name: "Center Console MOLLE Panel",
    price: "$129.99",
    image: "/images/4runner-molle-panel-installed-1.jpeg",
    category: "Interior",
    href: "/vehicles/4runner/4th-gen/interior/2",
    description: "Modular storage solution for your center console",
  },
  {
    id: "alpine-trail-cubby",
    name: "Alpine Trail Cubby",
    price: "$175.00",
    image: "/images/alpine-trail/cubby-installed.jpeg",
    category: "Interior",
    href: "/products/alpine-trail/cubby",
    description: "Secure storage cubby for the rear cargo area",
  },
  {
    id: "rear-cargo-molle-panel",
    name: "4th Gen 4Runner Rear Cargo Storage MOLLE Panel",
    price: "$165.00",
    image: "/images/4runner-rear-cargo-molle.jpeg",
    category: "Interior",
    href: "/vehicles/4runner/4th-gen/interior/4",
    description: "Modular storage for your rear cargo area",
  },
];
const comingSoonProducts = [
  {
    id: "expedition-front-bumper",
    name: "Expedition Front Bumper",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Front Bumpers",
    description: "Heavy-duty front bumper for maximum protection.",
  },
  {
    id: "high-clearance-front-bumper",
    name: "High Clearance Front Bumper",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Front Bumpers",
    description:
      "Designed for improved approach angles and off-road clearance.",
  },
  {
    id: "rock-sliders",
    name: "Rock Sliders",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Rock Sliders",
    description: "Protect your vehicle's body from trail damage.",
  },
  {
    id: "rear-bumper",
    name: "Rear Bumper",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Rear Bumpers",
    description: "Full rear protection with optional swing-out carriers.",
  },
  {
    id: "roof-rack",
    name: "Roof Rack",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Roof Racks",
    description: "Low-profile and modular roof rack for all your gear.",
  },
  {
    id: "skid-plates",
    name: "Skid Plates",
    image: "/images/coming-soon-placeholder.jpeg",
    category: "Armor",
    description: "Complete underbody protection for vital components.",
  },
];

export default function FourthGen4RunnerPage() {
  return (
    <div className="bg-white">
      <div className="relative h-[40vh] min-h-[300px] bg-gray-800">
        <Image
          src="/images/4runner-4th-gen-hero-1.jpeg"
          alt="4th Gen Toyota 4Runner"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            4th Gen 4Runner (2003-2009)
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Unlock the full potential of your 4th Gen 4Runner with our premium
            off-road fabrication parts.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/vehicles/4runner" className="hover:text-gray-700">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-800 font-medium">4th Gen</span>
        </nav>

        <section id="available-now" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Available Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section id="baja-designs" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Baja Designs Lighting
            </h2>
            <p className="text-gray-600 mt-2">
              Illuminate your path with the best in off-road lighting.
            </p>
          </div>
          <BajaDesignsShowcase />
        </section>

        <section id="coming-soon">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProducts.map((p) => (
              // <ProductCard key={product.id} product={product} comingSoon />
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                image={p.image}
                description={p.description}
                comingSoon
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
