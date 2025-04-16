
import React from 'react';
import { Beef, Leaf, Sprout } from 'lucide-react';

const applications = [
  {
    icon: <Beef size={48} className="text-wsf-green mb-4" />,
    title: "Dairy & Beef Cattle",
    description: "Add molasses to TMR mixes, silage or hay to increase dry matter intake and provide readily available energy. Ideal for boosting milk production and supporting rumen health."
  },
  {
    icon: <Leaf size={48} className="text-wsf-green mb-4" />,
    title: "Sheep & Deer",
    description: "Perfect supplement during pregnancy, lactation and periods of high energy demand. Can be applied to hay, silage or added to grain mixes."
  },
  {
    icon: <Sprout size={48} className="text-wsf-green mb-4" />,
    title: "Soil & Crop Applications",
    description: "Used in organic farming as a soil amendment and foliar feed. Rich in trace minerals and beneficial microbes that support plant health and soil biology."
  }
];

const MolassesApplications = () => {
  return (
    <section className="py-16 bg-wsf-blue-light">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2 text-center text-white">Applications</h2>
        <p className="text-lg text-center text-white opacity-90 mb-12">
          How to use molasses effectively on your farm
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center">{app.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{app.title}</h3>
              <p className="text-gray-600">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MolassesApplications;
