import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoyBranHullsPage: React.FC = () => {
  return (
    <ProductLayout title="Soy Bran Hulls">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Soy Bran Hulls are the outer covering of the soybean. They are separated from 
              the bean during processing and are a valuable source of digestible fiber.
            </p>
            <p>
              This byproduct from soybean oil extraction provides a highly digestible feed 
              option that is both nutritious and economical for livestock producers.
            </p>
            <p>
              Soy Bran Hulls are particularly effective when added to dairy feed rations, 
              helping to improve rumen function and overall animal health.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/soy-bran-hulls-winton-stock-feed.png" 
              alt="Soy Bran Hulls" 
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-600 italic text-center py-2">
              Soy Bran Hulls
            </p>
          </div>
        </section>

        {/* Quick Info Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">High-Quality Feed Supplement</h2>
            <p>
              With their high fiber content and excellent digestibility, Soy Bran Hulls are 
              an effective addition to dairy rations, helping to maintain proper rumen function.
            </p>
            <p className="pt-2 text-gray-700">
              Contact our sales team to discuss how Soy Bran Hulls can benefit your feeding program.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">About Soy Bran Hulls</h2>
          <p>
            Soy Bran Hulls are an excellent source of digestible fiber with consistent quality 
            and nutrient composition, making them a reliable feed ingredient.
          </p>
          <p>
            They contain approximately 12-14% crude protein and have a high energy value due 
            to their digestible fiber content, making them an excellent alternative to grains.
          </p>
          <p>
            The low starch content helps reduce the risk of acidosis while still providing 
            substantial energy to the animal, supporting healthy digestive function.
          </p>
        </section>

        {/* Details Section */}
        <section className="space-y-4">
          <p>
            Soy Bran Hulls can be used as a partial replacement for forages in times of shortage, 
            offering flexibility in feed formulation.
          </p>
          <p>
            They mix well with other feed ingredients and can be incorporated into total mixed rations 
            with ease, enhancing overall feed efficiency.
          </p>
          <p>
            For dairy cows, Soy Bran Hulls can help maintain milk fat percentages while providing 
            energy for milk production, making them particularly valuable in dairy operations.
          </p>
          <p>
            Our Soy Bran Hulls are sourced from quality suppliers and are available in bulk quantities 
            to meet the needs of farms of all sizes.
          </p>
        </section>

        {/* Specs Download Section - Smaller button that doesn't stretch */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold text-wsf-blue mb-2">
                Download Soy Bran Hulls Specifications
              </h3>
              <p className="text-gray-700 mb-2">
                Get detailed information about our Soy Bran Hulls product.
              </p>
            </div>
            <div className="flex">
              <Button 
                variant="default" 
                className="bg-wsf-blue hover:bg-wsf-blue-dark inline-flex"
                onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/2019_WSF_SOY_HULLS_BRAN.pdf', '_blank')}
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Card */}
        <Card className="bg-wsf-blue text-white border-none shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Get in Touch</h3>
            </div>
            <p>
              Call us on 0800 665277 or 03 2366089.
            </p>
            <p>
              We can open an account for you and get your first order going all with one call.
            </p>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default SoyBranHullsPage;
