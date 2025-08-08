import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4th Gen 4Runner Front Bumpers",
  description:
    "Explore our selection of front bumpers for the 4th Gen 4Runner.",
};

const frontBumpers = [
  {
    name: "Apex Front Bumper",
    image: "/placeholder.svg?height=400&width=600&text=Product+Image",
    price: "$1,099.99",
    href: "/products/4th-gen-4runner/front-bumpers/apex-front-bumper",
  },
  {
    name: "High Clearance Front Bumper",
    image: "/placeholder.svg?height=400&width=600&text=Product+Image",
    price: "$1,499.99",
    href: "/products/4th-gen-4runner/front-bumpers/high-clearance-front-bumper",
  },
  {
    name: "Tube Front Bumper",
    image: "/placeholder.svg?height=400&width=600&text=Product+Image",
    price: "$899.99",
    href: "/products/4th-gen-4runner/front-bumpers/tube-front-bumper",
  },
];

export default function FrontBumpersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">4th Gen 4Runner Front Bumpers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {frontBumpers.map((bumper) => (
          // <ProductCard
          //   key={bumper.name}
          //   name={bumper.name}
          //   image={bumper.image}
          //   price={bumper.price}
          //   href={bumper.href}
          // />
          <ProductCard
            key={bumper.name}
            product={{
              id: bumper.name,
              name: bumper.name,
              image: bumper.image,
              price: bumper.price,
              href: bumper.href,
            }}
          />
        ))}
      </div>
    </div>
  );
}
