import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Dairy Feed', 
    href: '#', 
    children: [
      { name: 'PKE', href: '/dairy-feed/pke' },
      { name: 'Maize DDGS', href: '/dairy-feed/maize-ddgs' },
      { name: 'Soya Hulls', href: '/dairy-feed/soy-bran-hulls' },
      { name: 'Soybean Meal', href: '/dairy-feed/soybean-meal' },
      { name: 'Crushed Grain', href: '/dairy-feed/crushed-grain' },
      { name: 'Tapioca', href: '/dairy-feed/tapioca' },
      { name: 'Precalving Pellets', href: '/dairy-feed/precalver-pellets' },
      { name: 'High Energy Pellets', href: '/dairy-feed/high-energy-pellets' },
    ]
  },
  { name: 'Molasses', href: '/molasses' },
  {
    name: 'Sheep/Calf Feed', 
    href: '#', 
    children: [
      { name: 'Sheep Nuts', href: '/sheep-feed' },
      { name: 'Calf Grower 16%', href: '/dairy-feed/calf-grower-16' },
      { name: 'Calf Grower 20%', href: '/dairy-feed/calf-grower-20' },
      { name: 'Calf Blend 17%', href: '/dairy-feed/calf-blend-17' },
      { name: 'Calf Muesli 18%', href: '/dairy-feed/calf-muesli-18' },
      { name: 'Eco Calf Finisher', href: '/dairy-feed/eco-calf-finisher' },
      { name: 'Supreme Deer Nuts', href: '/deer-feed' },
    ]
  },
  { name: 'Feed Trailers', href: '/feed-trailers' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact Us', href: '/contact-us' }
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

  const renderNavItem = (item) => {
    if (item.children) {
      return (
        <DropdownMenu key={item.name}>
          <DropdownMenuTrigger className="navbar-item flex items-center gap-1 focus:outline-none">
            {item.name} <ChevronDown className="h-4 w-4 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-48 bg-white"
          >
            {item.children.map((child) => (
              <DropdownMenuItem key={child.name} asChild>
                <Link 
                  to={child.href}
                  className="flex w-full cursor-default items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wsf-blue"
                >
                  {child.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return item.href.startsWith('/') ? (
      <Link key={item.name} to={item.href} className="navbar-item">
        {item.name}
      </Link>
    ) : (
      <a key={item.name} href={item.href} className="navbar-item">
        {item.name}
      </a>
    );
  };

  const renderMobileNavItem = (item) => {
    if (item.children) {
      return (
        <div key={item.name} className="mb-2">
          <div className="flex items-center py-2 text-gray-700">
            {item.name}
          </div>
          <div className="ml-4 flex flex-col space-y-2 border-l border-gray-200 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.name}
                to={child.href}
                className="py-2 text-gray-700 hover:text-wsf-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return item.href.startsWith('/') ? (
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
    );
  };

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
          {navItems.map(renderNavItem)}
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
        <div className="md:hidden bg-white shadow-md fixed top-[60px] left-0 right-0 max-h-[calc(100vh-60px)] overflow-hidden">
          <ScrollArea className="h-[calc(100vh-60px)]">
            <div className="container-custom py-4 flex flex-col space-y-2">
              {navItems.map(renderMobileNavItem)}
            </div>
          </ScrollArea>
        </div>
      )}
    </header>
  );
};

export default Navbar;
