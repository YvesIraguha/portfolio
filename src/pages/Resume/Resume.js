import React from "react";
import "./Resume.css";

export default () => (
  <div className="hero is-fullheight">
    <div className="hero-body">
      <div className="container v-centered">
        <h1 className="title is-3 has-text-centered">Experience</h1>
        <hr />
        <div className="columns">
          <div className="column has-text-right">
            <h3 className="subtitle is-4">2019 - Present</h3>
            <p className="subtitle is-5">Junior Software Engineer</p>
          </div>
          <div
            className="column has-text-left"
            style={{
              borderLeftColor: "red",
              borderLeftWidth: 10,
              borderLeftStyle: "solid"
            }}
          >
            <h3 className="subtitle is-4">Andela</h3>
            <p className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
