
import React from 'react';
import { Link } from 'react-router-dom';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileDown } from 'lucide-react';
import SEOHead, { generateProductSchema, generateBreadcrumbSchema } from '@/components/SEOHead';

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: true },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const deerFeedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProductSchema({
      name: "Supreme Deer Nuts",
      description: "Premium deer feed pellets providing ideal supplementary nutrition without grain wastage. Correct balance of vitamins and minerals for deer farming.",
      image: "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/deer-feed-new-zealand-farm+(1)+(1).png",
      category: "Deer Feed"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.wintonstockfeed.co.nz" },
      { name: "Products", url: "https://www.wintonstockfeed.co.nz/products" },
      { name: "Deer Feed", url: "https://www.wintonstockfeed.co.nz/deer-feed" }
    ])
  ]
};

const DeerFeed = () => {
  return (
    <ProductLayout title="Supreme Deer Nuts">
      <SEOHead
        title="Deer Feed NZ - Supreme Deer Nuts | Winton Stock Feed"
        description="Premium Supreme Deer Nuts for New Zealand deer farmers. Ideal supplementary feed with correct vitamin and mineral balance. 12.5% energy, 13% protein. Available in 25kg bags, bulk bags and bulk delivery."
        keywords="deer feed NZ, deer nuts, deer pellets, deer nutrition, Winton Stock Feed deer feed, New Zealand deer farming"
        canonicalUrl="https://www.wintonstockfeed.co.nz/deer-feed"
        ogType="product"
        schema={deerFeedSchema}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
         <section className="space-y-4">
  <p>
    Our Supreme Deer Nuts provide an ideal way to supplement feed without the wastage of grains and to ensure the correct
    balance of vitamins and minerals. They can be kept up to 4 months without deterioration.
  </p>
  <p>
    Available in 25kg bags, bulk bags and bulk delivery.
  </p>
</section>


          <section>
            <h2 className="text-xl font-semibold mb-4">Typical Analysis</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Energy: 12.5% MJME/kg DM</li>
              <li>Crude Protein: 13.0% Minimum</li>
              <li>Fibre: 6.9% Maximum</li>
              <li>Fat: 5% Maximum</li>
              <li>Salt: 1.0% Maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Ingredients Selected From</h2>
            <p className="text-gray-700">
              Barley, Wheat, Soybean Meal, Molasses, Di-Calcium Phosphate, Lime, Salt, 
              Sodium Bentonite and a vitamin and mineral premix.
            </p>
          </section>
        </div>

        <div>
          <img 
            src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/deer-feed-new-zealand-farm+(1)+(1).png"
            alt="New Zealand deer farm"
            className="rounded-lg shadow-md w-full h-auto mb-6"
          />
        </div>
      </div>

      <section className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold">Feeding Recommendations</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Introduce feed slowly to avoid risks of digestive upset.</li>
            <li>Build up to required feed intake level over 1-2 weeks eg start at 250g per day and increase 500-750g per day.</li>
            <li>Intake may increase to 1-2kg per day for mature stock when pasture availability is poor.</li>
            <li>Ensure sufficient fibre intake by providing access to hay.</li>
            <li>Ensure fresh water is available at all times.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Supreme+Deer+Nuts.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Supreme Deer Nuts PDF
          </Button>
        </a>
      </div>

      <Card className="mt-12 p-6 bg-gray-50">
        <div className="space-y-4">
          <p className="text-gray-700">All our grain is sourced locally from local growers.</p>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Pricing Terms & Conditions</h3>
            <p className="text-gray-700">All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.</p>
          </div>
        </div>
      </Card>
      </div>
    </ProductLayout>
  );
};

export default DeerFeed;
