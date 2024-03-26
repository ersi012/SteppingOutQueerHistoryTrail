import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white w-screen flex justify-center items-center">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-20 mt-20 text-[#E2D6AF]">About</h2>
        <div className="flex flex-col md:flex-row items-center mt-5 md:mt-0 md:-mx-4">
          <div className="w-full md:w-1/2 md:px-4 flex justify-center">
            <img className="w-full md:w-3/4 rounded-lg shadow-lg" src="/images/sites/2.png" alt="About" />
          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0 md:px-4">
            <p className="text-lg text-gray-700 px-5">
              This project was made possible by a grant from Maine Humanities Council, and was created by Dr. Wendy Chapkis, Mary F. Holt, and Megan MacGregor, with the assistance of student researchers from the University of Southern Maine including Tye Lynch, Ty Bolduc, Lael Daigle, and Oliver Eaton, as well as members of the 2016-2024 SOC 301/WGS 320 seminars at USM. Further support was provided by independent researcher Elizabeth Lowell and the UMaine VEMI Lab. We are also grateful for the audio assistance offered by Jessica Lockhart of WMPG Radio. Photos used in this project include work by Annette Dragon and Steven Bridges. Special thanks to the LGBTQ+ Collection, part of the Jean Byers Sampson Center for Diversity in Maine at the University of Southern Maine, whose collection was vital to this project. You can visit them and their collections online at : <a href="https://usm.maine.edu/special-collections/research/lgbtq-collection/">https://usm.maine.edu/special-collections/research/lgbtq-collection/</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button className='bg-[#1C5C2D] rounded-full px-9 py-3 font-serif font-semibold mt-6 text-[#E2D6AF] hover:bg-slate-200'>More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
