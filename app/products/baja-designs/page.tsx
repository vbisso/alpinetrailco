import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const bajaDesignsProducts = [
  {
    id: "squadron-pro",
    name: "Squadron Pro LED Lights",
    price: "$299.00",
    description:
      "Compact and powerful, the Squadron Pro is the perfect auxiliary light.",
    image: "/images/baja-designs/squadron-pro.png",
    href: "/products/baja-designs/squadron-pro",
    category: "Pod Lights",
    inStock: true,
  },
  {
    id: "s8-light-bar",
    name: "S8 LED Light Bar",
    price: "$899.00",
    description:
      "Sleek and powerful, the S8 is a versatile light bar for any application.",
    image: "/images/baja-designs/s8-light-bar.png",
    href: "/products/baja-designs/s8-light-bar",
    category: "Light Bars",
    inStock: true,
  },
  {
    id: "lp6-pro",
    name: "LP6 Pro LED Auxiliary Light",
    price: "$449.00",
    description:
      "The LP6 Pro is a high-performance auxiliary light with integrated DRL.",
    image: "/images/baja-designs/lp6-pro.png",
    href: "/products/baja-designs/lp6-pro",
    category: "Round Lights",
    inStock: true,
  },
  {
    id: "s1-backup-light",
    name: "S1 Backup Light",
    price: "$129.99",
    description:
      "Compact and incredibly bright, the S1 is perfect for backup or utility lighting.",
    image: "/images/baja-designs/s1-backup-light.png",
    href: "#",
    category: "Utility Lights",
    inStock: false,
  },
  {
    id: "onx6-arc",
    name: "OnX6 Arc Series Light Bar",
    price: "$1,299.99",
    description:
      "The OnX6 Arc Series offers a curved design for a wider light spread.",
    image: "/images/baja-designs/onx6-arc.png",
    href: "#",
    category: "Light Bars",
    inStock: false,
  },
  {
    id: "rock-lights",
    name: "Rock Lights",
    price: "$99.99",
    description: "Illuminate your surroundings with Baja Designs Rock Lights.",
    image: "/images/baja-designs/rock-lights.png",
    href: "#",
    category: "Utility Lights",
    inStock: false,
  },
  {
    id: "xl80-light",
    name: "XL80 LED Auxiliary Light",
    price: "$449.99",
    description:
      "The XL80 provides an incredible amount of light in a compact package.",
    image: "/images/baja-designs/xl80-light.png",
    href: "#",
    category: "Pod Lights",
    inStock: false,
  },
  {
    id: "s2-pro",
    name: "S2 Pro LED Light",
    price: "$199.99",
    description:
      "Small but mighty, the S2 Pro is a versatile light for various applications.",
    image: "/images/baja-designs/s2-pro.png",
    href: "#",
    category: "Pod Lights",
    inStock: false,
  },
  {
    id: "rtl-s-tail-light",
    name: "RTL-S Tail Light Bar",
    price: "$299.99",
    description:
      "Integrated tail light, brake light, and reverse light in one sleek bar.",
    image: "/images/baja-designs/rtl-s-tail-light.png",
    href: "#",
    category: "Tail Lights",
    inStock: false,
  },
  {
    id: "fog-light-kit",
    name: "Fog Light Kit",
    price: "$399.99",
    description:
      "Upgrade your factory fog lights with high-performance Baja Designs LEDs.",
    image: "/images/baja-designs/fog-light-kit.png",
    href: "#",
    category: "Fog Lights",
    inStock: false,
  },
];

export default function BajaDesignsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          BAJA DESIGNS LIGHTING
        </h1>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/baja-designs/baja-designs-logo.jpeg"
            alt="Baja Designs Logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our selection of high-performance off-road lighting solutions
          from Baja Designs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bajaDesignsProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            href={product.href}
            category={product.category}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}
