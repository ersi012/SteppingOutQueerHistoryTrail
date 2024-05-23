import React from 'react';
import SiteCard from "./SiteCard";

const SiteSection = () => {
  const Data = [
    {
      id: 1,
      title: "First Parish Church",
      description: "425 Congress St.",
      image: "/images/sites/1.png",
      url: "/FirstParishChurch",
    },
    {
      id: 2,
      title: "Monument Square",
      description: "456 Congress St.",
      image: "/images/sites/2.png",
      url: "/MonumentSquare",
    },
    {
      id: 3,
      title: "Equality Community Center",
      description: "415 Casco St.",
      image: "/images/sites/3.jpg",
      url: "/EqualityCommunityCenter",
    },
    {
      id: 4,
      title: "Drop me a line",
      description: "615A Congress Street.",
      image: "/images/sites/4.jpg",
      url: "/DropMeALine",
    },
    {
      id: 5,
      title: "State Theater Building",
      description: "142 High Street",
      image: "/images/sites/5.jpg",
      url: "/StateTheaterBldg",
    },
    {
      id: 6,
      title: "Blackstones",
      description: "6 Pine St.",
      image: "/images/sites/6.png",
      url: "/Blackstones",
    },
    {
      id: 7,
      title: "Western Prom",
      description: "242 Western Prom.",
      image: "/images/sites/7.jpg",
      url: "/WesternProm",
    },
    {
      id: 8,
      title: "Our Books/Our Paper ",
      description: "4 Pine St.",
      image: "/images/sites/8.jpg",
      url: "/OurBooksOurPaper" , //this needs to match the name of the folder of the site
    },
  ];

  return (
    <div className="bg-white w-screen min-h-screen flex justify-center items-center">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-12 mt-20 text-[#E2D6AF]">Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {Data.map((card) => {
          return (
            <SiteCard
              key={card.id} 
              url={card.url}
              title={card.title}
              description={card.description}
              imgUrl={card.image}
            />
          );
        })}

        </div>
      </div>
    </div>
   
  );
};

export default SiteSection;
