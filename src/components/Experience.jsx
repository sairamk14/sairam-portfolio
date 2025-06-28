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
          - Analyzed requirements and created test cases accordingly<br />
          - Executed manual tests to identify bugs and ensure functionality<br />
          - Reported defects using tools like JIRA and collaborated with developers for resolution<br/>
          - Performed smoke, regression, and sanity testing<br/>
          - Documented test results and supported QA process improvements
        </li>
      </ul>
    </section>
  );
}

export default Experience;