// Experience.jsx

import "./Experience.css";
import {
  faGraduationCap,
  faBriefcase,
  faAward,
  faCode
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {

  return (

    <section
      id="experience"
      className="experience-section"
    >

      <div className="container">

        {/* HEADING */}

        <div className="about-head pt-5">

          <h1 className="text-center">
            Education & Experience
          </h1>

          <p className="text-center">
             My academic journey, certifications,
            and practical development experience
          </p>

          <div className="about-line"></div>

        </div>



        {/* TIMELINE */}

        <div className="timeline-container">

          {/* ITEM 1 */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <div className="timeline-content">

              <h3>
                Bachelor of Computer Applications (BCA)
              </h3>

              <h5>
                GLS Institute of Computer Application, Ahmedabad
              </h5>

              <span>
                2022 — 2025
              </span>

              <p>
                CGPA: 8.2/10 — Strong foundation in
                computer science fundamentals,
                databases, and software engineering.
              </p>

            </div>

          </div>



          {/* ITEM 2 */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>

            <div className="timeline-content">

              <h3>
                Fellowship in Software Development with GenAI
              </h3>

              <h5>
                Crio.Do — Bengaluru (Online)
              </h5>

              <span>
                June 2025 — Present
              </span>

              <ul>

                <li>
                  Completed evaluated real-world frontend projects
                  with sprint-based workflows
                </li>

                <li>
                  Applied AI-assisted development workflows
                  for faster UI implementation
                </li>

                <li>
                  Worked with React, REST APIs,
                  Git/GitHub, and debugging practices
                </li>

              </ul>

            </div>

          </div>



          {/* ITEM 3 */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>

            <div className="timeline-content">

              <h3>
                Generative AI Mastermind
              </h3>

              <h5>
                Outskill
              </h5>

              <p>
                Practical AI workflows, prompt engineering,
                productivity tooling, and AI-assisted development.
              </p>

            </div>

          </div>



          {/* ITEM 4 */}

          <div className="timeline-item">

            <div className="timeline-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>

            <div className="timeline-content">

              <h3>
                Figma UI/UX Design Essentials
              </h3>

              <h5>
                Udemy — 2024
              </h5>

              <p>
                Learned modern UI/UX fundamentals,
                design handoff workflows,
                and frontend-friendly design systems.
              </p>

            </div>

          </div>

        </div>


      </div>

    </section>

  );

}

export default Experience;