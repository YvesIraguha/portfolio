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
            <h3 className="title is-4">Software Engineer - 4 years.</h3>
            <hr />
            <p id="about-me-1">
              I am a Software Engineer with 4+ years of professional experience
              in developing products that impact everyday people's lives. With a
              strong passion for developing technologies to transform daily
              lives, I have worked on a wide range of products including mobile
              applications, web applications, and back-end microservices. My
              strength lies in React, Graphql, and Nodejs, with a strong
              interest in developing cloud-native applications using serverless
              technologies.
            </p>
            <p id="about-me-2">
              Through working in different diverse teams with senior engineers,
              I was able to hone my teamwork, communication, and collaboration
              skills. I am always eager to learn new things, try new
              technologies, and explore how we can use technology to improve
              people's lives. In my free time, I enjoy helping newbies
              understand technology concepts, and exploring different ideas
              through reading books.
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
