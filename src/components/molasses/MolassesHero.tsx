
import React from 'react';

const MolassesHero = () => {
  return (
    <div className="relative pt-16 md:pt-24 bg-wsf-blue overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-wsf-blue-dark/60 to-wsf-blue/30" />
        <img
          src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F5c749768366ea62dc0afa1dcef62ba9cbb1dff7f%2Fimage_fx.jpg"
          alt="Molasses being poured"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
          Molasses – New Zealand's Favorite Feed Supplement
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
