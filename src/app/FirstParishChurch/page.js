import Image from 'next/image';

const FirstParishChurch = () => {
  return (
    <div className="relative h-screen overflow-y-auto bg-white">
      <div className="container mx-auto max-w-2xl py-6">
        <div className="relative max-w-full overflow-hidden">
          <Image
            src="/images/sites/FirstParish1.jpg"
            alt="First Parish Church"
            layout="responsive"
            width={1920}
            height={600}
            objectFit="cover"
            objectPosition="top"
            className="w-full"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white pb-10">
            <h2 className="text-6xl font-bold mb-8 text-black">First Parish Church</h2>
            <p className="text-lg text-black">This is your homepage content...</p>
          </div>
        </div>
        
        {/* Additional website information */}
        <div className="py-6">
          <p className="text-lg text-gray-800">
            Additional website information goes here... You can put as much content as you need, and this section will become scrollable if the content exceeds the height of the screen.
            The First Parish Church in Portland was established in 1674. Its current building at 425 Congress Street dates to 1826 making it the oldest church structure in the city.

            Unitarian Universalist churches like First Parish have a long tradition of preaching love, community, and compassion including for LGBTQ+ people. The Unitarian Universalist Church was one of the first religious groups in the US to formally support the rights of homosexuals. In 1970, the Church’s international General Assembly passed a resolution opposing “intolerance against homosexuals and bisexuals.” 
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstParishChurch;











// import { useState } from 'react';
// import Image from 'next/image';
// import { useClient } from 'next/client';

// const FirstParishChurch = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlay = () => {
//     const audio = document.getElementById('church-audio');
//     if (audio.paused) {
//       audio.play();
//       setIsPlaying(true);
//     } else {
//       audio.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div className="relative h-screen overflow-y-auto bg-white">
//       <div className="container mx-auto max-w-2xl py-6">
//         <div className="relative max-w-full overflow-hidden">
//           <Image
//             src="/images/sites/FirstParish1.jpg"
//             alt="First Parish Church"
//             layout="responsive"
//             width={1920}
//             height={600}
//             objectFit="cover"
//             objectPosition="top"
//             className="w-full"
//           />
//           <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white pb-10">
//             <h2 className="text-6xl font-bold mb-8 text-black">First Parish Church</h2>
//             <p className="text-lg text-black">This is your homepage content...</p>
//           </div>
//         </div>
        
//         {/* Additional website information */}
//         <div className="py-6">
//           <button onClick={togglePlay} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             {isPlaying ? 'Pause Audio' : 'Play Audio'}
//           </button>
//           <audio id="church-audio" src="/FirstParishChurch.mp3" />
//           <p className="text-lg text-gray-800">
//             Additional website information goes here... You can put as much content as you need, and this section will become scrollable if the content exceeds the height of the screen.
//             The First Parish Church in Portland was established in 1674. Its current building at 425 Congress Street dates to 1826 making it the oldest church structure in the city.
            
//             Unitarian Universalist churches like First Parish have a long tradition of preaching love, community, and compassion including for LGBTQ+ people. The Unitarian Universalist Church was one of the first religious groups in the US to formally support the rights of homosexuals. In 1970, the Church’s international General Assembly passed a resolution opposing “intolerance against homosexuals and bisexuals.” 
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default useClient(FirstParishChurch);
