import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {frontend, backend, genAi} from '../../data/skills-data.js';
import './Skills.css';
function Skills() {
    return (
        <section id="skills" className=" mt-5 py-5">
            <div className="container">

                <div className="about-head pt-5">
                    <h1>Skills & Technologies</h1>
                    <p >My technical toolkit</p>
                    <div className="about-line"></div>
                </div>

                {/* frontend */}
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="frontend-container skills-container">
                            <h4 className="skill-head">Frontend</h4>
                            {frontend.map((item)=> {
                                return(
                                    <div key={item.id} className="skill-content d-flex align-items-center gap-3 p-2 m-2">
                                        <div className="skill-icons d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <p className="mb-0">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* genAI */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="genAi-container skills-container">
                            <h4 className="skill-head">GenAI & Tools</h4>
                            {genAi.map((item)=> {
                                return(
                                    <div key={item.id} className="skill-content d-flex align-items-center gap-3 p-2 m-2">
                                        <div className="skill-icons d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <p className="mb-0">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* backend */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="backend-container skills-container">
                            <h4 className="skill-head">Backend & APIs</h4>
                            {backend.map((item)=> {
                                return(
                                    <div key={item.id} className="skill-content d-flex align-items-center gap-3 p-2 m-2">
                                        <div className="skill-icons d-flex align-items-center justify-content-center">
                                            <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <p className="mb-0">{item.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;