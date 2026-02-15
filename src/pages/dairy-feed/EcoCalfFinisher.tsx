import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import SEOHead, { generateProductSchema } from '@/components/SEOHead';

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: true },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const EcoCalfFinisherPage: React.FC = () => {
  return (
    <ProductLayout title="Eco Calf Finisher">
      <SEOHead
        title="Eco Calf Finisher - Calf Finishing Feed | Winton Stock Feed"
        description="Eco Calf Finisher feed for finishing calves economically. Cost-effective nutrition for calf rearing from Winton Stock Feed NZ."
        keywords="eco calf finisher, calf finishing feed, calf rearing, stock feed, Winton Stock Feed"
        canonicalUrl="https://www.wintonstockfeed.co.nz/dairy-feed/eco-calf-finisher"
        schema={generateProductSchema({ name: "Eco Calf Finisher", description: "Economical calf finishing feed for cost-effective calf rearing.", category: "Calf Feed" })}
      />
      <div className="space-y-8">
        {/* Category Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-1 text-lg font-semibold text-muted-foreground mb-12">
          <Link 
            to="/products"
            className="px-4 py-2 transition-colors hover:text-primary"
          >
            ALL
          </Link>
          <span className="text-muted-foreground/50">|</span>
          {categories.map((category, index) => (
            <div key={category.title} className="flex items-center">
              <Link
                to={category.href}
                className={`px-4 py-2 transition-colors ${
                  category.active 
                    ? "text-primary font-bold" 
                    : "hover:text-primary"
                }`}
              >
                {category.title.toUpperCase()}
              </Link>
              {index < categories.length - 1 && (
                <span className="text-muted-foreground/50">|</span>
              )}
            </div>
          ))}
        </div>
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Sustainable Calf Development Solution</h2>
            <p className="text-lg">
              Our Eco Calf Finisher is a cost-effective, environmentally conscious feed solution designed 
              to support the final growth stage of calf development.
            </p>
            <p>
              This sustainable formula utilises quality by-product ingredients to reduce environmental impact 
              while providing complete nutrition for finishing calves.
            </p>
            <p>
              Developed specifically for New Zealand farming systems, this eco-friendly feed helps farmers 
              achieve excellent growth rates while maintaining a focus on sustainability and cost efficiency.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-nz+(1).png" 
                alt="Eco Calf Finisher Feed" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Key Features Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">Sustainable Formulation</h3>
                <p>
                  Utilises quality by-product ingredients to reduce environmental footprint.
                </p>
                <h3 className="font-semibold">Cost Effective</h3>
                <p>
                  Economical feed solution without compromising on nutritional requirements.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Complete Nutrition</h3>
                <p>
                  Balanced formulation provides all necessary nutrients for healthy finishing growth.
                </p>
                <h3 className="font-semibold">Local Sourcing</h3>
                <p>
                  Prioritises locally sourced ingredients to reduce carbon footprint.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nutritional Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Nutritional Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-wsf-blue font-medium">Protein</h3>
                <p>15% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>11.5 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fibre</h3>
                <p>15% maximum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Calcium</h3>
                <p>0.8%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Phosphorus</h3>
                <p>0.5%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Essential Minerals</h3>
                <p>Included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Our Sustainability Commitment</h2>
          <p>
            The Eco Calf Finisher represents our commitment to sustainable agriculture practices. 
            By utilising quality by-products from food production that would otherwise go to waste, 
            we help reduce the environmental impact of livestock feeding while maintaining excellent 
            nutritional standards.
          </p>
          <p>
            Our eco-friendly approach focuses on:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reducing waste through by-product utilisation</li>
            <li>Supporting local ingredient sourcing where possible</li>
            <li>Minimising carbon footprint in feed production</li>
            <li>Providing cost-effective solutions for farmers</li>
          </ul>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Feed at a rate of 1-2kg per calf per day during the finishing stage. Introduce gradually 
            and ensure fresh water is always available.
          </p>
          <p>
            This product works well as part of a mixed feeding program with quality forage. 
            For tailored feeding recommendations, consult with our nutrition specialists.
          </p>
        </section>

        {/* Available In Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Available In</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>25kg bags</li>
            <li>Bulk (1 tonne bags)</li>
            <li>Bulk delivery available</li>
          </ul>
        </section>

        {/* PDF Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Eco Calf Finisher Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Eco Calf Finisher product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Eco+Calf+Finisher.pdf', '_blank')}
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

export default EcoCalfFinisherPage;
