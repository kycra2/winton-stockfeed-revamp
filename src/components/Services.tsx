import React from 'react';

const services = [
  {
    id: 'stock-feed',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F90fd65c6bd2ac482d68218b3668a9f4c4f34d838%2Fsheep-dog-winton-wife.png',
    title: 'Stock Feed',
    description: 'High-quality feed options specifically formulated for your stock, designed to boost production and support animal health.',
  },
  {
    id: 'local-knowledge',
    image: 'https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/winton-staff%20(1).jpg?raw=true',
    title: 'Local Knowledge',
    description: 'Our team have years of experience in both farming and the feed sector and are trained to help support our clients throughout the season.',
  },
  {
    id: 'feed-trailers',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9920dad17d1a04325207ef56cfce6c7771137b46%2FScreenshot%202025-04-14%20at%2011.53.58%E2%80%AFAM.png',
    title: 'Feed Trailers',
    description: 'WSF supply heavy duty multi-purpose feed trailers. These trailers are ideal for feeding PKE or straw/hay in the paddock. Molasses can be added to the dry bales which increases feed intake..',
  },
  {
    id: 'nutitional-advice',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F8c3355a169fd4bf8c64428f20e235da18fd49ccb%2Fimage_fx%20%284%29.jpg',
    title: 'Nutritional Advice From Independent Industry Experts',
    description: 'Get independent nutritional advice from our consultants.',
  },
  {
    id: 'reliable-transport',
    image: 'https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/winton-stock-feed-auger-truck.jpg?raw=true',
    title: 'Reliable Transport',
    description: 'We maintain our fleet of trucks so you get reliablity and prompt deliveries.',
  },
  {
    id: 'modern-feed-blending-plant',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F39369ba18d2396277ccdfdca3701af53ba132d1e%2Fimage_fx%20%2811%29.jpg',
    title: 'Modern Feed Blending Plant',
    description: 'description: 'We can add in macro minerals, trace minerals and a range of feed additives, saving you time and money (no dusting or dosatron required) so your cows receive their daily requirements. Molasses can be added in varying levels through our blend store, ensuring improved palatability, utilisation of feed, and reducing dust in sheds.',
',
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
  <div className="container-custom">
    <h2 className="section-title text-center mb-6">
      Why Winton Stock Feed?
    </h2>
    <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
      We are a family owned business operating since 1988. Reliability and exceptional service is our priority for all customers.
    </p>
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
            {/* optional link text */}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
