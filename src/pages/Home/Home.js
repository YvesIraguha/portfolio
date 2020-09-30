import React from "react";
import { Link } from "react-router-dom";
import profile from "../../images/full_profile.jpg";
import "./Home.css";

export default () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <img src={profile} className="profile-image" alt="My Profile" />
          </div>
          <div className="Column content">
            <h1 className="title is-1">I'm Yves Iraguha</h1>
            <h3 className="title is-4">Software Engineer - 3 years.</h3>
            <hr />
            <p id="about-me-1">
              A fullstack web developer, who enjoys making complex issues simple
              to understand for beginners. I believe that sharing, and using the
              knowledge amplifies it.
            </p>
            <p id="about-me-2">
              Being a software engineer, I always want to learn new skills and
              work on challenging projects so I can reach outside of my comfort
              zone and grow.
            </p>
            <div className="columns">
              <div className="column">
                <Link
                  to="/resume"
                  className="button is-info is-large is-fullwidth"
                >
                  Resume
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/contact"
                  className="button is-light is-large is-fullwidth"
                >
                  Contacts
                </Link>
              </div>
            </div>
            <p id="social-icons">
              <a
                href="https://github.com/YvesIraguha"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/yves_iraguha"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yves-iraguha"
                target="_blank"
                className="social-icon"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
