
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
import SheepFeedPage from "./pages/SheepFeed";
import AboutUs from "./pages/AboutUs";
import CondoseCalculator from "./pages/CondoseCalculator";
import FeedQualityDeclarations from "./pages/FeedQualityDeclarations";

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
import HealthAndSafety from './pages/HealthAndSafety';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/molasses" element={<Molasses />} />
          <Route path="/feed-trailers" element={<FeedTrailersPage />} />
          <Route path="/deer-feed" element={<DeerFeed />} />
          <Route path="/sheep-feed" element={<SheepFeedPage />} />
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
          <Route path="/health-and-safety" element={<HealthAndSafety />} />
          <Route path="/condose-calculator" element={<CondoseCalculator />} />
          <Route path="/feed-quality-declarations" element={<FeedQualityDeclarations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
