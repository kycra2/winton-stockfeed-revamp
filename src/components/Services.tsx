
import React from 'react';
import { Package, Leaf, FileText, Clipboard, Factory, Box } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'dairy-feed',
    icon: <Package className="w-8 h-8" />,
    title: 'Dairy Feed',
    description: 'High-quality feed options specifically formulated for dairy cattle, designed to boost milk production and support animal health.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'stock-feed',
    icon: <Leaf className="w-8 h-8" />,
    title: 'Stock Feed',
    description: 'Nutritionally balanced feed solutions for all types of livestock, ensuring optimal growth and performance.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'resources',
    icon: <FileText className="w-8 h-8" />,
    title: 'Resources',
    description: 'Helpful guides, articles, and tools to help you make informed decisions about your feed management strategy.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'feed-quality',
    icon: <Clipboard className="w-8 h-8" />,
    title: 'Feed Quality Declarations',
    description: 'Detailed information on the nutritional composition and quality standards of all our feed products.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'feed-mill',
    icon: <Factory className="w-8 h-8" />,
    title: 'Pelleted Feed Mill Products (Southland and Otago Only)',
    description: 'Custom-milled feed products from local growers tailored to meet specific nutritional requirements for your livestock.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    id: 'container',
    icon: <Box className="w-8 h-8" />,
    title: 'Container Services',
    description: 'Efficient container solutions for storing and transporting feed products to farms across New Zealand.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Our Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
            >
              <div className={cn("p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4", service.bgColor)}>
                <div className={service.color}>
                  {service.icon}
                </div>
              </div>
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
