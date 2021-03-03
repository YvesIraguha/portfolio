import React from "react";
import "./Resume.css";
import skills from "./skills";
import projects from "./projects";

export default () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        {/* Experience section  */}
        <h1 className="title is-3 has-text-centered">Experience</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2020 - Present</h3>
            <p className="subtitle is-5">Software Engineer</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Hala Systems</h3>
            <p className="item-description">
              I work in a team of engineers responsible for developing product
              which is used for media authenticity verification.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2019 - Present</h3>
            <p className="subtitle is-5">Software Engineer</p>
          </div>
          <div className="title-content-separator">
            <div className="circle"></div>
            <div className="rectangle"></div>
          </div>
          <div className="column has-text-left">
            <h3 className="subtitle is-4">Andela</h3>
            <p className="item-description">
              As a Software Engineer, I contribute to different teams which
              build different products ranging from mobile apps, using
              ReactNative technology, to web applications. I build back-end
              using Nodejs/Express and front-end using React & Redux, and
              HTML/CSS/JS in some instances.
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
            <h3 className="subtitle is-4">
              Southern New Hampshire University - Kepler Program
            </h3>
            <p className="item-description">
              I am a student in the Bachelor of Arts in Management,
              concentration in Logistics and Operations. Through Kepler Program,
              I work on College for America projects, ranging from
              organizational effectiveness, to diversity at workplace.
            </p>
          </div>
        </div>

        <hr />

        {/* Projects section  */}
        <h1 className="title is-3 has-text-centered">Projects</h1>
        <hr />
        {projects.map((project, i) => (
          <div className="columns" key={i}>
            <div className="column has-text-right project-left-item">
              <img
                src={project.thumbnail}
                alt="Project Preview"
                className="project-image"
              />
            </div>
            <div className="column has-text-left project-right-item">
              <h3 className="subtitle is-4">{project.title}</h3>
              <p className="item-description">{project.description}</p>
            </div>
          </div>
        ))}
        {/* <div className="columns">
          <div className="column has-text-right project-left-item">
            <img
              src={companionDialogFlow}
              alt="Project Preview"
              className="project-image"
            />
          </div>
          <div className="column has-text-left project-right-item">
            <h3 className="subtitle is-4">Companion-DialogFlow-Service</h3>
            <p className="item-description">
              This is an intermediary service between DialogFlow and Google
              Calendar to support convergeCompanionApp. It is a webhook for
              DialogFlow integration with CompanionApp. This is a Nodejs/Express
              application that we built as an intermediary service.
            </p>
          </div>
        </div> */}
        <hr />
        {/* Skills section  */}
        <h1 className="title is-3 has-text-centered">SKills</h1>
        <hr />
        {skills.map((skillSet, i) => (
          <div className="columns" key={i}>
            <div className="column has-text-right project-left-item">
              <h5 className="subtitle is-4">{skillSet[0]} </h5>
            </div>
            <div className="column has-text-left project-right-item">
              <h5 className="subtitle is-4">{skillSet[1]} </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
