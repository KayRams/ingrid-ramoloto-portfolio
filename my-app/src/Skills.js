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
              <p className="section-subtitle">
                Here are some of the technologies I've been working with:
              </p>
            </div>
          </div>
          <div className="row skills-list">
            <div className="col-md-4 skill-item">
              <box-icon
                name="html5"
                type="logo"
                animation="tada"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">HTML</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="css3"
                type="logo"
                animation="flashing"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">CSS</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="bootstrap"
                type="logo"
                animation="fade-right"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">Bootstrap</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="javascript"
                type="logo"
                animation="burst"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">JavaScript</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="react"
                type="logo"
                animation="spin"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">React</span>
            </div>
            <div className="col-md-4 skill-item">
              <box-icon
                name="cog"
                type="solid"
                animation="tada"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">API Integration</span>
            </div>{" "}
            <div className="col-md-4 skill-item">
              <box-icon
                name="git"
                type="logo"
                animation="fade-left"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">Git</span>
            </div>{" "}
            <div className="col-md-4 skill-item">
              <box-icon
                name="github"
                type="logo"
                animation="fade-down"
                color="#c3185d"
              ></box-icon>
              <span className="skill-title">GitHub</span>
            </div>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}
