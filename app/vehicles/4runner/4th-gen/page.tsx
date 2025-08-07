import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import BajaDesignsShowcase from '@/components/baja-designs-showcase';

const availableProducts = [
  {
    name: 'Expedition Series Front Bumper',
    description: 'Full-width protection with winch compatibility.',
    price: '$1,899.99',
    imageUrl: '/images/4runner-expedition-bumper-front-1.png',
    link: '/vehicles/4runner/4th-gen/front-bumpers/1',
  },
  {
    name: 'High Clearance Front Bumper',
    description: 'Maximum approach angle and aggressive styling.',
    price: '$1,699.99',
    imageUrl: '/images/4runner-high-clearance-bumper-front-view.png',
    link: '/vehicles/4runner/4th-gen/front-bumpers/4',
  },
  {
    name: 'Rock Sliders',
    description: 'Essential body protection for serious trails.',
    price: '$949.99',
    imageUrl: '/images/4runner-rock-sliders-1.jpeg',
    link: '/vehicles/4runner/4th-gen/rock-sliders/1',
  },
  {
    name: 'Center Console MOLLE Panel',
    description: 'Organize your gear with easy-access mounting.',
    price: '$129.99',
    imageUrl: '/images/4runner-molle-panel-main.png',
    link: '/vehicles/4runner/4th-gen/interior/1',
  },
  {
    name: 'Rear Cargo MOLLE Panels',
    description: 'Maximize your cargo area organization.',
    price: '$249.99',
    imageUrl: '/images/4runner-rear-cargo-molle.jpeg',
    link: '/vehicles/4runner/4th-gen/interior/2',
  },
  {
    name: 'Alpine Trail Cubby',
    description: 'Replaces the ashtray with useful storage.',
    price: '$149.99',
    imageUrl: '/images/alpine-trail/cubby.jpeg',
    link: '/products/alpine-trail/cubby',
  },
  {
    name: 'Alpine Trail Co. Signature Tee',
    description: 'Rep the brand with our premium quality t-shirt.',
    price: '$29.99',
    imageUrl: '/images/merch/alpine-trail-shirt-front.png',
    link: '/products/merch/shirt',
  },
];

const comingSoonProducts = [
  {
    name: 'Full Roof Rack',
    description: 'Low-profile and modular for all your gear.',
    imageUrl: '/images/coming-soon-placeholder.jpeg',
  },
  {
    name: 'Rear Bumper System',
    description: 'Complete your armor with optional swing-outs.',
    imageUrl: '/images/coming-soon-placeholder.jpeg',
  },
  {
    name: 'Skid Plate Package',
    description: 'Full underbody protection from front to back.',
    imageUrl: '/images/coming-soon-placeholder.jpeg',
  },
];

export default function FourthGen4RunnerPage() {
  return (
    <div className="bg-gray-50">
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/4runner-4th-gen-hero-1.jpeg"
          alt="4th Gen 4Runner on a trail"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">4th Gen 4Runner</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl">
            (2003-2009) - The perfect blend of modern capability and classic reliability. Build yours to conquer any terrain.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-12">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight size={16} />
          <Link href="/vehicles/4runner" className="hover:text-gray-700">4Runner</Link>
          <ChevronRight size={16} />
          <span className="font-medium text-gray-800">4th Gen (2003-2009)</span>
        </div>

        <section id="available-now" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {availableProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        <section id="coming-soon" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Coming Soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {comingSoonProducts.map((product) => (
              <ProductCard key={product.name} {...product} isComingSoon />
            ))}
          </div>
        </section>

        <BajaDesignsShowcase />
      </div>
    </div>
  );
}
