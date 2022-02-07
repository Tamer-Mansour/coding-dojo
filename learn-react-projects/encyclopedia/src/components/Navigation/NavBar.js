import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import { About } from "../About";
import { ContactUs } from "../ContactUs";

import "./NavBar.css";
import ToDoList from "../../Tasks/ToDo/ToDoList";
import CoinFlipper from "../../Tasks/CoinFlipper/CoinFlipper";
import CountingIt from "../../Tasks/FirstApp/CountingIt";
import Form from "../../Tasks/Login/Form";
import { ErrorPage } from "../ErrorPage";
import DisplayAll from "./Rating/DisplayAll";

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
        <li className="list">
          <Link to="/rate" style={{ color: "white" }}>
            Rate
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
        <Route exact path="/rate">
          <DisplayAll />
        </Route>
        <Route exact path="/todo" component={ToDoList} />
        <Route exact path="/coin" component={CoinFlipper} />
        <Route exact path="/prop" component={CountingIt} />
        <Route exact path="/login" component={Form} />
        <Route exact path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default NavBar;
