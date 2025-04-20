import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 md:pt-24 bg-wsf-blue overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-wsf-blue-dark/30 to-wsf-blue/10" />
        <img
          src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F3ea2475657f394ce280c23d9ed0d427ab89a66e0%2Fwinton-hero.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=format&fit=crop&q=80"
          alt="New Zealand dairy farm landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Winton StockFeed – New Zealand's Independent Stock Feed Specialists.
        </h1>
        
        <div className="max-w-3xl space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-lg">
            Operating since 1988, Winton StockFeed is proud to be NZ's only independent national molasses importer and supplier — but we're much more than that. We specialise in supplying a wide range of high-quality stock feeds including PKE, Soyhulls, Distillers Dried Grains (DDGS), and other essential feed options, tailored to support Southland and Otago farmers year-round.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
