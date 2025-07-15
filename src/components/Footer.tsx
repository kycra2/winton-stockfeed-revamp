
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
              <li>
                <Link to="/health-and-safety" className="hover:text-wsf-cream transition-colors">
                  Health and Safety
                </Link>
              </li>
            
              <li><Link to="/about-us" className="hover:text-wsf-cream transition-colors">About Us</Link></li>
              
              <li><Link to="/condose-calculator" className="hover:text-wsf-cream transition-colors">Condose Calculator</Link></li>
              
              <li>
                <Link to="/feed-quality-declarations" className="hover:text-wsf-cream transition-colors">
                  Feed Quality Declarations
                </Link>
              </li>
              
              <li><Link to="/testimonials" className="hover:text-wsf-cream transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /> 
                <div>
                  <div className="font-medium">Head Office</div>
                  <div>139 Florence Rd, Winton 9782</div>
                  <a 
                    href="tel:0323660889" 
                    className="hover:text-wsf-cream transition-colors"
                  >
                    Phone 03 236 6089
                  </a>
                  <br />
                  <a 
                    href="mailto:office@wintonstockfeed.co.nz" 
                    className="hover:text-wsf-cream transition-colors"
                  >
                    office@wintonstockfeed.co.nz
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /> 
                <div>
                  <a 
                    href="tel:0800665277" 
                    className="hover:text-wsf-cream transition-colors"
                  >
                    Orders Free Phone 0800 MOLASSES Ph 0800 665 277
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /> 
                <div>
                  <a 
                    href="mailto:orders@wintonstockfeed.co.nz" 
                    className="hover:text-wsf-cream transition-colors"
                  >
                    orders@wintonstockfeed.co.nz
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          
        
        <div className="border-t border-wsf-blue pt-6 mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Winton StockFeed Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
