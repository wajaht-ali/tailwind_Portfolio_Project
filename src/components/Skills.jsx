import HTML from '../assets/images/html5.jpg';
import CSS from '../assets/images/css3.jpg';
import JS from '../assets/images/javascript.jpg';
import TS from '../assets/images/typescript.jpg';
import REACT from '../assets/images/reactjs.jpg';
import TW from '../assets/images/tailwindcss.jpg';
const Skills = () => {
  return (
    <div className="h-auto md:h-screen w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] h-full flex flex-col mx-auto">
        <div className="p-4">
          <h1 className="text-4xl font-bold border-b-4 rounded-sm border-pink-600 inline pt-3">Skills</h1>
          <p className="text-lg mt-4">These are the technologies I&apos;ve worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-rows-2 md:grid-cols-4 p-4 mx-auto h-full place-items-center">
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          <div className='w-[180px] h-[150px] rounded shadow-md shadow-[#040c16] p-2 m-3'>
            <img className='rounded mx-auto w-[80%] h-[80%]' src={HTML} alt="HTML" />
            <p className='text-lg uppercase text-center my-2 font-bold'>html</p>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Skills