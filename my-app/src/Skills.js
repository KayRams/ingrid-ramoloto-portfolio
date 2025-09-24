import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <main>
      <section id="Skills" className="skills-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">Skills</h2>
              <h4>Here are some of the technologies I've been working with:</h4>
            </div>
          </div>
          <div className="row skills-list">
            <div className="col-md-4 skill-item">
              <box-icon name="html5" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">HTML - Advanced</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon name="css3" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">CSS - Advanced</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon name="bootstrap" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">Bootstrap - Intermediate</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="javascript"
                type="logo"
                color="#6b6d6e"
              ></box-icon>
              <span className="skill-title">JavaScript - Intermediate</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon name="react" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">React - Intermediate</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon name="cog" type="solid" color="#6b6d6e"></box-icon>
              <span className="skill-title">
                API Integration - Intermediate
              </span>
            </div>{" "}
            <div className="col-md-6 skill-item">
              <box-icon name="git" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">Git - Intermediate</span>
            </div>{" "}
            <div className="col-md-6 skill-item">
              <box-icon name="github" type="logo" color="#6b6d6e"></box-icon>
              <span className="skill-title">GitHub - Intermediate</span>
            </div>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}
