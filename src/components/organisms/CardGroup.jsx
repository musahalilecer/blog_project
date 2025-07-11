import React from "react";
import Card from "../molecules/card";

const CardGroup = ({ items }) => {
  // If items not provided, render 6 placeholder cards
  const cards = items && items.length ? items : Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {cards.map((item, idx) => (
        <Card key={item?.id || idx} {...item} />
      ))}
    </div>
  );
};

export default CardGroup;
