/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll"
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
                        <p className="text-4xl inline font-bold">Computer Science student and an aspiring software enngineer.</p>
                    </div>
                    <div className="px-4 text-justify">
                        <p>Hello there, My name is Wajahat Ali, I&apos;m a final year CS student at the University of Haripur, maintaing <code className="text-white font-semibold">3.57/4</code> CGPA.In addition to my academic achievements, I have strong interest in <span className="text-white">development technologies</span> and have been actively practicing web development since the 5th semester of my bachelor's degree. For more details, please review my <Link className="text-white cursor-pointer font-semibold" to='work' smooth={true} duration={500}>Work Section</Link>. or visit my <Link className="text-white cursor-pointer font-semibold" target="_blank" to="https://www.github.com/wajaht-ali/">Github</Link> profile.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About