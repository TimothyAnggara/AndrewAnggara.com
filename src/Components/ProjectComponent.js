import { useState } from "react";
import rightup from "../Images/arrow-right-up.svg"

export default function ProjectsComponent({title, description, image, link}){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div 
            className={`project-container ${isHovered ? 'blur' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-container">
                <img className="project-image" src={image} alt="project image"/>
            </div>
            <div className="project-detail">
                <a href={link} className="project-title-container">
                    <h3 className="project-title">{title}</h3>
                    <img src={rightup} alt="clickable" className="arrow"/>
                </a>
                <p className="about-description">
                    {description}
                </p>
            </div>
        </div>
    )
}