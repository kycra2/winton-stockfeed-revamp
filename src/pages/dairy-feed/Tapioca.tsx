
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TapiocaPage: React.FC = () => {
  return (
    <ProductLayout title="Tapioca">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Product Description</h2>
            <p className="text-lg">
              Tapioca Pellets are a high-starch feed ingredient produced from the roots of the tapioca, 
              manioc or cassava plant. After harvest, the roots of the plant are sliced into chips and 
              dried in the sun.
            </p>
            <p>
              Subsequently the chips are pelleted and are mainly utilized for the production of starch 
              for human and industrial uses and Stockfeed applications. Because it is a starch-rich feed, 
              tapioca is used as a substitute for grains in practically all livestock rations and it can 
              be used in conjunction with grain.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/dairy-cows-winton+(1).png" 
                alt="Dairy cows feeding on tapioca supplement" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Key Benefits Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">High-Starch Energy Source</h2>
            <p>
              Tapioca pellets provide a concentrated source of easily digestible starch, making them 
              an excellent energy supplement for livestock rations.
            </p>
            <p className="text-gray-700">
              As a grain substitute, tapioca offers flexibility in feed formulation while maintaining 
              nutritional value and palatability.
            </p>
          </CardContent>
        </Card>

        {/* Feeding Recommendations Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Recommendations</h2>
          <p>
            Best fed in conjunction with moderate and slow fermentable carbohydrates to prevent 
            acidosis and to provide consistent ruminal fermentation over time. Total dietary levels 
            of starch and soluble sugars, NDF and effective fibre should be monitored when feeding.
          </p>
          <p>
            Not suitable for ad lib feeding as it puts cows at risk of ruminal acidosis. Consult 
            your local WSF Representative to work out the most optimal inclusion level for your 
            particular situation.
          </p>
        </section>

        {/* Storage and Handling Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Storage and Handling</h2>
          <p>
            Like all feedstuffs, tapioca should be stored dry, in bulk bins or placed on cement slabs, 
            away from vermin and covered and protected from the weather accordingly.
          </p>
        </section>

        {/* PDF Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Tapioca Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Tapioca product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Tapioca.pdf', '_blank')}
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

export default TapiocaPage;
