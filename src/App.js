import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound";
import NavBar from "./pages/components/NavBar/NavBar";

const App = () => (
  <div>
    <HashRouter basename="/">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
