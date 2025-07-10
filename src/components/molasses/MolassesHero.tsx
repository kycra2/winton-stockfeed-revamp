
import React from 'react';

const MolassesHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 bg-wsf-blue overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-wsf-blue-dark/60 to-wsf-blue/30" />
        <img
          src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/female-farmer-winton-stock-feed-southland+(1).png"
          alt="Molasses being poured"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Molasses – New Zealand's Favourite Feed Supplement
        </h1>
        
        <div className="max-w-3xl space-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <p className="text-lg">
            Since 1988, Winton StockFeed has been New Zealand's largest independent importer and specialist distributor of molasses, with 7 strategic depots nationwide ensuring reliable supply year-round. Our premium molasses delivers high palatability and energy for all livestock, supporting optimal nutrition and improved production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MolassesHero;
