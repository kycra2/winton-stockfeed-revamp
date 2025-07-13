import React from 'react';

const services = [
  {
    id: 'stock-feed',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F90fd65c6bd2ac482d68218b3668a9f4c4f34d838%2Fsheep-dog-winton-wife.png',
    title: 'High Quality Feed Options',
    description: 'High-quality feed options specifically formulated for your stock, designed to boost production and support animal health.',
  },
  {
    id: 'local-knowledge',
    image: 'https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/client-meetong-wsf2.png',
    title: 'Local Knowledge',
    description: 'Our stock feed operation supplies high-quality PKE and pelletised feeds tailored to the needs of southern farmers. We have three experienced sales representatives who provide on-farm visits, working closely with farmers to improve production and develop customised feeding strategies.',
  },
  {
    id: 'feed-trailers',
    image: 'https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9920dad17d1a04325207ef56cfce6c7771137b46%2FScreenshot%202025-04-14%20at%2011.53.58%E2%80%AFAM.png',
    title: 'Feed Trailers',
    description: 'WSF supply heavy duty multi-purpose feed trailers. These trailers are ideal for feeding PKE or straw/hay in the paddock. Molasses can be added to the dry bales which increases feed intake..',
  },
  {
    id: 'nutitional-advice',
    image: 'https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/WSF-12.jpg',
    title: 'Free Independent Nutritional Advice',
    description: 'Boost milk production by changing your feed ratios with our independent nutritional consultant. ',
  },
  {
    id: 'reliable-transport',
    image: 'https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/DJI_0152-15_Web.jpg',
    title: 'Our Own Reliable Transport',
    description: 'We maintain our fleet of trucks so you get reliablity and prompt deliveries. From phonecall to delivery you only deal with Winton Stock Feed staff.',
  },
  {
    id: 'modern-feed-blending-plant',
    image: 'https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/stock-feed-blending-facility.png?raw=true',
    title: 'Modern Feed Blending Facility',
    description: 'We can add in macro minerals, trace minerals and a range of feed additives, saving you time and money (no dusting or dosatron required) so your cows receive their daily requirements. '
    ,
  },
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
