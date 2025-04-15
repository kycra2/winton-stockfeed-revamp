import React from 'react';

const services = [
  {
    id: 'dairy-feed',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F90fd65c6bd2ac482d68218b3668a9f4c4f34d838%2Fsheep-dog-winton-wife.png',
    title: 'Dairy Feed',
    description: 'High-quality feed options specifically formulated for dairy cattle, designed to boost milk production and support animal health.',
  },
  {
    id: 'stock-feed',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F24941eb2c8c3a60082a8175903e917e2734ab669%2Fimage_fx%20%287%29.jpg',
    title: 'Stock Feed',
    description: 'Nutritionally balanced feed solutions for all types of livestock, ensuring optimal growth and performance.',
  },
  {
    id: 'Feed Trailers',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9920dad17d1a04325207ef56cfce6c7771137b46%2FScreenshot%202025-04-14%20at%2011.53.58%E2%80%AFAM.png',
    title: 'Feed Trailers',
    description: 'WSF supply heavy duty multi-purpose feed trailers. These trailers are ideal for feeding PKE or straw/hay in the paddock, Molasses can be added to the dry bales which increases feed intake..',
  },
  {
    id: 'Nutritional Advice',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F8c3355a169fd4bf8c64428f20e235da18fd49ccb%2Fimage_fx%20%284%29.jpg',
    title: 'Nutritional Advice From Independent Industry Experts',
    description: 'Get independent nutritional advice from our consultant.',
  },
  {
    id: 'sheep-feed',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F5d8d4074ab50fc3c2adef5f40f4e878a96cbf16b%2Fimage_fx%20%285%29.jpg',
    title: 'Sheep Feed',
    description: 'Custom-milled feed products from local growers tailored to meet specific nutritional requirements for your livestock.',
  },
  {
    id: 'Molasses',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F39369ba18d2396277ccdfdca3701af53ba132d1e%2Fimage_fx%20%2811%29.jpg',
    title: 'Molasses',
    description: 'National supply of quality Molasses to farms across New Zealand.',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href={`#${service.id}`} className="mt-4 inline-block text-wsf-green hover:underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
