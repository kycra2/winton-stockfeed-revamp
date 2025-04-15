
import React from 'react';
import { MapPin } from 'lucide-react';

const depots = [
  {
    location: "Winton (Head Office)",
    address: "139 Florence Road, Winton 9782",
    region: "Southland"
  },
  {
    location: "Invercargill",
    address: "107 Clyde Street, Invercargill",
    region: "Southland"
  },
  {
    location: "Balclutha",
    address: "10 James Street, Balclutha",
    region: "Otago"
  },
  {
    location: "Dunedin",
    address: "15 Portsmouth Drive, Dunedin",
    region: "Otago"
  },
  {
    location: "Christchurch",
    address: "22 Lunns Road, Christchurch",
    region: "Canterbury"
  },
  {
    location: "Palmerston North",
    address: "8 Takapu Road, Palmerston North",
    region: "Manawatu"
  },
  {
    location: "Hamilton",
    address: "17 Arthur Porter Drive, Hamilton",
    region: "Waikato"
  }
];

const MolassesDepots = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-2 text-center text-wsf-brown">Our Molasses Depots</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          With 7 strategically located depots across New Zealand, we offer the largest molasses storage network in the country
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {depots.map((depot, index) => (
            <div key={index} className="bg-wsf-cream rounded-lg shadow-md p-5">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-wsf-green mr-2 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-wsf-brown">{depot.location}</h3>
                  <p className="text-sm text-gray-600">{depot.address}</p>
                  <p className="text-sm font-medium text-wsf-blue-dark mt-1">{depot.region}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium">Need molasses delivered to your farm?</p>
          <p className="mb-6">Call us on our free molasses hotline:</p>
          <a href="tel:0800665277" className="text-3xl font-bold text-wsf-green hover:text-wsf-green-dark transition-colors">
            0800 MOLASSES (0800 665 277)
          </a>
        </div>
      </div>
    </section>
  );
};

export default MolassesDepots;
