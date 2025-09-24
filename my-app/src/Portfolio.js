import React from "react";
import "./Portfolio.css";

import dictionary from "./assets/dictionary.png";
import reactWeatherApp from "./assets/react-weather-app.png";
import aiRecipeGenerator from "./assets/ai-recipe-generator.png";
import vanillaJavascriptWeatherApp from "./assets/vanilla-javascript-weather-app.png";
import travelWebsite from "./assets/travel-website.png";
import htmlCssLandingPage from "./assets/html-css-landing-page.png";

export default function Portfolio() {
  return (
    <section id="My Portfolio" className="portfolio-section">
      <div className="portfolio">
        <h2>My Portfolio</h2>
        <h5>Here are some projects I've been working on:</h5>
        <div
          id="carouselExampleDarkAutoplaying"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <a
                href="https://reactdictionaryappjc.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={dictionary}
                  class="d-block w-100"
                  alt="dictionary app"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with React</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://reactdictionaryappjc.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <a
                href="https://react-weather-app19.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={reactWeatherApp}
                  class="d-block w-100"
                  alt="react weather app"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with React</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://react-weather-app19.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <a
                href="https://recipe-generator-ai-0903.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={aiRecipeGenerator}
                  class="d-block w-100"
                  alt="landing page"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with Html, Css and Javascript</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://recipe-generator-ai-0903.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <a
                href="https://rain-354d97.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={vanillaJavascriptWeatherApp}
                  class="d-block w-100"
                  alt="vanilla javascript weather app"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with Html, Css and Vanilla Javascript</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://rain-354d97.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <a
                href="https://inquisitive-sawine-bc78b5.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={travelWebsite}
                  class="d-block w-100"
                  alt="landing page"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with Html, Css and Bootstrap</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://inquisitive-sawine-bc78b5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
            <div class="carousel-item">
              <a
                href="https://mountainbikingtrails.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={htmlCssLandingPage}
                  class="d-block w-100"
                  alt="landing page"
                />
              </a>
              <div class="carousel-caption d-none d-md-block">
                <h6>Built with Html and Css</h6>
                <button className="btn btn-dark">
                  <a
                    href="https://mountainbikingtrails.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Load Project
                  </a>
                </button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDarkAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDarkAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
