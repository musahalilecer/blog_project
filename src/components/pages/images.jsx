import React from 'react'
import Card from '../molecules/card'
import Image from '../atoms/Image'
import { useState } from 'react';

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageUrls = [
    {
      url: "https://cdnp.flypgs.com/files/ulkeler/Almanya/berlin-almanya.jpg",
      title: "Berlin, Germany",
      description: "Brandenburg Gate and historical architecture"
    },
    {
      url: "https://www.travelguide.net/media/new-york.jpeg",
      title: "New York City, USA",
      description: "The city that never sleeps"
    },
    {
      url: "https://www.travelguide.net/media/madrid.jpeg",
      title: "Madrid, Spain",
      description: "Neon lights and bustling streets"
    },
    {
      url: "https://www.travelguide.net/media/sydney.jpeg",
      title: "Sydney, Australia",
      description: "Sydney Opera House and beautiful beaches"
    },
    {
      url: "https://www.travelguide.net/media/paris.jpeg",
      title: "Paris, France",
      description: "Eiffel Tower and romantic streets"
    }
    // ... add more images
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Hero Section */}
      <div className="relative h-[30vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-[url('path/to/pattern.png')] opacity-10"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="animate-fadeIn">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Travel Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Explore beautiful destinations around the world
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Grid */}
      <main className="flex-grow container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageUrls.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12 bg-gradient-to-b from-transparent to-black/50 cursor-pointer">
                <Image
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover filter brightness-100 group-hover:brightness-110 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full bg-white/5 rounded-2xl overflow-hidden backdrop-blur-md p-2">
            <button
              className="absolute top-4 right-4 text-white/90 text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-white p-6">
              <h2 className="text-3xl font-bold mb-3">{selectedImage.title}</h2>
              <p className="text-white/80 text-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p className="text-sm tracking-wide">&copy; {new Date().getFullYear()} Travel Gallery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Images;
