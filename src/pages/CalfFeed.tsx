import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Beef, Wheat, Milk, Egg, Droplets, Mountain } from 'lucide-react';

const calfProducts = [
  {
    title: "Calf Grower 16",
    description: "High-quality nutrition for growing calves with 16% protein content",
    icon: Milk,
    href: "/dairy-feed/calf-grower-16",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Calf Grower 20",
    description: "Premium calf nutrition with 20% protein for optimal growth",
    icon: Milk,
    href: "/dairy-feed/calf-grower-20",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Calf Blend 17",
    description: "Specially formulated blend with 17% protein for balanced nutrition",
    icon: Milk,
    href: "/dairy-feed/calf-blend-17",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "Calf Muesli 18",
    description: "Nutritious muesli mix with 18% protein for healthy calf development",
    icon: Milk,
    href: "/dairy-feed/calf-muesli-18",
    color: "bg-muted/10 hover:bg-muted/20"
  },
  {
    title: "Eco Calf Finisher",
    description: "Environmentally conscious finishing feed for mature calves",
    icon: Milk,
    href: "/dairy-feed/eco-calf-finisher",
    color: "bg-primary/10 hover:bg-primary/20"
  }
];

const categories = [
  { title: "Dairy", href: "products/dairy-feed", active: false },
  { title: "Calf", href: "products/calf-feed", active: true },
  { title: "Sheep", href: "products/sheep-feed", active: false },
  { title: "Deer", href: "/deer-feed", active: false },
  { title: "Goat", href: "/goat-feed", active: false },
  { title: "Chicken", href: "/chicken-feed", active: false }
];

const CalfFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("CALF");

  return (
    <ProductLayout title="Calf Feed">
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
          {calfProducts.map((product) => {
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Calf Feed Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Winton Stock Feed offers a comprehensive range of high-quality calf feed products designed to support healthy growth, 
              improve development, and establish strong foundations for future productivity. Our calf nutrition products are carefully 
              formulated to meet the specific needs of growing calves at every stage of development.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default CalfFeed;