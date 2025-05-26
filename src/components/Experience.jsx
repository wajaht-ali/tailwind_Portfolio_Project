/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import Timeline from './Timeline';

const Experience = () => {
    return (
        <div name='experience' className="h-screen w-full bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl inline font-bold border-b-4 border-blue-500">Experience</p>
                    </div>
                </div>
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <Timeline />
                </div>
            </div>
        </div>
    )
}

export default Experience;
