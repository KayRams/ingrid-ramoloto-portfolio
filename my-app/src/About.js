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
                Africa. I’m passionate about transforming concepts into elegant
                code and creating user-friendly, responsive web applications
                that feel delightful to use.
              </p>

              <span>
                <button
                  className="btn-contact"
                  href="mailto:ramolotoingrid@gmail.com"
                >
                  Contact me
                </button>
                <button className="btn-cv-download">Download CV</button>
              </span>
            </div>
            <div className="col-lg-1">
              <ul className="social-icons list-unstyled">
                <li>
                  <i className="bi bi-github"></i>
                </li>
                <li>
                  <i className="bi bi-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
