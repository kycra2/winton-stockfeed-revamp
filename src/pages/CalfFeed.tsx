import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Dairy", href: "/dairy-feed" },
  { name: "Calf", href: "/calf-feed" },
  { name: "Sheep", href: "/sheep-feed" },
  { name: "Deer", href: "/deer-feed" },
  { name: "Goat", href: "#" },
  { name: "Chicken", href: "#" },
];

const calfProducts = [
  {
    name: "Calf Grower 16",
    description: "High-quality nutrition for growing calves with 16% protein content",
    href: "/dairy-feed/calf-grower-16"
  },
  {
    name: "Calf Grower 20",
    description: "Premium calf nutrition with 20% protein for optimal growth",
    href: "/dairy-feed/calf-grower-20"
  },
  {
    name: "Calf Blend 17",
    description: "Specially formulated blend with 17% protein for balanced nutrition",
    href: "/dairy-feed/calf-blend-17"
  },
  {
    name: "Calf Muesli 18",
    description: "Nutritious muesli mix with 18% protein for healthy calf development",
    href: "/dairy-feed/calf-muesli-18"
  },
  {
    name: "Eco Calf Finisher",
    description: "Environmentally conscious finishing feed for mature calves",
    href: "/dairy-feed/eco-calf-finisher"
  }
];

export default function CalfFeed() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/products">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold text-primary mb-2">Calf Feed</h1>
          <p className="text-lg text-muted-foreground">Premium nutrition solutions for growing calves</p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-0 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className={`px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors hover:text-primary hover:border-primary ${
                  category.name === "Calf"
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calfProducts.map((product) => (
            <Card key={product.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={product.href}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}