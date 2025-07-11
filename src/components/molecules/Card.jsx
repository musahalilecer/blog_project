import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { blogs } from "../../data/blogs";


const Card = ({id, name, imageUrl, description, date , onDetail}) => {

  const navigate = useNavigate();

  return (
    <div className="mt-4 max-w-sm mx-auto p-2 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
      <Image
        className="w-full h-48 object-cover transition-transorm duration-500 group-hover:scale-110 rounded-2xls"
        alt={"Resim 1"}
        src={
          imageUrl
        }
      />
      <div className="p-5 space-y-4 space-x-2">
        <h3 className="text-2xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase text-gray-500">{date}</span>
          <Button 
            className="inline-flex items-center px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            onClick={onDetail}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
