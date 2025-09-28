import React from 'react';
import { Users, Ticket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join the Muahib Food Community
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Whether you're a food lover or culinary creator, there's a place for you in our community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ticket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Food Lovers</h3>
            <p className="text-orange-100 mb-6">
              Secure your spot at our upcoming food festivals and exclusive dining experiences.
            </p>
            <button 
              onClick={() => {
                // WhatsApp message for buying tickets
                const message = encodeURIComponent("Hello! I'm interested in purchasing tickets for Muahib Food events. Could you please provide me with information about upcoming events and ticket prices?");
                window.open(`https://wa.me/2349025794407?text=${message}`, '_blank');
              }}
              className="w-full bg-white text-orange-600 py-3 rounded-full font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
            >
              Buy Tickets
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">For Vendors</h3>
            <p className="text-orange-100 mb-6">
              Join our community of food artisans and showcase your culinary creations.
            </p>
            <button 
              onClick={() => {
                // WhatsApp message for becoming a vendor
                const message = encodeURIComponent("Hello! I'm interested in becoming a vendor for Muahib Food events. Could you please provide me with more information about the application process, requirements, and upcoming opportunities?");
                window.open(`https://wa.me/2349025794407?text=${message}`, '_blank');
              }}
              className="w-full bg-white text-orange-600 py-3 rounded-full font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;