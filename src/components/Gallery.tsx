import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Traditional African cooking",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      url: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "African spices and ingredients",
      span: ""
    },
    {
      url: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Grilled African cuisine",
      span: ""
    },
    {
      url: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh African produce",
      span: "md:col-span-2"
    },
    {
      url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "African food preparation",
      span: ""
    },
    {
      url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Community dining experience",
      span: ""
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Moments of culinary magic, cultural celebration, and community connection
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${image.span}`}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Follow us on social media for more amazing moments from our events
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded" />
            </div>
            <div className="bg-white p-3 rounded-full shadow-lg">
              <div className="w-6 h-6 bg-blue-600 rounded" />
            </div>
            <div className="bg-white p-3 rounded-full shadow-lg">
              <div className="w-6 h-6 bg-gray-800 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;