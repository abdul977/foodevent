import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';

const Vendors = () => {
  const vendors = [
    {
      id: 1,
      name: "Mama Kemi's Kitchen",
      specialty: "Traditional Yoruba Cuisine",
      rating: 4.9,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Authentic Yoruba dishes prepared with traditional methods and locally sourced ingredients."
    },
    {
      id: 2,
      name: "Northern Delights",
      specialty: "Hausa & Fulani Specialties",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Bringing the rich flavors of Northern Nigeria to Abuja with authentic spices and cooking techniques."
    },
    {
      id: 3,
      name: "Igbo Heritage Foods",
      specialty: "Eastern Nigerian Cuisine",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Celebrating Igbo culinary traditions with modern presentation and sustainable practices."
    },
    {
      id: 4,
      name: "Fusion Flavors",
      specialty: "Contemporary African Fusion",
      rating: 4.6,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Innovative dishes that blend traditional African flavors with modern culinary techniques."
    }
  ];

  return (
    <section id="vendors" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Vendors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented chefs and food artisans who bring authentic African flavors to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 rounded-full bg-cover bg-center mx-auto mb-4" style={{backgroundImage: `url(${vendor.image})`}}>
                <div className="w-full h-full rounded-full bg-black bg-opacity-20"></div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {vendor.name}
              </h3>
              
              <p className="text-orange-600 font-semibold mb-3">
                {vendor.specialty}
              </p>
              
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{vendor.rating}</span>
                </div>
              </div>
              
              <Link 
                to={`/vendor/${vendor.id}`}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              // WhatsApp message for becoming a vendor
              const message = encodeURIComponent("Hello! I'm interested in becoming a vendor for Muahib Food events. Could you please provide me with more information about the application process and requirements?");
              window.open(`https://wa.me/2349025794407?text=${message}`, '_blank');
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
          >
            <Users className="w-6 h-6 mr-2" />
            Become a Vendor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vendors;