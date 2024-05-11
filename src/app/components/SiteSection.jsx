import React from 'react';
import SiteCard from "./SiteCard";
import Link from "next/link";

const SiteSection = () => {
  const Data = [
    {
      key: 1,
      title: "First Parish Church",
      description: "Short description 1",
      image: "/images/sites/1.png",
      url: "/FirstParishChurch",
    },
  
  ];

  return (
    <div className="bg-white w-screen min-h-screen flex justify-center items-center">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-12 mt-20 text-[#E2D6AF]">Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
          {Data.map((card) => (
            <SiteCard
              key={card.id}
              url={card.url}
              title={card.title}
              description={card.description}
              imgUrl={card.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SiteSection;
