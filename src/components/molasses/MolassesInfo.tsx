
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "High in energy with essential minerals",
  "Contains natural sugars for improved palatability",
  "Increases dry matter feed intake",
  "Ideal binding agent for feed blends",
  "Reduces dust in feed mixes",
  "Can be used in conventional and organic farming systems"
];

const MolassesInfo = () => {
  return (
    <section className="py-16 bg-wsf-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-wsf-brown">What is Molasses?</h2>
            <p className="mb-4 text-gray-700">
              Molasses is a nutrient-rich by-product of sugar production, created when sugarcane or sugar beet 
              is processed. It contains approximately 70-75% sugar, making it an excellent source of 
              energy for livestock.
            </p>
            <p className="mb-4 text-gray-700">
              At Winton StockFeed, we import high-quality molasses that provides essential minerals 
              including calcium, magnesium, potassium and iron. Our molasses is a cost-effective supplement 
              that enhances animal nutrition while improving the palatability of other feeds.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4 text-wsf-brown">Key Benefits:</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-wsf-green mr-2 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F453633e9a01893ff3ad876b2e5994404063ec87b%2FScreenshot%202025-04-14%20at%2012.07.47%E2%80%AFPM.png" 
              alt="Molasses being poured into feed" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolassesInfo;
