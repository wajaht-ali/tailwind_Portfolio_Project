import { useState } from 'react';
import img from '../assets/images/logo1.png';
import { HiOutlineMail } from 'react-icons/hi';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import '../styles/Navbar.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNavIcon = () => {
        setNav(!nav);
    }

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
        <div id='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={img} alt="img" style={{ width: '40px' }} />
            </div>
            <div className='hidden md:block blockNav'>
                <ul className='flex justify-between items-center w-full'>
                    <li className='py-2 px-4 hover:text-white'>Home</li>
                    <li className='py-2 px-4 hover:text-white'>About</li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-white'>Experience</li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-white'>Work</li>
                    <li className='py-2 px-4 hover:bg-[#0fd9a] hover:text-white'>Contact</li>
                </ul>
            </div>

            {/* Hambuger */}
            <div onClick={handleNavIcon} className='block md:hidden z-10 hover:cursor-pointer' id='icons'>
                {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'}>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Skills</li>
                <li className='py-6 text-3xl'>Work</li>
                <li className='py-6 text-3xl'>Contact</li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white -z-10'>
                <ul className='flex flex-col'>
                    <li className="bg-blue-500 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300"><a href="https:www.linkedin.com">Linkedin</a><FaLinkedin size={20} /></li>

                    <li className="bg-gray-800 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300 hover:cursor-pointer"><a href="https:www.github.com" target='_blank' rel='noreferrer'>Github</a> <FaGithub size={20} /></li>

                    <li className="bg-[#00df9a] p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300"><a href='mailto:contact.chwajahat@gmail.com'>GMail</a> <HiOutlineMail size={20} /></li>

                    <li className="bg-gray-500 p-3 w-[120px] flex flex-row justify-between items-center ml-[-75px] hover:ml-0 ease-in-out duration-300 cursor-pointer"><a href="https:www.Linkedin.com">Resume</a> <BsFillPersonLinesFill size={20} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;