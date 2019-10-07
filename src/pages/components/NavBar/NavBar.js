import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default () => (
  <div className="container" id="top-nav-bar">
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="subtitle is-4 first-name">Yves</span>
          <span className="subtitle is-4 last-name">Iraguha</span>
        </Link>
        <button className="navbar-burger burger">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/home">
            Home
          </Link>
          <Link className="navbar-item" to="/resume">
            Resume
          </Link>
          <Link className="navbar-item" to="/contact">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  </div>
);
