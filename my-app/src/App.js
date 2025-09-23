import React from "react";
import About from "./About";
import "./App.css";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3 pb-2">
          <div className="container-fluid">
            <a className="navbar-brand ms-5" href="#Home">
              Ingrid.R
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav me-5">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link active"
                    aria-current="page"
                    href="#Home"
                  >
                    <i className="bi bi-house-door"></i> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    <i className="bi bi-person"></i> About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Skills">
                    <i className="bi bi-journal-code"></i> Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#My Portfolio">
                    <i className="bi bi-journal-album"></i> Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
