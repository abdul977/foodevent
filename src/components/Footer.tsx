import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">MuahibFood</h3>
            <p className="text-gray-300">
              Your one-stop shop for delicious and authentic Nigerian cuisine.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-orange-400 transition-colors">Events</a></li>
              <li><a href="#vendors" className="hover:text-orange-400 transition-colors">Vendors</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <p>hello@muahibfood.com</p>
              <a 
                href="tel:+2349025794407" 
                className="block hover:text-orange-400 transition-colors"
              >
                +234 902 579 4407
              </a>
              <p>Wuse 2 District<br />Abuja, FCT, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 MuahibFood. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
