
import React from 'react';

const History = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our History</h2>
            <p className="mb-4 text-gray-700">
              Founded in 1988, Winton StockFeed began as a small family operation dedicated to providing quality feed solutions to local farmers. What started as a passion for agriculture has grown into one of New Zealand's most trusted independent feed suppliers.
            </p>
            <p className="mb-4 text-gray-700">
              As pioneers in the molasses import industry, we established the country's first independent molasses terminal, breaking new ground for New Zealand farmers seeking alternative feed options.
            </p>
            <p className="mb-4 text-gray-700">
              Over three decades later, we've expanded our product range and reach, but our commitment to quality, service, and value remains unchanged. We continue to be family-owned and operated, maintaining the personalized service and agricultural expertise that set us apart from the beginning.
            </p>
            <p className="text-gray-700">
              Today, with seven depots nationwide and the largest molasses storage network in New Zealand, we're proud to remain 100% Kiwi-owned while supporting farmers across the country with innovative feed solutions.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F8ca35eaaf2ad31fa6276d27a94dd89f4b8a4f36d%2Fwinton.png?auto=format&fit=crop&q=80" 
                alt="New Zealand farm landscape" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="bg-wsf-green text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Since 1988</p>
                <p>Supporting NZ Agriculture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
