
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ProductLayoutProps {
  children: React.ReactNode;
  title: string;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="container-custom py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductLayout;
