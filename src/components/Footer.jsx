// import { Link } from "react-scroll";
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import img from "../assets/images/portfolioLogNoBg.png";

const Footer = () => {
    return (
        <div className="h-auto w-full bg-[#0a192f] text-gray-300 md:hidden">
            <div className="max-w-[1000px] w-full h-full grid content-center mx-auto p-4">
                <div name="About-Me" className="flex flex-col justify-between items-center w-[80%] mx-auto">
                    <img src={img} alt="img" style={{ width: '60px' }} />
                    <p className="mt-3 text-justify text-md">Although I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll happy to get back to you!</p>
                </div>
                
            </div>
            <div className="flex flex-row w-full justify-between items-center p-4">
                <p className="text-md">All rights reserved &copy;</p>
                <ul className="flex flex-row w-[50%] justify-evenly">
                    <li>
                        <a href="https://linkedin.com/in/wajhat-ali/" rel="noreferrer" target="_blank"><FaLinkedin size={20} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/wajaht-ali/" rel="noreferrer" target="_blank"><FaGithub size={20} /></a>
                    </li>
                    <li>
                        <abbr title="contact.chwajahat@gmail.com">
                            <a href="mailto:contact.chwajahat@gmail.com" rel="noreferrer" target="_blank"><HiOutlineMail size={20} /></a>
                        </abbr>
                    </li>
                    <li>
                        <a href={"https://drive.google.com/file/d/1UIurJuVnXKYYWAA15jnxr4SmRX7T6o_K/view?usp=sharing"} target="_blank" rel="noreferrer"><BsFillPersonLinesFill size={20} /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer