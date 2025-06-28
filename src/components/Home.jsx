import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1>Hi, I'm Sai Ram </h1>
      <h2 className="home-h2">Full Stack Developer</h2>
      <p className="home-desc">
        Aspiring Full Stack Developer with hands-on experience in Java, MySQL, Spring Boot, and Angular. Eager to build
        scalable web applications in a collaborative team environment while continuously enhancing technical expertise
        and growing as a developer.
      </p>
      <div className="home-btn-group">
        <a href="#contact" className="home-btn">Let's Connect</a>
        <a 
          href="/SaiRamK_Resume.pdf" 
          className="home-btn resume-btn" 
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;