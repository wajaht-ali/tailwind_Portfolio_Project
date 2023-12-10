/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import realEstate from '../assets/projects/realestate.jpg';
import workImg from '../assets/projects/workImg.jpeg';

const Work = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 pt-[2rem]'>
      <div className='max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4'>
        <div className='p-4'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-500 inline rounded'>Work</h1>
          <p className='mt-4 text-lg'>//These are the projects, I&apos;ve build: </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item 1*/}
          <div style={{ backgroundImage: `url(${workImg})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div style={{ backgroundImage: `url(${realEstate})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div style={{ backgroundImage: `url(${workImg})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div style={{ backgroundImage: `url(${realEstate})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div style={{ backgroundImage: `url(${workImg})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          <div style={{ backgroundImage: `url(${realEstate})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work