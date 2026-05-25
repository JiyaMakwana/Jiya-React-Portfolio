import { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Loader from './components/Loader/Loader';
import About from './components/About/About';
import Contact from './components/ContactMe/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';
import Experience from './components/Expercience/Experience';
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
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    )
}

export default App
