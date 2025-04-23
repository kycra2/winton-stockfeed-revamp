import React from 'react';

const BlendingFacility = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/stock-feed-blending-southland%20(1).jpg?raw=true"
          alt="Blending Facility"
          className="w-full md:w-1/2 rounded-lg"
        />

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Our New State Of The Art Blending Facility
          </h2>
          <p className="mb-4">
            Looking after your cows' health and nutrition shouldn’t be complicated.

We can include essential macro minerals, trace minerals, and a wide range of feed additives directly into your blend—no dusting or dosatron needed. That means your cows get exactly what they need each day, saving you time and hassle.


          </p>
          <p>
            Molasses can be added in varying levels through our blend store, ensuring improved
            palatability, utilisation of feed, and reducing dust in sheds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlendingFacility;
