import "./Navbar.css";
import "../../index.css";

function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg px-0 py-4">
            <div className="container">

                {/* LOGO */}
                <a href="#home" className="navbar-logo gradient fs-4 fw-bolder text-decoration-none">
                    JM
                </a>

                {/* Hamburger for Mobile phones */}
                <button 
                    className="navbar-toggler border-0 shadow-none p-0" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon fs-5"></span>
                </button>

                {/* NAVIGATION LINKS */}
                <div 
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <div className="navbar-links" >
                        <a href="#about" >About</a>
                        <a href="#skills" >Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#education">Education</a>
                        <a href="#contact">Contact</a>
                        {/* RESUME BUTTON */}
                        <div className="navbar-resume text-center mx-4">
                            <button className="btn btn-light gradientBackground border-0 fw-semibold mainText rounded-3 ">Resume</button>
                        </div>  
                        
                    </div>
                </div>    
        </div>
    </nav>
    )
}

export default Navbar;