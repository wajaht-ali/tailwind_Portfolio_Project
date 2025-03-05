/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import realEstate from '../assets/projects/realestate.jpg';
import ecommerce from "../assets/projects/ecommerce.png";
import cards from "../assets/projects/cards.png";
import blog from "../assets/projects/blog.png";
import portfolio from "../assets/projects/portfolio.png";
import newsgrid from "../assets/projects/newsgrid.png";

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
          <div style={{ backgroundImage: `url(${ecommerce})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div text-center">

            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ecommece Web App
              </span>
              <p className='text-center'>Full stack Ecommerce web application, demonstrating backend and UI development skills.</p>
              <div className='pt-8 text-center'>
                <a href="https://github.com/wajaht-ali/Ecommerce-app" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div style={{ backgroundImage: `url(${blog})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto text-center rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blogging Web App
              </span>
              <p className='text-center'>Full stack web application, allows user to write, share and read blogs in a mutual space.</p>
              <div className='pt-8 text-center'>
                <a href="https://github.com/wajaht-ali/mern-blog-app" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item 3 */}
          <div style={{ backgroundImage: `url(${cards})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center text-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Flashcards Web App
              </span>
              <p className='text-center'>Full stack Ecommerce web application, having features to create & share flashcards with Gemini text generation ability, with public/Private visibility.</p>
              <div className='pt-8 text-center'>
                <a href="https://github.com/wajaht-ali/Flashcards-app" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item 4 */}
          <div style={{ backgroundImage: `url(${portfolio})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio Project
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/wajaht-ali/tailwind_Portfolio_Project" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div style={{ backgroundImage: `url(${newsgrid})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Newsgrid Website
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/wajaht-ali/Newsgird.com" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Code</button>
                </a>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Demo</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* Grid Item 6 */}
          {/* <div style={{ backgroundImage: `url(${realEstate})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto rounded-md content-div">
            {/* Hover effect */}
          {/* <div className='opacity-0 group-hover:opacity-100'>
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
              </div> */}
          {/* </div>
          </div>  */}
        </div>
      </div>
    </div>
  )
}

export default Work