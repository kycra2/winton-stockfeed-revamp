
import React from 'react';

const BlendingFacility = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our New State Of The Art Blending Facility</h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src="https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9fd26178b1aff007abda9e961e238b07a6b74e89%2FScreenshot%202025-04-14%20at%202.35.49%E2%80%AFPM.png" 
              alt="Blending Facility" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg">
              We can add in macro minerals, trace minerals and a range of feed additives, saving you time and money (no dusting or dosatron required) so your cows receive their daily requirements.
            </p>
            <p className="text-lg">
              Molasses can be added in varying levels, through our blend store ensuring improved palatability, utilisation of feed and reducing dust in sheds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlendingFacility;
