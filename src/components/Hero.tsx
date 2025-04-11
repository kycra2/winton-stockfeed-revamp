
import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 md:pt-24 bg-wsf-blue overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-wsf-blue-dark/60 to-wsf-blue/30" />
        <img
          src="https://images.pexels.com/photos/7865813/pexels-photo-7865813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&q=80"
          alt="New Zealand dairy farm landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Winton StockFeed – New Zealand's Independent Stock Feed Specialists
        </h1>
        
        <div className="max-w-3xl space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-lg">
            Operating since 1988, Winton StockFeed is proud to be NZ's only independent molasses importer — but we're much more than that. We specialise in a wide range of high-quality stock feeds including PKE, Soyhulls, Dried Grain Extract (DGE), and other essential feed options tailored to support Kiwi farmers year-round.
          </p>
          
          <div className="pt-6">
            <a href="#services" className="btn-primary">
              Explore Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
