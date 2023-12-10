import { Link } from "react-scroll";
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import img from "../assets/images/portfolioLogNoBg.png";
const Footer = () => {
    return (
        <div className="">
            <div name="About-Me">
                <img src={img} alt="img" style={{ width: '40px' }} />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In amet molestiae vel quasi fugiat corrupti voluptas aspernatur earum quo eius.</p>
            </div>
            <div name="Nav-items">
                <ul>
                    <li>
                        <Link to={'home'} smooth={true} duration={300}>Home</Link>
                    </li>
                    <li>
                        <Link to={'about'} smooth={true} duration={300}>About</Link>
                    </li>
                    <li>
                        <Link to={'skills'} smooth={true} duration={300}>Skills</Link>
                    </li>
                    <li>
                        <Link to={'work'} smooth={true} duration={300}>Work</Link>
                    </li>
                </ul>
            </div>
            <div name="Social-icons">
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/wajhat-ali/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/wajaht-ali/" rel="noreferrer" target="_blank"><FaGithub /></a>
                    </li>
                    <li>
                        <abbr title="contact.chwajahat@gmail.com">
                            <a href="mailto:contact.chwajahat@gmail.com" rel="noreferrer" target="_blank"><HiOutlineMail /></a>
                        </abbr>
                    </li>
                    <li>
                        <a href="" rel="noreferrer" target="_blank"><BsFillPersonLinesFill /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer