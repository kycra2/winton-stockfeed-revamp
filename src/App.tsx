
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
          <Route path="/conedose-calculator" element={<CondoseCalculator />} />
          <Route path="/conedose" element={<Condose />} />
          <Route path="/feed-quality-declarations" element={<FeedQualityDeclarations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Redirect category pages to /products/* canonical URLs */}
          <Route path="/dairy-feed" element={<Navigate to="/products/dairy-feed" replace />} />
          <Route path="/chicken-feed" element={<Navigate to="/products/chicken-feed" replace />} />
          <Route path="/calf-feed" element={<Navigate to="/products/calf-feed" replace />} />
          <Route path="/sheep-feed" element={<Navigate to="/products/sheep-feed" replace />} />
          <Route path="/goat-feed" element={<Navigate to="/products/goat-feed" replace />} />
          <Route path="/sheep-feed/sheep-nuts" element={<Navigate to="/products/sheep-nuts" replace />} />
          <Route path="/condose" element={<Navigate to="/conedose" replace />} />
          <Route path="/condose-calculator" element={<Navigate to="/conedose-calculator" replace />} />
          {/* Redirect old URLs to new ones */}
          <Route path="/pages/feed-trailers" element={<Navigate to="/feed-trailers" replace />} />
          <Route path="/pages/deer-nuts" element={<Navigate to="/deer-feed" replace />} />
          <Route path="/pages/about-us" element={<Navigate to="/about-us" replace />} />
          <Route path="/pages/feed-quality-declarations" element={<Navigate to="/feed-quality-declarations" replace />} />
          <Route path="/pages/products" element={<Navigate to="/products" replace />} />
          <Route path="/pages/condose" element={<Navigate to="/conedose" replace />} />
          <Route path="/pages/contact-us-1" element={<Navigate to="/contact-us" replace />} />
          <Route path="/pages/copy-of-conedose-calculator" element={<Navigate to="/conedose" replace />} />
          <Route path="/pages/health-and-safety" element={<Navigate to="/health-and-safety" replace />} />
          <Route path="/collections" element={<Navigate to="/products" replace />} />
          <Route path="/pages/palm-kernel" element={<Navigate to="/dairy-feed/pke" replace />} />
          <Route path="/collections/frontpage" element={<Navigate to="/products" replace />} />
          <Route path="/pages/container-services" element={<Navigate to="/about-us" replace />} />
          <Route path="/pages/conedose-original-calculator" element={<Navigate to="/conedose-calculator" replace />} />
          <Route path="/pages/winton-team" element={<Navigate to="/contact-us" replace />} />
          <Route path="/pages/feed-mill-products-southland-otago-only" element={<Navigate to="/contact-us" replace />} />
          <Route path="/pages/calf-grower-16" element={<Navigate to="/dairy-feed/calf-grower-16" replace />} />
          <Route path="/pages/supreme-dairy-pellets" element={<Navigate to="/dairy-feed/high-energy-pellets" replace />} />
          <Route path="/pages/summer-pellets" element={<Navigate to="/products" replace />} />
          <Route path="/pages/molasses" element={<Navigate to="/molasses" replace />} />
          <Route path="/pages/conedose-calculator" element={<Navigate to="/conedose-calculator" replace />} />
          <Route path="/pages/sheep-nuts" element={<Navigate to="/products/sheep-nuts" replace />} />
          <Route path="/collections/all" element={<Navigate to="/products" replace />} />
          <Route path="/pages/barley-and-molasses-pellet" element={<Navigate to="/products" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
