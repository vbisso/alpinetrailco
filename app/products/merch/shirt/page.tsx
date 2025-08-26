"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";
import {
  CheckCircle,
  ChevronRight,
  Star,
  Truck,
  Shield,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

const product = {
  id: "alpine-trail-shirt-1",
  name: "Alpine Trail Co. Signature Tee",
  price: 25.0,
  description:
    "Show your support for Alpine Trail Co. with our signature t-shirt. Made from a comfortable cotton blend, this shirt features our classic logo on the front and a custom vintage truck design on the back. Perfect for on and off the trail.",
  images: [
    {
      id: "1",
      src: "/images/merch/alpine-trail-shirt-front.png",
      alt: "Alpine Trail Co. T-Shirt Front",
    },
    {
      id: "2",
      src: "/images/merch/alpine-trail-shirt-back.png",
      alt: "Alpine Trail Co. T-Shirt Back",
    },
  ],
  options: [{ name: "Size", values: ["Small", "Medium", "Large", "XL"] }],
  features: [
    "Soft and comfortable cotton blend",
    "Durable screen-printed graphics",
    "Classic fit with crew neck",
    "Designed and printed in the USA",
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("Medium");
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: `${product.id}-${selectedSize}`,
      name: `${product.name} - ${selectedSize}`,
      price: product.price,
      image: product.images[0].src,
      category: "Apparel",
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
      <div className="container px-4 py-8 mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={800}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    selectedImage.id === image.id
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain bg-gray-100 p-2"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-red-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <Label className="text-lg font-medium text-gray-900 mb-2 block">
                Size
              </Label>
              <RadioGroup
                defaultValue="Medium"
                className="flex flex-wrap gap-4"
                onValueChange={setSelectedSize}
                value={selectedSize}
              >
                {product.options[0].values.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`flex items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
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

            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full text-lg"
            >
              Add to Cart
            </Button>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 mt-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Shield className="h-10 w-10 text-red-600" />,
                title: "Quality Materials",
                description:
                  "Made from premium fabrics for comfort and durability.",
              },
              {
                icon: <Truck className="h-10 w-10 text-red-600" />,
                title: "Fast Shipping",
                description:
                  "Quick and reliable shipping to get your gear to you.",
              },
              {
                icon: <Award className="h-10 w-10 text-red-600" />,
                title: "Authentic Design",
                description: "Original designs you won't find anywhere else.",
              },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
