//eslint-disable no-unused-vars 
// import { HiArrowRight } from 'react-icons/hi'
// import { Link } from "react-scroll";
// import bgVideo from "../assets/video/coding_bg_1.mp4";

// const Hero = () => {
//   return (
//     <div name='home' className="Hero w-full h-screen bg-[#0a192f]">

//       {/* Container */}
//       <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
//         <p className="text-blue-200">Hi, I&apos;m</p>
//         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Wajahat Ali</h1>
//         <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> Full Stack Web Developer.</h2>
//         <p className="text-[#8892b0] py-4 max-w-[700px]">A process-oriented individual, believed in approach of prioritizing the product&apos;s development procedure instead of focusing on results and outcomes.</p>

//         <div>
//           <button className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
//             <Link to={'work'} duration={500} smooth={true}>My Work</Link>
//             <span className='group-hover:rotate-90 group-hover:text-black duration-300'>
//               <HiArrowRight />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Hero
import { HiArrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import bgVideo from "../assets/video/coding_bg_1.mp4";

const Hero = () => {
  return (
    <div name='home' className="Hero w-full h-screen bg-[#0a192f] relative">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative">
        <p className="text-blue-200">Hi, I&apos;m</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] line'>Wajahat Ali</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">MERN Stack</span> Developer.</h2>
        <p className="text-[#d4dbee] py-4 max-w-[700px] text-[18px]">A process-oriented individual, believed in approach of prioritizing the product&apos;s development procedure instead of focusing on results and outcomes.</p>

        <div>
          <button className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
            <Link to={'work'} duration={500} smooth={true}>My Work</Link>
            <span className='group-hover:rotate-90 group-hover:text-black duration-300'>
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;