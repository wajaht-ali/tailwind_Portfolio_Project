import { HiArrowRight } from 'react-icons/hi'
import { Link } from "react-scroll"
const Hero = () => {
  return (
    <div name='home' className="Hero w-full h-screen bg-[#0a192f]">

      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-200">Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Wajahat Ali</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I&apos;m a Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro in blanditiis consequatur repellendus laborum debitis rem quaerat, cupiditate corporis, assumenda sit?</p>
        <div>
          <button className="text-white group w-[120px] text-center justify-evenly py-1 border-2 flex items-center hover:bg-pink-500 hover:border-pink-600 hover:ease-in-out hover:duration-300 hover:origin-bottom">
            <Link to={'work'} duration={500} smooth={true}>View Work</Link>
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