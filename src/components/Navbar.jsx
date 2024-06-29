import { useState } from 'react';
import img from '../assets/images/portfolioLogNoBg.png';
import { HiOutlineMail } from 'react-icons/hi';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNavIcon = () => {
        setNav(!nav);
    }

    const handleClick = () => setNav(!nav);

    document.addEventListener('scroll', () => {
        let header = document.getElementById('navbar');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
        }
    });

    return (
        <div id='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-200 z-10'>
            <div>
                <Link to={'home'} duration={300} smooth={true} className="cursor-pointer">
                    <img src={img} alt="img" style={{ width: '40px' }} />
                </Link>
            </div>
            <div className='hidden md:block blockNav'>
                <ul className='flex justify-between items-center w-full'>
                    <li className='py-2 px-4 hover:text-blue-500 cursor-pointer'>
                        <Link to='home' smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='py-2 px-4 hover:text-blue-500 cursor-pointer'>
                        <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-blue-500 cursor-pointer'>
                        <Link to='skills' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-blue-500 cursor-pointer'>
                        <Link to='work' smooth={true} duration={500}>Work</Link>
                    </li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-blue-500 cursor-pointer'>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Hambuger */}
            <div onClick={handleNavIcon} className='block md:hidden z-10 hover:cursor-pointer mx-4 text-gray-100' id='icons'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'}>
                <li className='py-6 text-3xl cursor-pointer'>
                    {/* <Link to='contact' smooth={true} duration={500}>Home</Link> */}
                    <Link onClick={handleClick} to='home' smooth={true} duration={500} >Home</Link>
                </li>
                <li className='py-6 text-3xl cursor-pointer'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-3xl cursor-pointer'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-3xl cursor-pointer'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
                </li>
                <li className='py-6 text-3xl cursor-pointer'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
                <ul className='flex flex-col'>
                    <li className="bg-blue-500 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300"><a href="https://linkedin.com/in/wajhat-ali/" target='_blank' rel='noreferrer'>Linkedin</a><FaLinkedin size={20} /></li>

                    <li className="bg-gray-800 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300 hover:cursor-pointer"><a href="https://www.github.com/wajaht-ali/" target='_blank' rel='noreferrer'>Github</a> <FaGithub size={20} /></li>

                    <li className="bg-[#00df9a] p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300"><a href='mailto:contact.chwajahat@gmail.com'><abbr title="contact.chwajahat@gmail.com">GMail</abbr></a> <HiOutlineMail size={20} /></li>

                    <li className="bg-gray-500 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300 cursor-pointer"><a href={"https://drive.google.com/file/d/1UIurJuVnXKYYWAA15jnxr4SmRX7T6o_K/view?usp=sharing"} target="_blank" rel="noreferrer">Resume</a> <BsFillPersonLinesFill size={20} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;