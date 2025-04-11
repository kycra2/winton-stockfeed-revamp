
import React from 'react';

const images = [
  {
    url: "https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2F9aaac91e9ae62618b2051d61c8a7c904fa12064d%2Fmolasses-winton.jpg?auto=format&fit=crop&q=80",
    alt: "New Zealand cattle grazing on rolling hills",
    caption: "Quality feed leads to healthier livestock"
  },
  {
    url: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&q=80",
    alt: "Sheep grazing on lush green pasture",
    caption: "Supporting New Zealand farmers since 1988"
  },
  {
    url: "https://cdn.convertri.com/2584a160-56c5-11e6-829d-066a9bd5fb79%2Fd676cb3ccf87ba6e5b3b24c02420bcffe734a3db%2Fwinton-3.png?auto=format&fit=crop&q=80",
    alt: "Farm animals grazing at daybreak",
    caption: "Sustainable farming practices for better outcomes"
  }
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">New Zealand's Finest Pastures</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <p className="p-4 text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
