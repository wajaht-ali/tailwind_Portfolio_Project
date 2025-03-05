/* eslint-disable react/no-unescaped-entities */
// import { Link } from "react-router-dom"

const About = () => {
    return (
        <div name='about' className="h-screen w-full bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl inline font-bold border-b-4 border-blue-500">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] grid sm:grid-cols-2 gap-8 w-full">
                    <div className="sm:text-right pb-6 pl-4">
                        <p className="text-4xl inline font-bold">A software engineer with good problem-solving and communication .</p>
                    </div>
                    <div className="px-4 text-justify">
                        <p> I am A junior software engineer and Computer Science graduate with six months of relevant industry experience in developing and contributing to cutting-edge software architectures. I specialize in  <span className="text-white">Web technologies</span> and am devoted to building scalable, efficient, and innovative solutions. For more details, please review my Work Section or visit my <a className="text-white cursor-pointer font-semibold" rel="noreferrer" target="_blank" href="https://www.github.com/wajaht-ali/">Github</a> profile.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
