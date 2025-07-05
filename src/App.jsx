import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll handler
  const handleNavClick = (section) => {
    let ref = null;
    switch (section) {
      case "home": ref = homeRef; break;
      case "about": ref = aboutRef; break;
      case "experience": ref = experienceRef; break;
      case "skills": ref = skillsRef; break;
      case "projects": ref = projectsRef; break;
      case "education": ref = educationRef; break;
      case "contact": ref = contactRef; break;
      default: break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  };

  // Detect section in viewport
  useEffect(() => {
    const sectionRefs = [
      { name: "home", ref: homeRef },
      { name: "about", ref: aboutRef },
      { name: "experience", ref: experienceRef },
      { name: "skills", ref: skillsRef },
      { name: "projects", ref: projectsRef },
      { name: "education", ref: educationRef },
      { name: "contact", ref: contactRef },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        const { name, ref } = sectionRefs[i];
        if (ref.current) {
          const offsetTop = ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-root">
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      <div className="responsive-content">
        <div ref={homeRef}><Home /></div>
        {/* Uncomment the below if you want to render About section */}
        {/* <div ref={aboutRef}><About /></div> */}
        <div ref={experienceRef}><Experience /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;