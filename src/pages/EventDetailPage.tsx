import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

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

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id || ""));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
            <div className="bg-cover bg-center h-64 rounded-t-lg" style={{backgroundImage: `url(${event.image})`}}></div>
            <div className="bg-white p-8 rounded-b-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-lg text-gray-700">
                        <Calendar className="w-6 h-6 mr-3 text-orange-600" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-lg text-gray-700">
                        <Clock className="w-6 h-6 mr-3 text-orange-600" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-lg text-gray-700">
                        <MapPin className="w-6 h-6 mr-3 text-orange-600" />
                        <span>{event.location}</span>
                    </div>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">{event.description}</p>
            </div>
        </div>
    </div>
  );
};

export default EventDetailPage;