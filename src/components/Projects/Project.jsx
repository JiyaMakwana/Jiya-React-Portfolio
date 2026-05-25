// Projects.jsx

import "./Project.css";
import { projects } from "../../data/project-data.js";

function Projects() {

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <div className="container">

        {/* HEADING */}

        <div className="about-head pt-5">

          <h1>
            Projects
          </h1>

          <p className="text-center">
            A collection of projects that showcase my skills,
            creativity, and passion for building impactful
            web experiences.
          </p>

          <div className="about-line"></div>

        </div>



        {/* PROJECTS */}

        <div className="row g-4">

          {projects.map((project) => {

            return (

              <div
                key={project.id}
                className="col-12"
              >

                <div className="project-card">

                  {/* LEFT SIDE VIDEO */}

                  <div className="project-video-container">

                    <video
                    ref={(el) => {
                        if (!el) return;

                        const container = el.closest(".project-card");

                        container.onmouseenter = () => {
                        el.play();
                        };

                        container.onmouseleave = () => {
                        el.pause();
                        el.currentTime = 0;
                        };
                    }}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="project-video"
                    >
                         <source
                            src={project.video}
                            type="video/mp4"
                        />

                        </video>



                    {/* OVERLAY */}

                    <div className="video-overlay">

                      Hover to Play

                    </div>

                  </div>



                  {/* RIGHT SIDE CONTENT */}

                  <div className="project-content">

                    {/* TOP */}

                    <div className="project-top">

                      <div className="project-number">

                        {String(project.id).padStart(2, "0")}

                      </div>

                      <div>

                        <h3 className="project-title">

                          {project.title}

                        </h3>

                        <p className="project-sub">

                          {project.subtitle}

                        </p>

                      </div>

                    </div>



                    {/* DESCRIPTION */}

                    <p className="project-text">

                      {project.description}

                    </p>



                    {/* TECH STACK */}

                    <div className="tech-stack">

                      {project.techStack.map((tech, index) => {

                        return (

                          <span
                            key={index}
                            className="tech-badge"
                          >

                            {tech}

                          </span>

                        );

                      })}

                    </div>



                    {/* FEATURES */}

                    <div className="project-features">

                      {project.features.map((feature, index) => {

                        return (

                          <div
                            key={index}
                            className="feature-item"
                          >

                            ✓ {feature}

                          </div>

                        );

                      })}

                    </div>



                    {/* BUTTONS */}

                    <div className="project-buttons">

                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="live-btn"
                      >

                        Live Demo

                      </a>



                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="github-btn"
                      >

                        GitHub

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}

export default Projects;