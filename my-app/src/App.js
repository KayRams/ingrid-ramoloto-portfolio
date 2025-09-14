import React from "react";
import About from "./About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand ms-5" href="#Home">
              Ingrid.R
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul class="navbar-nav me-5">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#Home">
                    <i class="bi bi-house-door"></i>
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#About">
                    <i class="bi bi-person"></i>
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Skills">
                    <i class="bi bi-journal-code"></i>
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Portfolio">
                    <i class="bi bi-journal-album"></i>
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="mailto:ramolotoingrid@gmail.com">
                    <i class="bi bi-envelope"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <About />
    </div>
  );
}

export default App;
