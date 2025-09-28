import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200")'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Muahib Food
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-700">
            Discovering African Culinary Heritage
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating food, culture, and creativity in the heart of Abuja
          </p>
          
          <button 
            onClick={scrollToEvents}
            className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Events
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown 
          className="w-8 h-8 text-gray-400 animate-bounce cursor-pointer"
          onClick={scrollToEvents}
        />
      </div>
    </section>
  );
};

export default Hero;