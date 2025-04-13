import React from 'react';

const sharedImage = 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2Fe9341676bdb9b6255fddc1382fb5ad629fe3669c%2Fwinton-sheep-farmer.jpg';

const services = [
  {
    id: 'dairy-feed',
    image: sharedImage,
    title: 'Dairy Feed',
    description: 'High-quality feed options specifically formulated for dairy cattle, designed to boost milk production and support animal health.',
  },
  {
    id: 'stock-feed',
    image: sharedImage,
    title: 'Stock Feed',
    description: 'Nutritionally balanced feed solutions for all types of livestock, ensuring optimal growth and performance.',
  },
  {
    id: 'resources',
    image: sharedImage,
    title: 'Resources',
    description: 'Helpful guides, articles, and tools to help you make informed decisions about your feed management strategy.',
  },
  {
    id: 'feed-quality',
    image: sharedImage,
    title: 'Feed Quality Declarations',
    description: 'Detailed information on the nutritional composition and quality standards of all our feed products.',
  },
  {
    id: 'feed-mill',
    image: sharedImage,
    title: 'Pelleted Feed Mill Products (Southland and Otago Only)',
    description: 'Custom-milled feed products from local growers tailored to meet specific nutritional requirements for your livestock.',
  },
  {
    id: 'container',
    image: sharedImage,
    title: 'Container Services',
    description: 'Efficient container solutions for storing and transporting feed products to farms across New Zealand.',
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
