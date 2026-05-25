import "./About.css";
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aboutCards } from '../../data/about-data.js';

function About() {

    const[ isExpanded, setIsExpanded]=useState(false);

  return (
    <section id="about" className="about-section min-vh-100 mt-5">
      <div className="container">
            <div className="about-head pt-5">
                <h1>About Me</h1>
                <p >Building web experience with AI-powered efficiency</p>
                <div className="about-line"></div>
            </div>
        
        <div className="row about-content-container align-items-center justify-content-between">
          {/* LEFT SECTION */}
          <div className="col-lg-6 about-left-container mb-4 mb-lg-0">
            <p>
              I’m a passionate Frontend Developer who enjoys building modern,
              responsive, and user-friendly web experiences. I love creating
              clean UI designs, experimenting with creative layouts, and turning
              ideas into interactive digital products using HTML, CSS,
              JavaScript, Bootstrap, and React. 

              <span className={`mobile-hide-text ${isExpanded ? 'show-text':''}`}>
                <br /> <br />
                Currently, I’m pursuing a
                Fellowship in Software Development with GenAI at Crio.Do,
                Bengaluru (Online), where I’m gaining hands-on experience in
                real-world development, agile workflows, and AI-augmented
                engineering. 
                <br /><br />
                I’m continuously learning and growing to become a
                developer who builds impactful and meaningful products.
              </span>
              <button
                    className="read-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded? "Read Less" : "Read More"}
                </button>
            </p>

            
          </div>

          {/* RIGHT SECTION */}
          <div className="col-lg-6 about-right-container">
            <div className="row g-4">
                {aboutCards.map((item) => {
                    return (
                        <div key={item.id} className="col-12 col-md-6">
                            <div className="about-card d-flex gap-3 align-items-center p-3">
                                <div className="card-icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <div>
                                    <p className="about-card-title mb-0">{item.title}</p>
                                    <h6 className="about-card-info mb-0">{item.info}</h6>
                                </div>
                            </div>
                        </div>
                 )
                 })}
            </div>

            <div className="about-stats-bar mt-5">
                <div className="row  justify-content-center align-items-center stats-row p-3">
                    {/* Stat 1 */}
                    <div className="stat-item col-6 col-lg-3 border-lg-end custom-border" >
                    <div className="stats-text ">
                        <h3>5+</h3>
                        <p>Projects Completed</p>
                    </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="stat-item col-6 col-lg-3 border-lg-end custom-border">
                    <div className="stats-text">
                        <h3>100+</h3>
                        <p>Hours of Coding</p>
                    </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="stat-item col-6 col-lg-3 border-lg-end custom-border">
                    <div className="stats-text">
                        <h3>3+</h3>
                        <p>Technologies</p>
                    </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="stat-item col-6 col-lg-3">
                    <div className="stats-text">
                        <h3>Always</h3>
                        <p>Learning</p>
                    </div>
                    </div>
                </div>
                 
            </div>
                
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
