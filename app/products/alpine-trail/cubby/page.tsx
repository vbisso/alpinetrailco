"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  id: "alpine-trail-cubby",
  name: "Alpine Trail Cubby",
  price: 125.0,
  description:
    "Maximize your 4th Gen 4Runner's interior storage with the Alpine Trail Cubby. This innovative storage solution replaces the often-unused ashtray to provide a secure and convenient spot for your phone, wallet, or other small essentials. Made from durable, high-quality materials, it's designed for a perfect fit and easy installation.",
  images: [
    {
      id: "1",
      src: "/images/alpine-trail/cubby-installed.jpeg",
      alt: "Alpine Trail Cubby installed in a 4th Gen 4Runner",
    },
    {
      id: "2",
      src: "/images/alpine-trail/cubby.jpeg",
      alt: "Alpine Trail Cubby product view",
    },
  ],
  rating: 5,
  reviews: 8,
  features: [
    "Perfect fit for 4th Gen Toyota 4Runner (2003-2009)",
    "Replaces factory ashtray for a clean, integrated look",
    "Durable, high-impact plastic construction",
    "Easy no-drill installation",
    "Provides convenient storage for small items",
    "Designed and manufactured in the USA",
  ],
  category: "Interior",
  vehicle: "4runner-4th-gen",
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      name: product.name,
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
      <div className="container px-4 py-8 mx-auto">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/vehicles/4runner" className="hover:text-gray-700">
            4Runner
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link
            href="/vehicles/4runner/4th-gen"
            className="hover:text-gray-700"
          >
            4th Gen
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
                className="w-full h-full object-cover"
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
                    className="w-full h-full object-cover bg-gray-100"
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-red-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

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
                title: "Perfect Fitment",
                description: "Engineered specifically for the 4th Gen 4Runner.",
              },
              {
                icon: <Truck className="h-10 w-10 text-red-600" />,
                title: "Fast Shipping",
                description:
                  "Quick and reliable shipping to get your gear to you.",
              },
              {
                icon: <Award className="h-10 w-10 text-red-600" />,
                title: "Made in the USA",
                description: "Proudly designed and manufactured in-house.",
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
