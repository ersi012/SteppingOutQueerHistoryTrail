import React from 'react';
import SiteCard from "./SiteCard";

const SiteSection = () => {
  const Data = [
    {
      id: 1,
      title: "First Parish Church",
      description: "Short description 1",
      image: "/images/sites/1.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 2,
      title: "Monument Square",
      description: "Short description 2",
      image: "/images/sites/2.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 3,
      title: "Equality Community Center",
      description: "Short description 3",
      image: "/images/sites/1.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 4,
      title: "Drop me a line",
      description: "Short description 4",
      image: "/images/sites/6.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 5,
      title: "State Theater Bldg",
      description: "Short description 5",
      image: "/images/sites/2.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 6,
      title: "Blackstones",
      description: "Short description 6",
      image: "/images/sites/6.png",
      url: "/sites/FirstParishChurch",
    },
    {
      id: 7,
      title: "Western Prom",
      description: "Short description 7",
      image: "/images/sites/1.png",
      url: "/sites/FirstParishChurch",
    },
  ];
  // console.log("URL:", site.url); // Add this line to chek if url is defined


  return (
    <div className="bg-white w-screen min-h-screen flex justify-center items-center">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-12 mt-20 text-[#E2D6AF]">Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {Data.map((site) => {
  console.log("URL:", site.url);
  return (
    <SiteCard
      id={site.id} 
      url={site.url}
      title={site.title}
      description={site.description}
      imgUrl={site.image}
    />
  );
})}

        </div>
      </div>
    </div>
   
  );
};

export default SiteSection;
