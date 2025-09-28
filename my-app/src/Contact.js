import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact">
        <h2>LET'S GET IN TOUCH</h2>
        <div className="email-link">
          <a href="mailto:ramolotoingrid@gmail.com">ramolotoingrid@gmail.com</a>
        </div>

        <div className="contact-social">
          <a
            href="https://www.linkedin.com/in/ingrid-ramoloto/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/KayRams" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
