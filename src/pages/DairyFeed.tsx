import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Beef, Wheat, Milk, Egg, Droplets, Mountain } from 'lucide-react';

const dairyProducts = [
  {
    title: "PKE",
    description: "Premium Palm Kernel Extract for enhanced dairy nutrition",
    icon: Wheat,
    href: "/dairy-feed/pke",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Maize DDGS",
    description: "High-quality Maize Distillers Dried Grains with Solubles",
    icon: Wheat,
    href: "/dairy-feed/maize-ddgs",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Soya Hulls",
    description: "Nutritious soybean hulls for optimal dairy feed",
    icon: Wheat,
    href: "/dairy-feed/soy-bran-hulls",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "Soybean Meal",
    description: "High-protein soybean meal for dairy cattle",
    icon: Wheat,
    href: "/dairy-feed/soybean-meal",
    color: "bg-muted/10 hover:bg-muted/20"
  },
  {
    title: "Crushed Grain",
    description: "Premium crushed grain for dairy nutrition",
    icon: Wheat,
    href: "/dairy-feed/crushed-grain",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Tapioca",
    description: "High-energy tapioca for dairy cattle feed",
    icon: Wheat,
    href: "/dairy-feed/tapioca",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Precalving Pellets",
    description: "Specialized nutrition for pre-calving dairy cattle",
    icon: Milk,
    href: "/dairy-feed/precalver-pellets",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "High Energy Pellets",
    description: "Premium high-energy pellets for maximum dairy performance",
    icon: Milk,
    href: "/dairy-feed/high-energy-pellets",
    color: "bg-muted/10 hover:bg-muted/20"
  }
];

const categories = [
  { title: "Dairy", href: "/dairy-feed", active: true },
  { title: "Calf", href: "/calf-feed", active: false },
  { title: "Sheep", href: "/sheep-feed", active: false },
  { title: "Deer", href: "/deer-feed", active: false },
  { title: "Goat", href: "/goat-feed", active: false },
  { title: "Chicken", href: "/chicken-feed", active: false }
];

const DairyFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("DAIRY");

  return (
    <ProductLayout title="Dairy Feed">
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
            <React.Fragment key={category.title}>
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
            </React.Fragment>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dairyProducts.map((product) => {
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Dairy Feed Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Winton Stock Feed offers a comprehensive range of high-quality dairy feed products designed to maximise milk production, 
              improve herd health, and optimize farm profitability. Our products are carefully selected and formulated to meet the 
              specific nutritional needs of dairy cattle at every stage of production.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default DairyFeed;