import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list-wrapper">
        <ul className="skills-list">
          <li>
            <strong>Programming Languages</strong>
            <span>Java, C, Python</span>
          </li>
          <li>
            <strong>Database Technology</strong>
            <span>MySQL</span>
          </li>
          <li>
            <strong>Web Technologies</strong>
            <span>HTML, CSS, JavaScript</span>
          </li>
          <li>
            <strong>Frameworks</strong>
            <span>Spring Boot, React JS, Angular</span>
          </li>
          <li>
            <strong>Tools</strong>
            <span>Eclipse, Visual Studio Code, MySQL Command Line, Postman, GitHub</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;