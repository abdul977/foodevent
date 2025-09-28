import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Follow our journey and stay updated on our latest events and culinary adventures.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://instagram.com/muahibfood" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-8 h-8 text-white" />
            </a>
            <a 
              href="https://facebook.com/muahibfood" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-8 h-8 text-white" />
            </a>
            <a 
              href="https://twitter.com/muahibfood" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800 to-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <Twitter className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
