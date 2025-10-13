import React from "react";
import "./About.css";
import AnimatedProfile from "./AnimatedProfile";

export default function About() {
  return (
    <main>
      <section id="About" className="about-section">
        <div className="container">
          <div className="row">
            <div className="home__image col-lg-5 mt-5">
              <AnimatedProfile />
            </div>
            <div className="info col-lg-6">
              <h1>Ingrid Ramoloto</h1>
              <h3>Front-end Developer</h3>
              <p>
                I'm a junior software developer based in Johannesburg, South
                Africa. I love turning ideas into clean, responsive web
                applications that are simple and enjoyable to use. I’m
                continuously improving my skills in React and JavaScript. I'm
                eager to grow within a collaborative team, where I can keep
                learning and contribute to real-world projects.
              </p>
              <div className="icons">
                <span>
                  <i class="bx bxl-react bx-spin"></i>
                  <i class="bx bxl-html5 bx-fade-left"></i>
                  <i class="bx bxl-bootstrap bx-burst"></i>
                  <i class="bx bxl-css3 bx-tada"></i>
                  <i class="bx bxl-figma bx-flashing"></i>
                  <i class="bx bxl-javascript bx-fade-right"></i>
                </span>
              </div>
              <span>
                <button className="btn-contact">
                  <a href="mailto:ramolotoingrid@gmail.com">Contact me</a>
                </button>
                <button className="btn-cv-download">Download CV</button>
              </span>
            </div>
            <div className="col-lg-1">
              <ul className="social-icons list-unstyled">
                <li>
                  <a
                    href="https://github.com/KayRams"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ingrid-ramoloto/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
