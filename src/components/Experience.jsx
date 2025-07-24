import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul className="experience-list">
        <li>
          <span className="exp-meta">
            <strong>Quality Assurance Analyst</strong><br />
            Wipro Limited, Feb 2024 - Mar 2025
          </span>
          - Created and executed test cases based on functional requirements for smoke, functional, and regression testing<br />
          - Reported and tracked bugs using JIRA, working closely with developers for quick resolution.<br />
          - Validated UI elements, form validations, and ensured cross-browser compatibility<br/>
          - Participated in Agile ceremonies and provided daily test status updates.<br/>
          - Validated end-user banking workflows by testing major features such as authentication, money transfers,
             account statements, and personal detail updates (KYC).<br/>
          - Tools : JIRA, Excel, Cucumber
        </li>
      </ul>
    </section>
  );
}

export default Experience;