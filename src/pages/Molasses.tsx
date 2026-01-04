
import React from 'react';
import { Link } from 'react-router-dom';
import ProductLayout from '@/components/ProductLayout';
import MolassesInfo from '@/components/molasses/MolassesInfo';
import WhyMolasses from '@/components/molasses/WhyMolasses';
import MolassesLocations from '@/components/molasses/MolassesLocations';
import MolassesDepots from '@/components/molasses/MolassesDepots';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import SEOHead, { generateProductSchema, generateBreadcrumbSchema } from '@/components/SEOHead';

const Molasses = () => {
  const categories = [
    { title: "DAIRY", href: "/products/dairy-feed" },
    { title: "CALF", href: "/products/calf-feed" },
    { title: "SHEEP", href: "/products/sheep-feed" },
    { title: "DEER", href: "/products/deer-feed" },
    { title: "GOAT", href: "/products/goat-feed" },
    { title: "CHICKEN", href: "/products/chicken-feed" },
    { title: "MOLASSES", href: "/molasses" }
  ];

  const molassesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateProductSchema({
        name: "Molasses Feed Supplement",
        description: "Premium quality molasses for livestock. New Zealand's favourite feed supplement since 1988. High palatability and energy for all livestock including dairy cattle, beef, sheep, and deer.",
        image: "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/molasses-dairy-herd-feed.png",
        category: "Molasses Feed"
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "https://wintonstockfeed.co.nz/" },
        { name: "Products", url: "https://wintonstockfeed.co.nz/products" },
        { name: "Molasses", url: "https://wintonstockfeed.co.nz/molasses" }
      ])
    ]
  };

  return (
    <ProductLayout title="">
      <SEOHead
        title="Molasses Feed Supplement NZ - Premium Livestock Feed | Winton Stock Feed"
        description="New Zealand's largest independent importer of molasses since 1988. Premium quality molasses for dairy, beef, sheep and deer. 7 strategic depots nationwide. High energy, high palatability feed supplement."
        keywords="molasses NZ, molasses feed, livestock molasses, dairy cattle feed, molasses supplement, Winton Stock Feed molasses, New Zealand molasses"
        canonicalUrl="https://wintonstockfeed.co.nz/molasses"
        ogType="product"
        schema={molassesSchema}
      />
      {/* Category Navigation Menu */}
      <div className="flex flex-wrap justify-center items-center gap-1 text-lg font-semibold text-muted-foreground mb-8">
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
              className={`px-4 py-2 transition-colors hover:text-primary ${
                category.title === "MOLASSES" ? "text-primary font-bold" : ""
              }`}
            >
              {category.title}
            </Link>
            {index < categories.length - 1 && (
              <span className="text-muted-foreground/50">|</span>
            )}
          </div>
        ))}
      </div>

      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Molasses – New Zealand's Favourite Feed Supplement</h1>
      </div>

      {/* Hero Statement */}
      <div className="mb-12 text-center">
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Since 1988, Winton StockFeed has been New Zealand's largest independent importer and specialist distributor of molasses, with 7 strategic depots nationwide ensuring reliable supply year-round. Our premium molasses delivers high palatability and energy for all livestock, supporting optimal nutrition and improved production.
        </p>
      </div>

      <MolassesInfo />
      
      {/* Testimonial Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-wsf-brown/5 to-wsf-blue/5 p-8 rounded-lg border-l-4 border-wsf-brown">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-wsf-brown">Best in the Business...</h3>
              <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                "Winton Stock Feed didn't just deliver molasses — they delivered professionalism. 
                Your driver gave the best display of truck handling I've seen in all my years on the farm. 
                Smooth, careful, respectful, and a tight turnaround without fuss. It's easy to complain 
                these days, but this was worth a call to say: well done!"
              </blockquote>
              <p className="text-sm font-medium text-gray-600">
                — Adrian Thurston, Fairfield Farms Ltd – Manawatu
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <WhyMolasses />
      
      {/* Specs Download Section - Fixed for mobile */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-wsf-blue mb-2">
                Download Molasses Specifications
              </h3>
              <p className="text-gray-700 mb-2">
                Get detailed information about our Molasses product.
              </p>
            </div>
            <Button 
              variant="default" 
              className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
              onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Molasses.pdf', '_blank')}
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Condose Link Section */}
      <section className="py-12 bg-wsf-cream">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-wsf-blue-dark mb-6">
              Maximise Your Molasses Investment
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Take your molasses feeding to the next level with our fully automated Condose system. 
              Deliver precise mineral doses to every cow, every day with complete accuracy and reliability.
            </p>
            <Button 
              variant="default"
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-lg px-8 py-3"
              onClick={() => window.location.href = '/conedose'}
            >
              Discover Condose
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <MolassesLocations />
      <MolassesDepots />
    </ProductLayout>
  );
};

export default Molasses;
