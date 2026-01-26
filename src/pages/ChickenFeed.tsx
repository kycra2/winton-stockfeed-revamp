import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Egg } from 'lucide-react';
import SEOHead, { generateBreadcrumbSchema, generateProductSchema } from '@/components/SEOHead';

const chickenProducts = [
  {
    title: "Golden Layer Pellets",
    description: "Barley & molasses pellets specifically formulated to meet the nutritional needs of laying hens, supporting healthy egg production",
    icon: Egg,
    href: "/chicken-feed/golden-layer-pellets",
    color: "bg-primary/10 hover:bg-primary/20"
  }
];

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: true },
  { title: "Molasses", href: "/molasses", active: false }
];

const chickenFeedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProductSchema({
      name: "Golden Layer Pellets",
      description: "Barley & molasses pellets specifically formulated to meet the nutritional needs of laying hens, supporting healthy egg production.",
      category: "Chicken Feed"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.wintonstockfeed.co.nz/" },
      { name: "Products", url: "https://www.wintonstockfeed.co.nz/products" },
      { name: "Chicken Feed", url: "https://www.wintonstockfeed.co.nz/products/chicken-feed" }
    ])
  ]
};

const ChickenFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("CHICKEN");

  return (
    <ProductLayout title="Chicken Feed">
      <SEOHead
        title="Chicken Feed NZ - Golden Layer Pellets | Winton Stock Feed"
        description="Premium chicken feed for New Zealand poultry. Golden Layer Pellets with barley & molasses, specifically formulated for laying hens. Supports healthy egg production. Winton Stock Feed."
        keywords="chicken feed NZ, layer pellets, poultry feed, hen feed, egg production feed, Winton Stock Feed chicken feed"
        canonicalUrl="https://www.wintonstockfeed.co.nz/products/chicken-feed"
        schema={chickenFeedSchema}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chickenProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <Link key={product.title} to={product.href}>
                <Card className={`h-full transition-all duration-200 hover:shadow-lg ${product.color} border-border/50`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Product Information */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Chicken Feed Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Winton Stock Feed provides high-quality chicken feed products designed to meet the nutritional needs of 
              poultry at all life stages. Our carefully formulated feeds ensure optimal health, growth, and egg production for your flock.
            </p>
          </div>
        </div>

      </div>
    </ProductLayout>
  );
};

export default ChickenFeed;