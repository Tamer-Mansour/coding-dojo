import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import { About } from "../About";
import { ContactUs } from "../ContactUs";
import "./NavBar.css"

const NavBar = () => {
  return (
    <BrowserRouter>
      <ul className="nav">
        <li className="list">
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li className="list">
          <Link to="/about" style={{ color: "white" }}>
            About
          </Link>
        </li>
        <li className="list">
          <Link to="/contact" style={{ color: "white" }}>
            Contact
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default NavBar;
