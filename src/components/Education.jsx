import React from "react";
import "./Education.css";

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul className="education-list">
        {/* Bachelor of Technology centered and first */}
        <li className="education-btech center-item">
          <strong>Bachelor of Technology - Computer Science and Engineering</strong><br />
          Aditya Engineering College, 2019-2023<br/>
          CGPA: 7.4/10
        </li>
        {/* Intermediate and Secondary side by side below */}
        <div className="education-row">
          <li className="education-half">
            <div style={{ width: "100%", textAlign: "center" }}>
              <strong>Intermediate - MPC</strong><br />
              Tirumala Junior College, 2017 - 2019<br />
              CGPA: 9.94/10
            </div>
          </li>
          <li className="education-half">
            <div style={{ width: "100%", textAlign: "center" }}>
              <strong>Secondary School Certificate</strong><br />
              Bhashyam High School, 2016 - 2017<br />
              CGPA: 9.8/10
            </div>
          </li>
        </div>
      </ul>
    </section>
  );
}

export default Education;