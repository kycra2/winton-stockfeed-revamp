import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="container-custom py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-wsf-blue-dark mb-4">404</h1>
              <h2 className="text-3xl font-semibold text-wsf-blue-dark mb-4">Page Not Found</h2>
              <p className="text-lg text-gray-600 mb-8">
                Sorry, the page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-wsf-blue hover:bg-wsf-blue-dark">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go to Homepage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </button>
              </Button>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
              <h3 className="text-xl font-semibold text-wsf-blue-dark mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you're looking for information about our products or services, try these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link to="/products" className="text-wsf-blue hover:text-wsf-blue-dark underline">Products</Link>
                <span className="text-gray-400">•</span>
                <Link to="/products/dairy-feed" className="text-wsf-blue hover:text-wsf-blue-dark underline">Dairy Feed</Link>
                <span className="text-gray-400">•</span>
                <Link to="/molasses" className="text-wsf-blue hover:text-wsf-blue-dark underline">Molasses</Link>
                <span className="text-gray-400">•</span>
                <Link to="/contact-us" className="text-wsf-blue hover:text-wsf-blue-dark underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
