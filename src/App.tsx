
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Molasses from "./pages/Molasses";
import NotFound from "./pages/NotFound";
import FeedTrailersPage from "./pages/FeedTrailers";
import DeerFeed from "./pages/DeerFeed";
import ContactUs from "./pages/ContactUs";

// Import dairy feed pages
import PKEPage from "./pages/dairy-feed/PKE";
import MaizeDDGSPage from "./pages/dairy-feed/MaizeDDGS";
import SoyBranHullsPage from "./pages/dairy-feed/SoyBranHulls";
import SoybeanMealPage from "./pages/dairy-feed/SoybeanMeal";
import CrushedGrainPage from "./pages/dairy-feed/CrushedGrain";
import PrecalverPelletsPage from "./pages/dairy-feed/PrecalverPellets";
import SupremeDairyPelletsPage from "./pages/dairy-feed/SupremeDairyPellets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/molasses" element={<Molasses />} />
          <Route path="/feed-trailers" element={<FeedTrailersPage />} />
          <Route path="/deer-feed" element={<DeerFeed />} />
          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Dairy Feed Product Routes */}
          <Route path="/dairy-feed/pke" element={<PKEPage />} />
          <Route path="/dairy-feed/maize-ddgs" element={<MaizeDDGSPage />} />
          <Route path="/dairy-feed/soy-bran-hulls" element={<SoyBranHullsPage />} />
          <Route path="/dairy-feed/soybean-meal" element={<SoybeanMealPage />} />
          <Route path="/dairy-feed/crushed-grain" element={<CrushedGrainPage />} />
          <Route path="/dairy-feed/precalver-pellets" element={<PrecalverPelletsPage />} />
          <Route path="/dairy-feed/supreme-dairy-pellets" element={<SupremeDairyPelletsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
