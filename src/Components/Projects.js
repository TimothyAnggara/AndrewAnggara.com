import XXLChessImage from "../Images/XXLChess.png";
import ShopCart from "../Images/ShopCart.png";
import AndrewAnggara from "../Images/AndrewAnggara.png";
import ProjectsComponent from "./ProjectComponent";
import rightarrow from "../Images/arrow-right.svg";
import resume from "../Images/resume.pdf"
export default function Projects(){
    return(
    <div id="projects">
        <ProjectsComponent title="XXLChess" description="Replicated chess.com's XXLChess using Java and the Gradle Library. Deepend understanding of polymorphism, inheritance, and other object-oriented best practices as well as creating documentation using JavaDoc and JUnit for testing code." image={XXLChessImage} link="https://github.com/TimothyAnggara/XXLChess"/>
        <ProjectsComponent title="React Shopping Cart" description="Developed a shopping cart application using typescript that allows users
                    to browse and purchase items. Utilized CSS Bootstrap and react hooks to enable
                    users to add, remove, and display total price of items currently in the cart." image={ShopCart} link="https://github.com/TimothyAnggara/ShoppingCart"/>
        <ProjectsComponent title="AndrewAnggara.com" description="A website created using React and CSS with the usage of third-party React libraries such as react-scroll
                    to enhance website functionality and streamline development with the use of version control such as Git." image={AndrewAnggara} link="https://github.com/TimothyAnggara/Dollar_Cost_Average_Simulation"/>
        <a href={resume} className="project-title-container">
            <h3 className="project-title">View Full Resume</h3>
            <img src={rightarrow} alt="clickable" className="arrow"/>
        </a>
    </div>
    )
}