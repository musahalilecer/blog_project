import React from 'react'
import Card from '../molecules/card'
import Image from '../atoms/Image'

const Images = () => {
  const imageUrls = [
    "https://cdnp.flypgs.com/files/ulkeler/Almanya/berlin-almanya.jpg",
    "https://www.travelguide.net/media/new-york.jpeg",
    "https://cdnp.flypgs.com/files/ulkeler/Almanya/berlin-almanya.jpg",
    "https://i0.wp.com/newloggers.com/wp-content/uploads/2019/01/eyfel-kulesi-ge%C3%A7ici-olarak-in%C5%9Fa-edilmi%C5%9Ftir.jpg?resize=1086%2C727&ssl=1",
    "https://www.etextilemagazine.com/wp-content/uploads/2019/07/ispanya.png",
    // Diğer görseller burada devam edebilir
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
      {imageUrls.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image ${index}`}
          className="w-full h-[30rem] object-cover rounded-lg shadow-lg"
        />
      ))}
    </div>
  );
};

export default Images;

