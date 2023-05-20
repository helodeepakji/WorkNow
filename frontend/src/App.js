import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Login from "./component/Login";
import Registation from "./component/Registation";
import Signup from "./component/Signup";


const About = () => {
  return (
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> About Page</h1>
      </section>
  );
};

const Service = () => {
  return (
      <section className="hero-section">
        <p>Welcome to </p>
        <h1> Service Page</h1>
      </section>
  );
};


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login/>
      </Route>

      <Route exact path="/regisiter">
        <Registation />
      </Route>

      <Route exact path="/Signup">
        <Signup />
      </Route>

    </Switch>
  );
};

export default App;