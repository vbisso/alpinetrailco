import React from 'react';
import ProductPage from '@/components/ProductPage';

const product = {
  name: 'Alpine Trail Cubby',
  description: 'A cozy cubby for your alpine adventures.',
  mainImage: "/images/alpine-trail/cubby-main.jpeg",
  features: [
    'Perfect for storing your hiking gear',
    'Water-resistant material',
    'Compact and portable design'
  ],
  price: 175, // Updated price
  availability: true
};

const Page = () => {
  return (
    <ProductPage product={product} />
  );
};

export default Page;
