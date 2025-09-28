import React from 'react';
import { Heart, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Muahib Food is more than an event - it's a celebration of African culinary heritage, 
              connecting communities through the universal language of food.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Celebrating Heritage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We showcase the rich tapestry of African cuisine, from traditional recipes passed down through 
                  generations to innovative interpretations that honor our roots while embracing creativity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Supporting Local
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform empowers local food artisans, farmers, and entrepreneurs in Abuja, 
                  creating opportunities for cultural exchange and economic growth through food.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African food preparation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Passion for Food</h4>
              <p className="text-gray-600">
                Every dish tells a story of culture, tradition, and the love that goes into creating memorable culinary experiences.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Community Focus</h4>
              <p className="text-gray-600">
                Building bridges between communities, fostering connections, and creating spaces where food brings people together.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div className="bg-gradient-to-br from-amber-600 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Cultural Heritage</h4>
              <p className="text-gray-600">
                Preserving and celebrating the diverse culinary traditions that make African cuisine unique and extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;