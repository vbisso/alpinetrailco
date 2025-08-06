import React from 'react';

interface ProductPageProps {
  // You can define props here if needed in the future
  children?: React.ReactNode;
}

const ProductPage: React.FC<ProductPageProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  );
};

export default ProductPage;
