/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import realEstate from '../assets/projects/realestate.jpg';
import workImg from '../assets/projects/workImg.jpeg';

const Work = () => {
  return (
    <div className='h-screen w-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] w-full h-full flex flex-col border-2 justify-center mx-auto p-4'>
        <div className='p-4'>
          <h1 className='text-4xl font-bold border-b-4 border-pink-600 inline rounded'>Work</h1>
          <p className='mt-4 text-lg'>//These are the projects, I&apos;ve build: </p>
        </div>
        <div style={{ backgroundImage: `url(${workImg})`}} className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className=''>
            <div>
              <span>

              </span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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