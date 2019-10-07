import React from "react";
import "./Resume.css";
import profile from "../../images/full_profile.jpg";
export default () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        {/* Experience section  */}
        <h1 className="title is-3 has-text-centered">Experience</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2019 - Present</h3>
            <p className="subtitle is-5">Junior Software Engineer</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Andela</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />

        {/* Education section  */}
        <h1 className="title is-3 has-text-centered">Education</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2017 - Present</h3>
            <p className="subtitle is-5">Bachelor's Degree</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">University</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2011 - 2016</h3>
            <p className="subtitle is-5">High School Diploma</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">High School</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2005 - 2010</h3>
            <p className="subtitle is-5">Primary Education</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Primary School</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />

        {/* Projects section  */}
        <h1 className="title is-3 has-text-centered">Projects</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={profile}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">MyBudget</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={profile}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">CompanionApp</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={profile}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">Companion-DialogFlow-Service</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={profile}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">Author's Heaven</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        {/* Skills section  */}
        <h1 className="title is-3 has-text-centered">SKills</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">Reactjs & Redux - Intermediate</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Javascript - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">
              ReactNative & Redux - Intermediate
            </h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Git & GitHub - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">NodeJs & ExpressJs - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Project Management - Proficient</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">HTML & CSS - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">
              Test Driven Development - Proficient
            </h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">GraphQL - Beginner</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">DevOps - Intermediate</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">English - Proficient</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">French - Intermediate</h5>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right project-left-item">
            <h5 className="subtitle is-4">Kinyarwanda - Professional</h5>
          </div>
          <div className="column has-text-left project-right-item">
            <h5 className="subtitle is-4">Kiswahili - Beginner</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
);
