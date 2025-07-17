
import React from 'react';
import { Link } from 'react-router-dom';
import ProductLayout from '@/components/ProductLayout';
import MolassesInfo from '@/components/molasses/MolassesInfo';
import WhyMolasses from '@/components/molasses/WhyMolasses';
import MolassesLocations from '@/components/molasses/MolassesLocations';
import MolassesDepots from '@/components/molasses/MolassesDepots';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

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

  return (
    <ProductLayout title="Molasses – New Zealand's Favourite Feed Supplement">
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

      {/* Hero Statement */}
      <div className="mb-12 text-center">
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Since 1988, Winton StockFeed has been New Zealand's largest independent importer and specialist distributor of molasses, with 7 strategic depots nationwide ensuring reliable supply year-round. Our premium molasses delivers high palatability and energy for all livestock, supporting optimal nutrition and improved production.
        </p>
      </div>

      <MolassesInfo />
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
              onClick={() => window.location.href = '/condose'}
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
