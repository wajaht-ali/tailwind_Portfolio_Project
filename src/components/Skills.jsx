/* eslint-disable react/jsx-no-comment-textnodes */
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JS from '../assets/images/javascript.png';
import TS from '../assets/images/typescript.jpg'
import React from '../assets/images/react.png';
import Node from '../assets/images/node.png';
import Mongo from '../assets/images/mongo.png';
import Express from '../assets/images/express.jpg';
import Tailwind from '../assets/images/tailwind.png';
import Git from '../assets/images/git.jpg';
// import Github from '../assets/images/github.png';

const Skills = () => {
  return (
    <div className="h-auto md:h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] h-full flex flex-col mx-auto p-4">
        <div className="p-4">
          <h1 className="text-4xl font-bold border-b-4 rounded-sm border-pink-600 inline pt-3">Skills</h1>
          <p className="text-lg mt-4">//These are the technologies I&apos;ve worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-rows-2 md:grid-cols-4 p-4 mx-auto h-full place-items-center">
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>HTMl</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={CSS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>CSS</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={JS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Javascript</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={TS} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Typescript</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={React} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>React</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Node} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Node</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Express} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Express</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Mongo} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Mongo DB</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Tailwind} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Tailwind</p>
          </div>

          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={Git} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>Git</p>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Skills