import React from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';

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

const VendorDetailPage = () => {
  const { id } = useParams();
  const vendor = vendors.find(v => v.id === parseInt(id || ""));

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-cover bg-center h-64 rounded-t-lg" style={{backgroundImage: `url(${vendor.image})`}}></div>
        <div className="bg-white p-8 rounded-b-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">{vendor.name}</h1>
            <p className="text-xl text-orange-600 font-semibold mb-4">{vendor.specialty}</p>
            <div className="flex items-center mb-4">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(vendor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                    ))}
                    <span className="ml-2 text-lg text-gray-600">{vendor.rating}</span>
                </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">{vendor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDetailPage;