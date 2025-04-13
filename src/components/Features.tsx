
import React from 'react';
import { MessageCircle, DollarSign, Truck } from 'lucide-react';

const featuresData = [
  {
    icon: <MessageCircle className="w-10 h-10 text-wsf-green" />,
    title: "Expert Advice on All Things Stock Feed Related",
    description: "With decades of hands-on experience, our team understands how to get the most out of your feed strategy. Whether you're looking to boost production, fill feed gaps, or fine-tune your ration, we offer friendly, practical advice backed by real results."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-wsf-green" />,
    title: "Competitive Pricing Across All Products",
    description: "We leverage smart importing – from container surpluses to bulk shipping – to secure the best freight rates. That means we can offer competitive pricing across our full feed range, helping you get more value without compromising quality."
  },
  {
    icon: <Truck className="w-10 h-10 text-wsf-green" />,
    title: "Nationwide Reach with 7 Depots Across NZ",
    description: "Winton StockFeed operates seven major depots across the country for Molasses, which means we have the largest storage network in New Zealand. Our efficient logistics ensure timely delivery of feed straight to your farm – no matter where you're located."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-wsf-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="card-highlight"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wsf-brown">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
