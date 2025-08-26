import { products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ProductCategoryPageProps {
  params: {
    vehicle: string;
    generation: string;
  };
}

export default function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { vehicle, generation } = params;

  // All categories under this generation
  const categories = products[vehicle]?.[generation];

  if (!categories) {
    return <div className="p-10 text-center">No products found</div>;
  }

  // Flatten all products across categories
  const allProducts: Product[] = Object.values(categories).flatMap(
    (categoryProducts) => Object.values(categoryProducts)
  );

  return (
    <div className="container px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {vehicle.toUpperCase()} {generation.toUpperCase()}
        </h1>
        <p className="text-gray-300">
          Premium {generation.replace("-", " ")} accessories designed
          specifically for your {vehicle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <Card
            key={product.id}
            className="bg-zinc-800 border-zinc-700 overflow-hidden group"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={product.images[0]?.src || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-white text-xl mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-3 line-clamp-2">
                {product.shortDescription}
              </p>
              <p className="text-red-500 font-bold mb-4">
                {product.priceFormatted || `$${product.price.toFixed(2)}`}
              </p>
              <Link
                href={`/products/${product.vehicle}/${product.generation}/${product.category}/${product.id}`}
              >
                <Button className="w-full bg-zinc-700 hover:bg-red-600">
                  VIEW DETAILS
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
