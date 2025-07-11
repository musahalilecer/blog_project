import React from "react";
import Card from "../molecules/card";
import CardGroup from "../organisms/CardGroup";
import Images from "./images";
import { blogs } from "../../data/blogs.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="ml-10 mr-5 p-6 w-full overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          blogs.map(blog => (
            <Card 
              key={blog.id}
              imageUrl={blog.imageUrl}
              name={blog.name}
              description={blog.description}
              date={blog.date}
              onDetail={() => navigate(`/detail/${blog.id}`)}
            />
          ))
        }
      </div>
    </div>

  );
};

export default Home;
