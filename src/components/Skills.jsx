import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        <li>
          <strong>Programming Languages</strong>
          Java, C, Python
        </li>
        <li>
          <strong>Database Technology</strong>
          MySQL
        </li>
        <li>
          <strong>Web Technologies</strong>
          HTML, CSS, JavaScript
        </li>
        <li>
          <strong>Frameworks</strong>
          Spring Boot, React JS, Angular
        </li>
        <li>
          <strong>Tools</strong>
          Eclipse, Visual Studio Code, MySQL Command Line, Postman, GitHub
        </li>
      </ul>
    </section>
  );
}

export default Skills;