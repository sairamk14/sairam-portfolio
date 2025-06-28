import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="projects-list">
        <li>
          <strong>WedLock (Matrimony Web Application):</strong><br />
          - Developed a full-stack web application using Angular (frontend), Spring Boot with Java (backend), and MySQL (database).<br />
          - Implemented features such as user profile management, gender-based matching algorithm, real-time chat using WebSocket, and compatibility search.<br />
          - Tools: Eclipse, VS Code, MySQL Command Line, Postman.<br />
          
        </li>
        <li>
          <strong>Secure Double Encryption Chatting Application:</strong><br />
          - Developed a secure messaging application using the AES (Advanced Encryption Standard) algorithm with secret key generation to protect user login and message data.<br />
          - Implemented features for individual and group chats, email/password authentication, and multi-step login with secret key verification.<br />
          - Tech Stack: HTML, CSS, JavaScript, Bootstrap (frontend); Java + Spring Boot (backend); MySQL (database).<br />
          - Tools Used: Eclipse, Visual Studio Code, MySQL Workbench.
        </li>
       
        
      </ul>
    </section>
  );
}

export default Projects;