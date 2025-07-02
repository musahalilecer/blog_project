import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

const Card = () => {
  // id, imageUrl, description, date, commentCount, authorName, authorProfileUrl
  return (
    <div className="mt-4 max-w-sm mx-auto p-2 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
      <Image
        className="w-full h-48 object-cover transition-transorm duration-500 group-hover:scale-110 rounded-2xls"
        alt={"Resim 1"}
        src={
          "https://www.ozenduvarkagidi.com.tr/images/urunler/100_doga-70-m-6934_1.jpg"
        }
      />
      <div className="p-5 space-y-4 space-x-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          Musa Halil Ecer
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
          dolor molestias. Sequi esse quis quos alias odio sed quia. Architecto
          repellat magnam neque odio voluptatum illum illo quos autem hic
          nostrum animi ipsam nam officia expedita, maxime minus sint qui
          tenetur nesciunt deleniti aperiam consequuntur veniam ex. Eligendi,
          beatae.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase text-gray-500">20/06/2025</span>
          <Button className="inline-flex items-center px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
