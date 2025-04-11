
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wsf-green-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Winton StockFeed</h3>
            <p className="mb-4">New Zealand's Independent Stock Feed Specialists since 1988.</p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-wsf-cream transition-colors">Home</a></li>
              <li><a href="#molasses" className="hover:text-wsf-cream transition-colors">Molasses</a></li>
              <li><a href="#dairy-feed" className="hover:text-wsf-cream transition-colors">Dairy Feed</a></li>
              <li><a href="#resources" className="hover:text-wsf-cream transition-colors">Resources</a></li>
              <li><a href="#about" className="hover:text-wsf-cream transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-wsf-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" /> 
                <span>123 Feed Road, Winton, Southland, New Zealand</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" /> 
                <span>0800 STOCKFEED (786 253)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> 
                <span>info@wintonstockfeed.co.nz</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 8am - 5pm</li>
              <li>Saturday: 9am - 12pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-wsf-green pt-6 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Winton StockFeed Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
