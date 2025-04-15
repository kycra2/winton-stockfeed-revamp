
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Molasses', href: '/molasses' },
  { name: 'Dairy Feed', href: '#dairy-feed' },
  { name: 'Calf Feed', href: '#calf-feed' },
  { name: 'Sheep Feed', href: '#sheep-feed' },
  { name: 'Deer Feed', href: '#deer-feed' },
  { name: 'Feed Trailers', href: '#feed-trailers' },
  { name: 'Contact Us', href: '#contact-us' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6c84f9ee-b048-4fbb-a3b3-6edaf613fd47.png" 
            alt="Winton StockFeed Logo" 
            className="h-12 md:h-16" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link key={item.name} to={item.href} className="navbar-item">
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className="navbar-item">
                {item.name}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-wsf-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-wsf-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="block py-2 text-gray-700 hover:text-wsf-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
