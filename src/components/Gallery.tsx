
import React from 'react';

const StockfeedSection = () => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundColor: 'rgb(245, 241, 232)',
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-wsf-blue-dark">
        <h2 className="text-4xl font-bold text-center mb-12 text-wsf-blue-dark">
          It has never been so easy to include minerals in your silo blend.
        </h2>

        <p className="mb-6">
          Our typical raw material range can be selected from the following: PKE, Maize DDG, Tapioca, Crushed Grains, Soy Bean Meal, Soya Hulls, Grain Pellets and Molasses — all subject to availability.
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
