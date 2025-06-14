import React from 'react';

const StockfeedSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F6a3a7512378f64b3ca9ad6213ae97cdaf2a686a8%2Fimage_fx%20%283%29.jpg')`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          It has never been so easy to include minerals in your silo blend.
        </h2>

        <p className="mb-6">
          Our typical raw material range can be selected from the following: PKE, Maize DDG, Crushed Grains, Soya Bean Meal, Soya Hulls, Grain Pellets and Molasses — all subject to availability.
          Worth noting is that all our PKE is screened before being blended.
        </p>

        <p>
          Our state-of-the-art blending plant uses an automated system to provide blended dairy feeds with almost any additive.
          These blends are made straight onto the truck and delivered to your silo — meaning one less thing for farmers to worry about.
        </p>
      </div>
    </section>
  );
};

export default StockfeedSection;
