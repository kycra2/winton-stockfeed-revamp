
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SoyBranHullsPage: React.FC = () => {
  return (
     <ProductLayout title="Maize DDGS">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Distiller's Dried Grains with Solubles (DDGS) are the dried residues remaining after the starch fraction of maize is fermented with yeasts to produce ethanol.
            </p>
            <p>
              Maize DDGS is a high-quality livestock feed supplement containing over 30% protein that helps maximise animal performance.
            </p>
            <p>
              This nutrient-rich byproduct of ethanol production provides essential energy without causing digestive issues and includes valuable B-vitamins that improve palatability.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/friesian-cows-feed-new-zealand+(1).png" 
              alt="Feeding out for cattle" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Quick Info Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">Optimal Nutrition Solution</h2>
            <p>
              Perfect for mixing with silage, Maize DDGS can be included in up to 20% of daily feed intake for optimal nutritional balance and cost-effectiveness.
            </p>
            <p className="text-gray-700">
              Talk to our specialists to learn how to integrate Maize DDGS into your feeding program.
            </p>
          </CardContent>
        </Card>
            
           
        </section>

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

        {/* Specs Download Section - Fixed for mobile */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Soy Bran Hulls Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Soy Bran Hulls product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/2019_WSF_SOY_HULLS_BRAN.pdf', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
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
            <div className="mt-4 text-sm text-gray-200 italic">
              All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.
            </div>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default SoyBranHullsPage;
