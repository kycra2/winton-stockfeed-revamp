
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
            
<p className="mb-4 text-gray-700 space-y-4">
  <span>
    Cane Molasses is a by-product of sugar refining – about 64% sugar on a dry matter basis.
  </span>
  <br />
  <span>
    Molasses provides energy in the diet and has no protein, so it is excellent as a pasture diet balancer, improving feed conversion efficiency.
  </span>
  <br />
  <span>
    Molasses has been a key supplement in New Zealand pasture-based dairy diets for over 30 years!
  </span>
  <br />
  <span>
    It’s the perfect animal feed additive. Whether you're new to molasses or a regular user, Winton Stock Feed is the only New Zealand-owned and independent importer.
  </span>
  <br />
  <span>
    We import using both "Container Surpluses" and bulk ships — which means better shipping prices, and we pass those savings on to you.
  </span>
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
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/molasses-for-cows-new-zealand.jpg" 
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
