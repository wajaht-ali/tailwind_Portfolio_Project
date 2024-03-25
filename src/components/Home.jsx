import { HiArrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"
const Hero = () => {
  return (
    <div name='home' className="Hero w-full h-screen bg-[#0a192f]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-200">Hi, I&apos;m</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Wajahat Ali</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> Full Stack Web Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">A process-oriented individual, believed in approach of prioritizing the product&apos;s development procedure instead of focusing on results and outcomes.</p>
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]">I&apos;m a process-oriented individual focusing on the development procedure of the product instead of it&apos;s outcomes and results.</p> */}
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro in blanditiis consequatur repellendus laborum debitis rem quaerat, cupiditate corporis, assumenda sit?</p> */}
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
  )
}

export default Hero