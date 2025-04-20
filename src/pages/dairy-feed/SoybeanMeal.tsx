import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';

const SoybeanMealPage: React.FC = () => {
  return (
    <ProductLayout title="Soybean Meal">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Soybeans (Glycine max) are a high protein legume and
              are the most commonly used protein supplement in dairy
              diets throughout the world.
            </p>
            <p>
              Soybean meal is palatable, nutrient dense, high in digestibility, and a relatively
              consistent source of protein. It has an excellent amino acid
              profile and is a concentrated source of protein and energy.
            </p>
            <p>
              Soybean meal accounts for nearly 65 percent of the world's
              protein feed demand.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/soy-bran-winton-nz+(1).png" 
              alt="Soybean Meal" 
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-gray-600 italic text-center py-2">
              Help your herd prosper with Soybean Meal 
            </p>
          </div>
        </section>

        {/* Quick Info Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">High-Quality Protein Source</h2>
            <p>
              Soybean meal is rich in lysine and essential amino acids, making it an excellent 
              protein supplement for dairy cows, especially during periods when pasture protein levels drop.
            </p>
            <p className="pt-2 text-gray-700">
              Contact our team to discuss how soybean meal can benefit your feeding program.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Section - Image to the side of text */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">About Soybean Meal</h2>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3 space-y-3">
              <p>
                There are several anti-nutritional factors (ANFs) associated
                with soybean meal (trypsin inhibitors), which are partially
                inactivated or minimised during the toasting process.
              </p>
              <p>
                These ANFs have the greatest effect on monogastric
                animals, such as poultry and swine. It has a lesser effect
                on ruminant animals, because of the transformation that
                occurs in the rumen.
              </p>
              <p>
                Protein supplements like soybean meal can be fed to
                balance out low protein pasture and/or supplements.
              </p>
              <p>
                Cows in mid-lactation require about 16 percent dietary
                crude protein. In summer pasture protein levels can
                drop under 16 percent. In these situations deficiencies
                can become an issue and soybean meal can be used to
                stimulate production levels.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center md:items-end">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/soybean-meal-winton-stock-feed.png" 
                alt="Soybean Meal" 
                className="rounded-md shadow-sm max-h-60 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Additional Details Section */}
        <section className="space-y-4">
          <p>
            Soybean meal contains around 50 percent protein of
            which 35 percent is rumen undegradable ("by-pass") and
            65 percent is rumen degradable.
          </p>
          <p>
            Soybean meal is rich in lysine, and of the common plant
            proteins used in animal feeds, soybean meal has the
            highest percentage of essential amino acids (47.6 percent).
          </p>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">FEEDING RECOMMENDATIONS</h2>
          <p>
            There is no maximum for the use of soybean meal in dairy
            rations, and it can be fed to meet protein requirements.
          </p>
          <p>
            Normal feeding rates will be around 0.5-2kg per head per
            day. Soybean meal can be fed mixed with silage in the
            paddock or on the feed pad. It can also be fed via the grain
            feeding system in the dairy shed.
          </p>
          <p>
            Consult your nutritionist or farm consultant to work out the
            most optimal inclusion level for your particular situation.
          </p>
        </section>

        {/* Specs Download Section - Fixed for mobile */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Soybean Meal Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Soybean Meal product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/2019_WSF_Soy_Bean_Meal.pdf', '_blank')}
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

export default SoybeanMealPage;
