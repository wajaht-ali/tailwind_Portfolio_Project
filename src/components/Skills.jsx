/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import cpp from '../assets/images/cpp.png'
import git from '../assets/images/git.png'
import JS from '../assets/images/javascript.png';
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Mongo from '../assets/images/mongo.png';
import Express from "../assets/images/express.png"
import Tailwind from '../assets/images/tailwind.png';
import bgVideo from "../assets/video/network_bg_1.mp4";

const Skills = () => {
  return (
    <div name='skills' className="h-auto md:h-screen w-full bg-[#0a192f] text-gray-300 relative">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative">
        <div className="p-4">
          <h1 className="text-4xl font-bold border-b-4 rounded-sm border-blue-500 inline pt-3">Skills</h1>
          <p className="text-lg mt-4">//These are the technologies I&apos;ve worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-rows-2 md:grid-cols-4 p-4 mx-auto h-full place-items-center">

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={cpp} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>CPP</p>
          </div>

          {/* <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={CSS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>CSS</p>
          </div> */}

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={JS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Javascript</p>
          </div>

          {/* <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={TS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Typescript</p>
          </div> */}

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={React} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>React</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Node} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Node</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Express} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Express</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Mongo} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Mongo DB</p>
          </div>

          <div className='w-[180px] h-[170px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Tailwind} alt="tailwindcss" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Tailwind CSS</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={git} alt="git" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Git</p>
          </div>

          {/* <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3 hover:scale-105 duration-200 ease-in-out'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Git} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Git</p>
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default Skills