
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Improves Feed Conversion Efficiency",
    description: "Ohio State University conducted tests on Molasses versus starch based products and found considerable improvements in milk production using molasses versus just grains*."
  },
  {
    title: "Is Palatable",
    description: "Cows love Molasses and when mixed with other feeds this in turn improves the palatability, especially PKE, and silage."
  },
  {
    title: "Provides Energy",
    description: "The correct levels of Molasses stimulates appetite so milking cows will eat more which in turn boosts energy levels, improves pregnancy rates, maximises days in milk and improves MS production. Stimulating the cows appetite around calving when cows are trying to reach peak production is an investment that pays off."
  },
  {
    title: "Feeds Rumen Microbes",
    description: "The high sugar content of molasses stimulates the growth and activity of rumen microbes. Increased microbe activity improves fibre digestion in the rumen especially high fibre pasture, PKE and silage and improves overall feed conversion efficiency."
  },
  {
    title: "Builds Resistance",
    description: "The high-energy levels of molasses assist cows to be less susceptible to heat related stress in summer, and be less likely to suffer the effects of a harsh New Zealand Winter."
  }
];

const WhyMolasses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-4 text-center text-wsf-brown">Why Molasses?</h2>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Cows love Molasses, Molasses is a great all year supplement, and has been widely used on NZ farms for many years to supplement animal feed. 
          However there is more to Molasses than what you may think. Scientific studies are revealing amazing statistics on the benefits of Molasses on milking and why it should be the first choice for farmers when choosing a supplement.
        </p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6 text-wsf-brown text-center">Did you know that Molasses -</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-wsf-cream shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-2">
                    <Check className="h-5 w-5 text-wsf-green mr-2 mt-1 flex-shrink-0" />
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-600 ml-7">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMolasses;
