"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";
import { Product } from "@/data/products";

export default function ApparelProductDetail({
  product,
}: {
  product: Product;
}) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(
    product.options?.[0].values[0] || "Medium"
  );
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} - ${selectedSize}`,
      price: product.price,
      image: product.images[0].src,
      category: product.category,
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
    <div className="bg-white">
      <div className="container px-4 py-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={800}
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`aspect-square rounded-md overflow-hidden border-2 ${
                  selectedImage.id === img.id
                    ? "border-red-600"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain bg-gray-100 p-2"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-red-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Size Selector */}
          {product.options?.map((opt) => (
            <div key={opt.name} className="mb-6">
              <Label className="text-lg font-medium mb-2 block">
                {opt.name}
              </Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-4"
              >
                {opt.values.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`px-4 py-2 border-2 rounded-md cursor-pointer ${
                        selectedSize === size
                          ? "bg-red-600 border-red-600 text-white"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full text-lg"
          >
            Add to Cart
          </Button>

          {/* Features */}
          {product.features && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
