
import React from 'react';
import ProductLayout from '@/components/ProductLayout';

const AboutUs = () => {
  return (
    <ProductLayout title="About Us">
      <div className="space-y-8">
        {/* Company Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-blue-dark">Company Overview</h2>
            <p className="leading-relaxed">
              Winton Stock Feed is a privately owned business based in Central Southland, proudly supporting New Zealand farmers since 1988. From our base in Winton, we employ a team of around 40 staff and operate a robust distribution network serving both local and national farming communities.
            </p>

            <p className="leading-relaxed">
              Our core stock feed business services Otago and Southland, supplying high-quality PKE and pelletised feeds tailored to local conditions. Across the country, we are a leading supplier of molasses, supported by a network of depots, experienced sales representatives, and a reliable fleet of company-owned and contracted trucks.
            </p>

            <p className="leading-relaxed">
              Innovation is at the heart of what we do — including the development of custom blending methods that allow us to incorporate a wide range of supplements directly into molasses, including non-water-soluble minerals like magnesium oxide. This helps farmers improve animal health and feeding efficiency with minimal hassle.
            </p>

            <p className="leading-relaxed">
              With decades of experience, a strong regional presence, and nationwide reach through our molasses operation, Winton Stock Feed is proud to be a trusted partner to hundreds of farmers and feed manufacturers across New Zealand.
            </p>
          </div>
          <div>
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-fleet.jpg" 
              alt="Winton Stock Feed Fleet"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">Our Story in Action</h2>
          <div className="w-full">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/c5s3ZviV9-c?si=O5A0Tjhuco85_5v1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

      </div>
    </ProductLayout>
  );
};

export default AboutUs;
