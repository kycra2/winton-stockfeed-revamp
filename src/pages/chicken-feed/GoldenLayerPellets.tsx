import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductLayout from '@/components/ProductLayout';
import { FileText, Phone, Download, Egg } from 'lucide-react';
import goldenLayerImage from '@/components/images/golden-layer-chicken-pellets.png';
import goldenLayerPDF from '@/components/chicken-feed/Golden-Layer-Pellets.pdf';

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: true },
  { title: "Molasses", href: "/molasses", active: false }
];

const GoldenLayerPellets: React.FC = () => {
  return (
    <ProductLayout title="Golden Layer Pellets">
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

        {/* Product Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Egg className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Golden Layer Pellets</h2>
         
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-6">
            <img 
              src={goldenLayerImage} 
              alt="Golden Layer Pellets" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            
            {/* PDF Download */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Product Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href={goldenLayerPDF} download="Golden-Layer-Pellets.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download Product Sheet (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Product Description */}
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  WSF Golden Layer Pellets are a type of chicken feed specifically formulated to meet the nutritional needs of
                  laying hens. They are designed to support healthy egg production and overall hen well-being.
                </p>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle>Ingredients Selected From</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Barley, Wheat, Oilseed meals, Vegetable Oil, Molasses, Limestone, Di-Calcium Phosphate, Salt, Sodium
                  Bicarbonate, Vitamins and Minerals, Yolk Pigment, Enzymes, Amino Acids.
                </p>
              </CardContent>
            </Card>

            {/* Feeding Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Feeding Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Allow ad-lib access to WSF Golden Layer Pellets from first lay (around 16-19 weeks of age). Expected feed
                  consumption per hen of around 125g per day.
                </p>
                <p className="text-muted-foreground">
                  WSF Golden Layer Pellets should be fed alongside ad-lib Oyster Shell Grit. Ensure drinking water is always
                  available. Also store in a cool, dry place.
                </p>
              </CardContent>
            </Card>

            {/* Purpose and Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Purpose and Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Nutritionally Balanced</strong> - Golden Layer Pellets are designed to provide hens with the necessary protein,
                    energy, calcium, and other vital nutrients.
                  </li>
                  <li>
                    <strong>Egg Production</strong> - They support hen health and egg production from the point of lay onwards.
                  </li>
                  <li>
                    <strong>Gut Health</strong> - Some formulations may include probiotics and prebiotics to promote healthy gut flora.
                  </li>
                  <li>
                    <strong>Digestive Support</strong> - May contain functional fibres to promote efficient digestion.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  To Order
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">
                  Winton Office: 03 236 6089
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Chicken Feed */}
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/products/chicken-feed">
              ← Back to Chicken Feed
            </Link>
          </Button>
        </div>
      </div>
    </ProductLayout>
  );
};

export default GoldenLayerPellets;