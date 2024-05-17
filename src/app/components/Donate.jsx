import React from 'react';

const DonationsSection = () => {
  return (
    <div>
      <div className="bg-white w-screen flex justify-center items-center">
        <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-left mb-9 mt-20 text-[#E2D6AF]">Donations</h2>
          <div className="text-left">
            <p className="text-lg text-gray-700 px-5 ">
            If you’ve enjoyed this tour, please consider making a donation to the LGBTQ+ Collection Fund. Funds will be used to hire students and to purchase materials in order to make the collections even more accessible to the public. <br/> <br/>
<a href="https://securelb.imodules.com/s/300/1001-form/interior.aspx?sid=300&gid=1001&pgid=1273&cid=3048&fid=3048&gfid=1043&dids=1860.1842">
https://securelb.imodules.com/s/300/1001-form/interior.aspx?sid=300&gid=1001&pgid=1273&cid=3048&fid=3048&gfid=1043&dids=1860.1842</a>

            </p>
          </div>
          <div className="flex mt-5">
            <button className='bg-[#1C5C2D] rounded-full px-9 py-3 font-serif font-semibold mt-6 mb-9 text-[#E2D6AF] hover:bg-slate-200'>Donate</button>
          </div>
        </div>
      </div>
      <div className="bg-[#1C5C2D] w-screen h-20 px-15 flex justify-center items-center">
         <h2 className="text-2xl font-bold  text-[#E2D6AF]">All rights reserved</h2>
      </div>
    </div>
  );
};

export default DonationsSection;
