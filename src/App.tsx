
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Molasses from "./pages/Molasses";
import NotFound from "./pages/NotFound";
import FeedTrailersPage from "./pages/FeedTrailers";
import DeerFeed from "./pages/DeerFeed";
import ContactUs from "./pages/ContactUs";
import SheepFeedPage from "./pages/SheepFeed";
import AboutUs from "./pages/AboutUs";
import CondoseCalculator from "./pages/CondoseCalculator";
import Condose from "./pages/Condose";
import FeedQualityDeclarations from "./pages/FeedQualityDeclarations";
import Testimonials from "./pages/Testimonials";
import Products from "./pages/Products";
import DairyFeed from "./pages/DairyFeed";
import CalfFeed from "./pages/CalfFeed";
import ChickenFeed from "./pages/ChickenFeed";
import GoatFeed from "./pages/GoatFeed";
import ProductsDeerFeed from "./pages/products/DeerFeed";

import PKEPage from "./pages/dairy-feed/PKE";
import MaizeDDGSPage from "./pages/dairy-feed/MaizeDDGS";
import SoyBranHullsPage from "./pages/dairy-feed/SoyBranHulls";
import SoybeanMealPage from "./pages/dairy-feed/SoybeanMeal";
import CrushedGrainPage from "./pages/dairy-feed/CrushedGrain";
import PrecalverPelletsPage from "./pages/dairy-feed/PrecalverPellets";
import HighEnergyPelletsPage from "./pages/dairy-feed/HighEnergyPellets";
import CalfGrower16Page from "./pages/dairy-feed/CalfGrower16";
import CalfGrower20Page from "./pages/dairy-feed/CalfGrower20";
import CalfBlend17Page from "./pages/dairy-feed/CalfBlend17";
import CalfMuesli18Page from "./pages/dairy-feed/CalfMuesli18";
import EcoCalfFinisherPage from "./pages/dairy-feed/EcoCalfFinisher";
import TapiocaPage from "./pages/dairy-feed/Tapioca";
import SheepNutsPage from "./pages/sheep-feed/SheepNuts";
import GoldenLayerPelletsPage from "./pages/chicken-feed/GoldenLayerPellets";
import GoatPelletsPage from "./pages/goat-feed/GoatPellets";
import HealthAndSafety from './pages/HealthAndSafety';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/dairy-feed" element={<DairyFeed />} />
          <Route path="/products/calf-feed" element={<CalfFeed />} />
          <Route path="/products/sheep-feed" element={<SheepFeedPage />} />
          <Route path="/products/deer-feed" element={<ProductsDeerFeed />} />
          <Route path="/products/chicken-feed" element={<ChickenFeed />} />
          <Route path="/products/goat-feed" element={<GoatFeed />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/molasses" element={<Molasses />} />
          <Route path="/feed-trailers" element={<FeedTrailersPage />} />
          <Route path="/deer-feed" element={<DeerFeed />} />
          <Route path="/products/sheep-nuts" element={<SheepNutsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dairy-feed/pke" element={<PKEPage />} />
          <Route path="/dairy-feed/maize-ddgs" element={<MaizeDDGSPage />} />
          <Route path="/dairy-feed/soy-bran-hulls" element={<SoyBranHullsPage />} />
          <Route path="/dairy-feed/soybean-meal" element={<SoybeanMealPage />} />
          <Route path="/dairy-feed/crushed-grain" element={<CrushedGrainPage />} />
          <Route path="/dairy-feed/precalver-pellets" element={<PrecalverPelletsPage />} />
          <Route path="/dairy-feed/high-energy-pellets" element={<HighEnergyPelletsPage />} />
          <Route path="/dairy-feed/calf-grower-16" element={<CalfGrower16Page />} />
          <Route path="/dairy-feed/calf-grower-20" element={<CalfGrower20Page />} />
          <Route path="/dairy-feed/calf-blend-17" element={<CalfBlend17Page />} />
          <Route path="/dairy-feed/calf-muesli-18" element={<CalfMuesli18Page />} />
          <Route path="/dairy-feed/eco-calf-finisher" element={<EcoCalfFinisherPage />} />
          <Route path="/dairy-feed/tapioca" element={<TapiocaPage />} />
          <Route path="/chicken-feed/golden-layer-pellets" element={<GoldenLayerPelletsPage />} />
          <Route path="/goat-feed/goat-pellets" element={<GoatPelletsPage />} />
          <Route path="/health-and-safety" element={<HealthAndSafety />} />
          <Route path="/condose-calculator" element={<CondoseCalculator />} />
          <Route path="/condose" element={<Condose />} />
          <Route path="/feed-quality-declarations" element={<FeedQualityDeclarations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Redirect old URLs to new ones */}
          <Route path="/pages/winton-team" element={<Navigate to="/about-us" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
