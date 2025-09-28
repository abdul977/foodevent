import React, { useState } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <div className="bg-gradient-to-br from-yellow-600 to-orange-700 p-2 rounded-full">
            <Utensils className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-800">Muahib Food</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('events')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Events
          </button>
          <button 
            onClick={() => scrollToSection('vendors')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Vendors
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col py-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('vendors')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                Vendors
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 text-left hover:bg-amber-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;