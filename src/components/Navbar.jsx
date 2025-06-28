import React from "react";
import "./Navbar.css";

function Navbar({ onNavClick, activeSection }) {
  const links = [
    { label: "Home", section: "home" },
    { label: "Experience", section: "experience" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
   
    { label: "Education", section: "education" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-sai">Sai</span>
        <span className="logo-ram"> Ram</span>
       
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.section}>
            <button
              className={activeSection === link.section ? "active" : ""}
              onClick={() => onNavClick(link.section)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;