import About from "../Components/About"
import Experience from "../Components/Experience"
import Projects from "../Components/Projects"
import "./RightPage.css"
import resume from "../Images/resume.pdf"
export default function RightPage(){
    return(
        <div className="right-container">
            <About/>
            <br />
            <br />
            <br />
            <Projects/>
            <br />
            <Experience/>
        </div>
    )
}