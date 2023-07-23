import "./LeftPage.css"
import github from "../Images/github-142-svgrepo-com.svg"
import LinkedIn from "../Images/linkedin-svgrepo-com.svg"
import Instagram from "../Images/instagram-svgrepo-com.svg"
import {Link} from 'react-scroll';
import { useState, useEffect } from "react";
export default function LeftPage(){
    const [activeSection, setActiveSection] = useState('about');
    const handleScroll = () => {
        const aboutOffsetTop = document.getElementById("about").offsetTop;
        const projectsOffsetTop = document.getElementById("projects").offsetTop-60;
        const experienceOffsetTop = document.getElementById("experience").offsetTop-200;

        if (window.scrollY >= experienceOffsetTop) {
            setActiveSection("experience");
        } else if (window.scrollY >= projectsOffsetTop) {
            setActiveSection("projects");
        } else  {
            setActiveSection("about");
        }
        
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <div className="left-container">
            <div className="title-container">
                <h1 className="title-name">Andrew Anggara</h1>
                <h2 className="title-description">Computer Science student at University of Sydney</h2>
                <p className="title-about">Passionate about creating digital products and improving user experience for the web</p>
            </div>
            <div className="website-path">
                <nav>
                    <ul>
                        <li className="route-list">
                            <Link className={activeSection ==='about' ? "active" : "route-link"} to="top" smooth={true} duration={500}>
                                <div className={activeSection ==='about' ? "horizontal-line-active" : "horizontal-line"}/>
                                ABOUT
                            </Link>
                        </li>
                        <li className="route-list">
                            <Link className={activeSection ==='projects' ? "active" : "route-link"} to="projects" smooth={true} offset={-60} duration={500}>
                                <div className={activeSection ==='projects' ? "horizontal-line-active" : "horizontal-line"}/>
                                PROJECTS
                            </Link>
                        </li>
                        <li className="route-list">
                            <Link className={activeSection ==='experience' ? "active" : "route-link"} to="experience" smooth={true} offset={-55} duration={500}>
                                <div className={activeSection ==='experience' ? "horizontal-line-active" : "horizontal-line"}/>
                                EXPERIENCE
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="icons-container">
                <a href="https://github.com/TimothyAnggara">
                    <img className="icon-shape" src={github} alt="github svg" />
                </a>
                <a href="https://www.linkedin.com/in/andrew-anggara-889b92214/">
                    <img className="icon-shape" src={LinkedIn} alt="linkedIn svg" />
                </a>
                <a href="https://instagram.com/andrew.anggara_">
                    <img className="icon-shape" src={Instagram} alt="Instagram svg" />
                </a>
            </div>

            

        </div>
    )
}