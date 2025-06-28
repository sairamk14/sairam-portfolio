import React from "react";
import "./Contact.css";

// SVG icons as React components
const PhoneIcon = () => (
  <svg height="22" width="22" viewBox="0 0 24 24" fill="#64ffda" style={{marginRight: "12px"}}>
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.24 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1H7.6a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.24.95l-2.2 2.2z"/>
  </svg>
);
const GmailIcon = () => (
  <svg height="22" width="22" viewBox="0 0 24 24" fill="#64ffda" style={{marginRight: "12px"}}>
    <path d="M12 13.065L2 6.52V18a2 2 0 002 2h16a2 2 0 002-2V6.52l-10 6.545zm10-9.065h-2.18l-7.82 5.12-7.82-5.12H2A2 2 0 000 5.998v.03l12 8.055 12-8.055v-.03A2 2 0 0022 4z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg height="22" width="22" viewBox="0 0 24 24" fill="#64ffda" style={{marginRight: "12px"}}>
    <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 8.98h3.96V21H3V8.98zM9.92 8.98H14v1.62h.06c.57-.96 1.97-1.98 4.06-1.98 4.35 0 5.16 2.86 5.16 6.58V21h-3.96v-6.15c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V21H9.92V8.98z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg height="22" width="22" viewBox="0 0 24 24" fill="#64ffda" style={{marginRight: "12px"}}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.877.12 3.18.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.37.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-list">
        <div className="contact-item">
          <PhoneIcon />
          <a href="tel:+919014787757" className="contact-link" aria-label="Call Phone">
            +91 9014787757
          </a>
        </div>
        <div className="contact-item">
          <GmailIcon />
          <a
            href="mailto:sairamk7757@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
          >
            sairamk7757@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <LinkedInIcon />
          <a
            href="https://linkedin.com/in/sairamk14"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/sairamk14
          </a>
        </div>
        <div className="contact-item">
          <GitHubIcon />
          <a
            href="https://github.com/sairamk14"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/sairamk14
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;