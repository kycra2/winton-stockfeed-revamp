import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-wsf-blue-dark text-white">
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
              <li><Link to="/" className="hover:text-wsf-cream transition-colors">Home</Link></li>
              <li><Link to="/molasses" className="hover:text-wsf-cream transition-colors">Molasses</Link></li>
            
              <li><Link to="/about-us" className="hover:text-wsf-cream transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-wsf-cream transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" /> 
                <span>Head Office<br></br>
                139 Florence Rd, Winton 9782 Phone 03 236 6089 <br></br>
                office@wintonstockfeed.co.nz</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" /> 
                <a 
                  href="tel:0800665277" 
                  className="hover:text-wsf-cream transition-colors"
                >
                  Orders Free Phone 0800 MOLASSES Ph 0800 665 277
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" /> 
                <a 
                  href="mailto:info@wintonstockfeed.co.nz" 
                  className="hover:text-wsf-cream transition-colors"
                >
                  info@wintonstockfeed.co.nz
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            
            <ul className="space-y-2">
              <li>Feed Mill<br></br>

107 Clyde Street<br></br>
Invercargill

Ph 03 236 6089</li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-wsf-blue pt-6 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Winton StockFeed Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
