import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';

const MaizeDDGSPage: React.FC = () => {
  return (
    <ProductLayout title="Maize DDGS">
      <div className="space-y-10">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Distiller's Dried Grains with Solubles (DDGS) are the dried residues remaining after the
              starch fraction of maize is fermented with yeasts to produce ethanol.
            </p>
            <p>
              Maize DDGS is a high-quality livestock feed supplement containing over 30% protein that helps maximize animal performance.
            </p>
            <p>
              This nutrient-rich byproduct of ethanol production provides essential energy without causing digestive issues and includes valuable B-vitamins that improve palatability.
            </p>
          </div>
        </section>

        {/* About Maize DDGS Section with Image Beside Text */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">About Maize DDGS</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p>
                Maize DDGS is a sustainable feed option that makes efficient use of grain byproducts from ethanol production.
              </p>
              <p>
                It offers an excellent protein source with digestible fiber that supports rumen health and improves overall animal performance.
              </p>
            </div>
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/maizeDDGS-nz.png" 
                alt="Maize DDGS" 
                className="w-full h-auto object-cover"
              />
            </div>
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

        {/* Image section */}
        <section className="space-y-2">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/winton-stock-feed-auger-truck.jpg?raw=true" 
              alt="Our PKE Delivery Truck" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 italic text-center">
            Our PKE Delivery Truck 
          </p>
        </section>

        {/* Details Section */}
        <section className="space-y-4 leading-relaxed">
          <p>
            Maize DDGS is available in consistent supply throughout the year, offering a reliable feed option for your livestock.
          </p>
          <p>
            With its balanced nutritional profile, Maize DDGS complements silage-based diets and helps reduce the need for more expensive protein sources.
          </p>
          <p>
            The product's unique combination of protein, energy, and fiber makes it particularly valuable in dairy and beef production systems, supporting both growth and milk production goals.
          </p>
          <p>
            Using Maize DDGS in your feeding program may also contribute to improved feed efficiency and reduction in overall feed costs.
          </p>
        </section>

        {/* Specs Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-grow pr-4 space-y-2">
            <h3 className="text-xl font-semibold text-wsf-blue">
              Download Maize DDGS Specifications
            </h3>
            <p className="text-gray-700">
              Get detailed information about our Maize DDGS product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/2018_WSF_Maize_DDGS.pdf', '_blank')}
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
            <p className="text-white italic text-sm">
  All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.
</p>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default MaizeDDGSPage;
