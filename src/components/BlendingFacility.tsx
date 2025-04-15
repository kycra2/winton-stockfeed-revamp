import React from 'react';

const BlendingFacility = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9fd26178b1aff007abda9e961e238b07a6b74e89%2FScreenshot%202025-04-14%20at%202.35.49%E2%80%AFPM.png"
          alt="Blending Facility"
          className="w-full md:w-1/2 rounded-lg"
        />

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Our New State Of The Art Blending Facility
          </h2>
          <p className="mb-4">
            We can add in macro minerals, trace minerals and a range of feed additives,
            saving you time and money (no dusting or dosatron required) so your cows receive
            their daily requirements.
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
