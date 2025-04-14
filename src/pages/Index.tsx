
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BlendingFacility from '@/components/BlendingFacility';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import History from '@/components/History';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BlendingFacility />
        <Services />
        <Gallery />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
