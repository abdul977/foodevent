import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Abuja Food Heritage Festival",
      date: "March 15, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Millennium Park, Abuja",
      description: "A celebration of traditional Nigerian cuisine with local vendors, cooking demonstrations, and cultural performances.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Farm to Table Experience",
      date: "March 28, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Jabi Lake Mall, Abuja",
      description: "Connect with local farmers and learn about sustainable food practices while enjoying fresh, organic meals.",
      image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Street Food Showcase",
      date: "April 10, 2025",
      time: "5:00 PM - 10:00 PM",
      location: "Wuse 2 Market Square",
      description: "Experience the vibrant flavors of Abuja's street food scene with guided tastings and vendor stories.",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for unforgettable culinary experiences that celebrate African food heritage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${event.image})`}}>
                <div className="h-full bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <Link 
                  to={`/event/${event.id}`}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;