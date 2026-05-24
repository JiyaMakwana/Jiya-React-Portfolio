import contactVideo from "../../assets/videos/contact-girl.webm";
import {contactCards} from "../../data/contact-data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row min-vh-100 d-flex align-items-center">
                    {/* LEFT SECTION */}
                    <div className="col-lg-6 contact-left-container d-flex align-items-center justify-content-center">

                        <div className="glow-border">
                            <div className="contact-glow-effect "></div>
                        </div>

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="contact-video"     
                        >
                            <source src={contactVideo} type="video/webm" />
                        </video>
                        
                        
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="col-lg-6 contact-right-container">

                        <div className="contact-head">
                            <h1>Get In Touch</h1>
                            <p>Let's build something amazing together</p>
                            <div className="contact-line"></div>
                        </div>

                        <div className="contact-right-container">
                                {contactCards.map((item) => {
                                    return (
                                    <div key={item.id} className="contact-card-container mt-4 p-3">
                                        <div className="contact-card d-flex gap-3 align-items-center px-2">
                                            <div className="card-icon d-flex align-items-center justify-content-center">
                                                <FontAwesomeIcon icon={item.icon} />
                                            </div>
                                            <div>
                                                <p className="card-title">{item.title}</p>
                                                <h6 className="card-info">{item.info}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                        </div>    
                    </div>
                </div>
                
            </div>

            <footer>© 2026 Jiya Makwana. Built with ❤️ and React.</footer>
        </section>
    )
}

export default Contact;