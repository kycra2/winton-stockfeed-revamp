
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const PKEPage: React.FC = () => {
  return (
    <ProductLayout title="Palm Kernel Expeller (PKE)">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Winton Stock Feed supplies the Southland and South Otago Region with Palm Kernel.
            </p>
            <p>
              We have our own Auger and Bulk Trucks to deliver into silos and sheds on farm, 
              so we have complete control of our product from ship to farm.
            </p>
            <p>
              We offer PKE contracts and spot pricing through our locations in Timaru, 
              Christchurch, New Plymouth, Mt Maunganui and Waharoa.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/female-farmer-winton-stock-feed-southland+(1).png" 
              alt="Female Farmer at Winton Stock Feed" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Quick Info Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">New to PKE?</h2>
            <p>Need a quick way to get feeding without the waste?</p>
            <Button variant="default" asChild className="mt-2">
              <Link to="/feed-trailers">Check out these great trailers here!</Link>
            </Button>
            <p className="pt-2 text-gray-700">
              <Link to="/contact-us" className="text-wsf-blue hover:underline">Contact us</Link> or to talk to a rep near you for today's PKE pricing.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Section with Image */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">About Palm Kernel</h2>
            <p>
              Palm Kernel is a palatable feed stuff that is the by-product of palm oil extraction 
              and is recommended for calf and ruminant feeds.
            </p>
            <p>
              It has the ability to replace some higher cost protein sources while providing 
              cost effective energy.
            </p>  
            <p>
              This product can also help balance diets that are high in maize silage and also diets 
              low in digestible protein and high in fibre. Palm Kernel meal is also an excellent 
              economic emergency and drought relief feedstuff. 
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/PKE-Feed-Southland.png?raw=true" 
              alt="PKE Feed Southland" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

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
        <section className="space-y-4">
          <p>The product originates from Asia and the Pacific Islands.</p>
          <p>
            Palm Kernel meal is also an excellent source of energy, protein and minerals for 
            larger ruminants. It can negate some of the negative effects of feeding high starch 
            levels on rumen health because it is supplying energy from the oil portion.
          </p>
          <p>
            Palm Kernel is a slow but very fermentable 
            product. Palm Kernel has high digestibility in ruminants, therefore provides constant 
            energy release and help maintain rumen pH in the optimum range for best rumen function 
            and animal performance.
          </p>
        </section>

        {/* Specs Download Section - Fixed for mobile */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download PKE Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Palm Kernel Expeller (PKE) product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/169438_WSF_A4_Flyers_PKE.pdf', '_blank')}
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

export default PKEPage;

