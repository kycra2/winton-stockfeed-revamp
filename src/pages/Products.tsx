import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Beef, Rabbit, TreePine, Droplets, Mountain, Egg } from 'lucide-react';

const categories = [
  {
    title: "Dairy",
    description: "Premium feed solutions for dairy cattle including PKE, crushed grain, and specialized pellets",
    icon: Beef,
    href: "/dairy-feed",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Calf", 
    description: "Specialized nutrition for growing calves with premium calf blends and growers",
    icon: Mountain,
    href: "/calf-feed",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Sheep",
    description: "Nutritious feed formulations designed specifically for sheep farming", 
    icon: Rabbit,
    href: "/sheep-feed",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "Deer",
    description: "Specialized feed products for deer farming operations",
    icon: TreePine,
    href: "/deer-feed",
    color: "bg-muted/10 hover:bg-muted/20"
  },
  {
    title: "Goat",
    description: "High-quality feed solutions designed for goat nutrition and health",
    icon: Mountain,
    href: "/goat-feed",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Chicken",
    description: "Premium poultry feed for optimal chicken health and egg production",
    icon: Egg,
    href: "/chicken-feed",
    color: "bg-secondary/10 hover:bg-secondary/20"
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <ProductLayout title="Our Products">
      <div className="space-y-8">
        {/* Category Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-1 text-lg font-semibold text-muted-foreground mb-12">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-4 py-2 transition-colors ${
              selectedCategory === "ALL" 
                ? "text-primary font-bold" 
                : "hover:text-primary"
            }`}
          >
            ALL
          </button>
          <span className="text-muted-foreground/50">|</span>
          {categories.map((category, index) => (
            <React.Fragment key={category.title}>
              <button
                onClick={() => setSelectedCategory(category.title.toUpperCase())}
                className={`px-4 py-2 transition-colors ${
                  selectedCategory === category.title.toUpperCase() 
                    ? "text-primary font-bold" 
                    : "hover:text-primary"
                }`}
              >
                {category.title.toUpperCase()}
              </button>
              {index < categories.length - 1 && (
                <span className="text-muted-foreground/50">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.title} to={category.href}>
                <Card className={`h-full transition-all duration-200 hover:shadow-lg ${category.color} border-border/50`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Product Categories Details */}
        <div className="space-y-12 mt-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="border-t border-border pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {category.description}
                </p>
                <Link 
                  to={category.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Explore {category.title} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </ProductLayout>
  );
};

export default Products;