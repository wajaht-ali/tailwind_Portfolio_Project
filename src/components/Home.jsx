import { IoLogoGithub } from "react-icons/io";
import bgVideo from "../assets/video/coding_bg_1.mp4";
import { IoMdCloudDownload } from "react-icons/io";

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
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> <span className="text-sm">Jr.</span> MERN Stack</span> Developer.</h2>
        <p className="text-[#d4dbee] py-4 max-w-[700px] text-[18px]">A process-oriented individual, who believes in prioritizing the development procedure optimization instead of focusing on results and outcomes.</p>

        <div className="flex flex-row items-center gap-x-4">

          <a href={"https://github.com/wajaht-ali/"} target="_blank" rel="noreferrer" className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
            <p>My Work</p>
            <span className='group-hover:text-black duration-300'>
              <IoLogoGithub />
            </span>
          </a>

          <a href={"https://drive.google.com/file/d/1pA-8fh8OIWmhSG3ugCxt4yxppgXV120d/view?usp=sharing"} target="_blank" rel="noreferrer" className="text-white group w-[120px] text-center justify-evenly py-1 border-2 border-blue-500 hover:bg-blue-400 flex items-center  ease-in duration-300 origin-bottom">
            <p>Resume</p>
            <span className='group-hover:translate-y-1 group-hover:text-black duration-300'>
              <IoMdCloudDownload />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
