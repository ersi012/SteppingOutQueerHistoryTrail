// import React, { useState, useRef, useEffect } from "react";

// const sound = {
//   title: "First Parish Church",
//   audioUrl: "/FirstParishChurch.mp3",
// };

// const MonumentSquare = () => {
//   const [play, setPlay] = useState(false);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     // This effect will only run on the client-side
//   }, []);

//   const toggleAudio = () => {
//     if (play) {
//       audioRef.current?.pause();
//       setPlay(false);
//     } else {
//       void audioRef.current?.play();
//       setPlay(true);
//     }
//   };

//   return (
//     <>
//       <main className="flex min-h-screen items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl mb-4">{sound.title}</h1>
//           <button onClick={toggleAudio} className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             {play ? "Pause Audio" : "Play Audio"}
//           </button>
//         </div>
//       </main>
//       <audio ref={audioRef} loop src={sound.audioUrl} />
//     </>
//   );
// };

// export default MonumentSquare;
