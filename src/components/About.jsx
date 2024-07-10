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
                        <p className="text-4xl inline font-bold">Computer Science student and an aspiring software engineer.</p>
                    </div>
                    <div className="px-4 text-justify">
                        <p>Hello there, My name is Wajahat Ali, I&apos;m a fresh CS graduate, maintaining the CGPA of <code className="text-white font-semibold">3.57/4.00</code>.In addition to my academic achievements, I have a strong interest in <span className="text-white">development technologies</span> and have been actively practicing web development since the 5th semester of my bachelor's degree. For more details, please review my Work Section or visit my <a className="text-white cursor-pointer font-semibold" rel="noreferrer" target="_blank" href="https://www.github.com/wajaht-ali/">Github</a> profile.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
