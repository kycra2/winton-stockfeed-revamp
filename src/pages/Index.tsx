
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BlendingFacility from '@/components/BlendingFacility';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        {/* Contact Us Button Section */}
        <section className="py-12 bg-white">
          <div className="container-custom text-center">
            <Link to="/contact-us">
              <Button className="bg-wsf-blue hover:bg-wsf-blue-dark text-white px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
        
        <BlendingFacility />
        
        <Gallery />
        
        {/* Video Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-wsf-blue-dark mb-4">
                See Us In Action
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch how Winton Stock Feed delivers quality solutions to New Zealand farmers.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/c5s3ZviV9-c?si=x9z08Fx3y21BodKD" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
