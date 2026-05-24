import { useEffect, useState } from "react";
import './Loader.css';
import "../Navbar/Navbar.css";
import girlCharacter from '../../assets/images/girl.gif';

function Loader({fadeOut}) {
    const [progress, setProgress] =useState(0);

    useEffect(()=> {
        const interval= setInterval(() => {
            setProgress((prev) => {
                if(prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev+1;
            })
        },30);

        return () => clearInterval(interval);
    },[]);

    return (
        <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
            {/* LOADER BAR */}
            <div className="loader-bar-wrapper">
                <div 
                    className="loader-bar-fill"
                    style={{width: `${progress}%`}}    
                ></div>

                <img 
                    src={girlCharacter} 
                    alt="girl character" 
                    className="walking-girl"
                    style={{left: `calc(${progress}% - 35px)`}}
                />
            </div>

            {/* PERCENTAGE */}
            <p className="loader-percentage">
                {progress}%
            </p>
            
        </div>
    )
}

export default Loader;