
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-burgundy">
              <span className="text-burgundy-light">Visa</span>Dome
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Destination</a>
              <a href="#" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Funding</a>
              <a href="#services" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Other Services</a>
              <a href="#process" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Refer & Earn</a>
              <a href="#contact" className="text-gray-700 hover:text-burgundy px-3 py-2 text-sm font-medium">Contact</a>
              <Button variant="outline" className="px-8 bg-burgundy text-white hover:border-burgundy hover:text-burgundy transition-colors">
                Blog
              </Button>
              {/* <Button variant="outline" className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-colors">
                Login
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy-dark text-white transition-colors">
                Apply Now
              </Button> */}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Menu">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Destination</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Funding</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Other Services</a>
            <a href="#process" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Refer & Earn</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-burgundy">Contact</a>
            {/* <div className="flex space-x-2 mt-2">
              <Button variant="outline" className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white transition-colors w-1/2">
                Login
              </Button>
              <Button className="bg-burgundy hover:bg-burgundy-dark text-white transition-colors w-1/2">
                Apply Now
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
