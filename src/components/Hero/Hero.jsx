import './Hero.css';
import { TypeAnimation } from 'react-type-animation';
import heroVideo from '../../assets/videos/avatar.mp4'
function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="container">

                <div className="row align-items-center min-vh-100">
                    {/* Left Side */}
                    <div className="col-lg-8 hero-content">

                        <p className="hero-greet">
                            WELCOME TO MY PORTFOLIO
                        </p>

                        <h1 className="hero-title">
                            Hi, I'm <span className="gradient">Jiya <br /> Makwana</span>
                        </h1>

                        {/* Typing Animation */}
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                1000,

                                'UI/UX Enthusiast',
                                1000,

                                'GenAI-Augmented Developer',
                                1000,

                                'Aspiring Full Stack Developer',
                                1000,
                            ]}

                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="hero-typing"
                        />

                        <div className="hero-buttons d-flex gap-4 mt-4">
                            <a href="#projects">
                                <button className="btn gradientBackground btn-project border-0">
                                    View Projects
                                </button>
                            </a>

                            <a href="#contact">
                                <button className="btn btn-outline-secondary btn-contact">
                                    Contact Me
                                </button>
                            </a>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="col-lg-4 hero-video-container">
                            <div className="hero-video-border">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="hero-video"
                                >
                                    <source src={heroVideo} type="video/mp4" />
                                </video>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero;