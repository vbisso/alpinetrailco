"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";

export default function ProductDetail({ product }: { product: any }) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || product.images[0].src,
      quantity: 1,
    };
    addItem(itemToAdd);
    toast({
      title: "Added to cart",
      description: `${itemToAdd.name} has been added to your cart.`,
      action: (
        <Link href="/cart">
          <Button variant="outline">View Cart</Button>
        </Link>
      ),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container px-4 py-12">
        {/* Breadcrumb (simplified — can be dynamic) */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link
            href={`/products/${product.vehicle}`}
            className="hover:text-gray-700"
          >
            {product.vehicle}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link
            href={`/products/${product.vehicle}/${product.generation}`}
            className="hover:text-gray-700"
          >
            {product.generation}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 font-bold">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 mt-4">
              {product.images.map((img: any) => (
                <button
                  key={img.id}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    mainImage.id === img.id
                      ? "border-charcoal-600"
                      : "border-transparent"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} width={80} height={80} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>

            <p className="text-3xl font-bold text-charcoal-700 mb-6">
              {product.priceFormatted || `$${product.price.toFixed(2)}`}
            </p>

            <Button
              size="lg"
              className="w-full bg-charcoal-700 hover:bg-charcoal-600"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>

            <Tabs defaultValue="features" className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="install">Installation</TabsTrigger>
              </TabsList>

              {product.features && (
                <TabsContent value="features" className="p-4 border bg-gray-50">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </TabsContent>
              )}

              {product.specifications && (
                <TabsContent value="specs" className="p-4 border bg-gray-50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    {product.specifications.map((spec: any, i: number) => (
                      <div key={i}>
                        <span className="font-semibold">{spec.label}:</span>{" "}
                        {spec.value}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              )}

              {product.installation && (
                <TabsContent value="install" className="p-4 border bg-gray-50">
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    {product.installation.map((step: string, i: number) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
