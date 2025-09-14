import React from "react";
import "./About.css";

export default function About() {
  return (
    <main>
      <section id="About" className="about-section">
        <div className="container">
          <div className="row">
            <div className="image-wrapper col-lg-5 p-3 shadow rounded-circle mt-5">
              <img
                src={require("./ingrid.ramoloto.jpg")}
                className="img-fluid main-image rounded-circle"
                alt="Profile"
              />
            </div>
            <div className="info col-lg-6">
              <h1>Ingrid Ramoloto</h1>
              <h3>Front-end Developer</h3>
              <p>
                I'm a software developer based in Johannesburg, South Africa.
                I’m passionate about transforming concepts into elegant code and
                creating user-friendly, responsive web applications that feel
                delightful to use.
              </p>
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
