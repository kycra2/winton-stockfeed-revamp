
import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  "North Port",
  "Hinuera",
  "Mt Maunganui",
  "New Plymouth",
  "Palmerston North",
  "Timaru",
  "Winton"
];

const MolassesLocations = () => {
  return (
    <section className="py-16 bg-wsf-blue-light">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Locations</h2>
            <p className="mb-6 text-white">
              Winton StockFeed have seven storage depots spread throughout New Zealand. 
              These are the largest molasses storage facilities in the country which means 
              we have fast, efficient Molasses deliveries straight to your farm gate.
            </p>
            
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start text-white">
                  <MapPin className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span>{location}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/winton-locations.jpg?raw=true" 
              alt="Winton StockFeed locations across New Zealand" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MolassesLocations;
