import React from 'react';
import Image from 'next/image';
const AboutSection = () => {
  return (
    <div className="bg-white w-screen flex justify-center items-center">
      <div className="max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center mb-20 mt-20 text-[#E2D6AF]">About</h2>
        <div className="flex flex-col md:flex-row items-center mt-5 md:mt-0 md:-mx-4">
          <div className="w-full md:w-1/2 md:px-4 flex justify-center">
          <Image className="w-full md:w-full lg:w-5/6 xl:w-11/12 rounded-lg shadow-lg" src="./images/sites/9.webp" alt="About" width={350}
                    height={350} />

          </div>
          <div className="w-full md:w-1/2 mt-5 md:mt-0 md:px-4">
            <p className="text-lg text-gray-700 px-5">
            The queer history trail project was made possible by a grant fromThe Maine Humanities Council and funding from the University of Southern Maine. It was created by University of Southern Maine Professor Wendy Chapkis (Sociology and Women & Gender Studies) and USM Librarians Mary F. Holt (Digital Projects Manager) and Megan MacGregor (Instruction and Outreach), with the assistance of student researchers including Ty Bolduc, Lael Daigle, Oliver Eaton, Tye Lynch, and Gabriel Paulin, and as well as members of the 2016-2024 “Qualitative
            Research Methods/Applied LGBTQ History” course at USM. Further support was provided by independent researcher Elizabeth Lowell and Portland Public Library Portland Room librarian and archivist Abraham Schechter. We are grateful for assistance from Susie R. Bock, Jill Piekut Roy, and Jo Ann Bianchi of the University of Southern Maine Libraries and from the University of Maine VEMI Lab, especially Ersilda Cako, RJ Perry, Grant Beals, and Ashley Forbes. For audio assistance, we are grateful to Jessica Lockhart (Program Director, WMPG FM). Photos used in this project include work by photographers Annette Dragon, W. Jo Moser, Robert Diamante, and Steven Bridges. 
            Much of the interview material included in these narratives comes from the Querying the Past: Maine LGBTQ Oral History Project <a href="https://digitalcommons.usm.maine.edu/querying_ohproject/ " style={{ textDecoration: 'underline' }}>https://digitalcommons.usm.maine.edu/querying_ohproject/ </a> and has been edited and condensed for clarity and length.<br/><br/>
            We are still actively collecting our history. If you have additions or corrections to the history trail, please email them to  <a href="mailto:steppingoutportland@gmail.com " style={{ textDecoration: 'underline' }}>steppingoutportland@gmail.com</a><br/><br/>
            If you have material you would like to donate to the LGBTQ+ Collection, please contact Susie R. Bock at the University of Southern Maine Special Collections <a href="mailto:usm.specialcollections@maine.edu" style={{ textDecoration: 'underline' }}>usm.specialcollections@maine.edu</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          {/* <button className='bg-[#1C5C2D] rounded-full px-9 py-3 font-serif font-semibold mt-6 text-[#E2D6AF] hover:bg-slate-200'>More</button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
