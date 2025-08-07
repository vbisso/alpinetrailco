'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/cart-context';
import { ChevronRight } from 'lucide-react';

const product = {
  id: 'alpine-trail-cubby',
  name: 'Alpine Trail Cubby',
  price: 149.99,
  images: [
    '/images/alpine-trail/cubby.jpeg',
    '/images/alpine-trail/cubby-installed.jpeg',
  ],
  description:
    'Maximize your 4th Gen 4Runner’s interior storage with the Alpine Trail Cubby. This innovative storage solution replaces the often-unused ashtray with a practical, easy-access cubby, perfect for storing your phone, wallet, keys, and other small essentials. Made from durable, high-quality materials, it’s designed for a perfect fit and a seamless, factory-look installation.',
  features: [
    'Replaces factory ashtray for increased usable space',
    'Perfect for holding phones, wallets, and small gear',
    'Durable, high-impact ABS plastic construction',
    'Simple, no-drill installation',
    'Designed specifically for the 4th Gen Toyota 4Runner (2003-2009)',
  ],
};

export default function AlpineTrailCubbyPage() {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight size={16} />
          <Link href="/vehicles/4runner/4th-gen" className="hover:text-gray-700">4th Gen 4Runner</Link>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-800">Alpine Trail Cubby</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`aspect-square w-full rounded-md overflow-hidden border-2 ${
                    mainImage === image ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-3xl text-gray-900">${product.price.toFixed(2)}</p>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
              <ul role="list" className="list-disc space-y-2 pl-4 mt-4 text-sm text-gray-600">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
