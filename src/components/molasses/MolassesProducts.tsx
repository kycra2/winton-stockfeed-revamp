
import React from 'react';

const products = [
  {
    name: "Blackstrap Molasses",
    description: "Our standard high-energy liquid feed supplement, perfect for dairy cows, beef cattle, sheep and deer. Contains approximately 70-75% sugar with essential minerals.",
    image: "https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2Fb4742b32ab6ce45c1432915547182d3f6c9eeb56%2Fimage_fx%20%282%29.jpg"
  },
  {
    name: "MolaMate™",
    description: "Our specialized liquid molasses blend fortified with additional minerals and vitamins. Ideal for farms seeking a complete nutritional supplement in one easy application.",
    image: "https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F6b6af69a4c2645e5ffc19b75dcec0dfd3dbb5b3d%2FScreenshot%202025-04-14%20at%2012.12.09%E2%80%AFPM.png"
  },
  {
    name: "Molasses Blends",
    description: "Custom molasses blends tailored to specific nutritional requirements. We can combine molasses with minerals, proteins, or other supplements to create the perfect mix for your herd.",
    image: "https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F6a3a7512378f64b3ca9ad6213ae97cdaf2a686a8%2Fimage_fx%20%283%29.jpg"
  }
];

const MolassesProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2 text-center text-wsf-brown">Our Molasses Products</h2>
        <p className="text-lg text-center text-gray-600 mb-12">Quality liquid feed supplements for all livestock</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden service-card">
              <div className="h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MolassesProducts;
