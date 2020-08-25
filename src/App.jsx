import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from "../src/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../src/Home";
import Contact from "../src/Contact";
import About from "../src/About";
import Service from "../src/Service";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <br />
      <Footer />
    </>
  );
};

export default App;
