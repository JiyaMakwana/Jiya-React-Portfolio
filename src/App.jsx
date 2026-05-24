import { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import Contact from './components/ContactMe/Contact';
import './App.css';

function App() {
    const [isLoading, setIsLoading]=useState(true);

    const [fadeOut, setFadeOut]=useState(false);

    useEffect(() => {
      const fadetimer=setTimeout(() => {
          setFadeOut(false);
      }, 3000);

      const removetimer=setTimeout(() => {
          setIsLoading(false);
      }, 3000);

      return () => {
        clearTimeout(fadetimer);
        clearTimeout(removetimer);
      }
        

    },[]);

    if(isLoading){
      return <Loader fadeOut={fadeOut}/>
    }

    return (
      <div className="app-content">
        <Navbar/>
        <Hero/>
        <About/>
        <Contact/>
      </div>
    )
}

export default App
