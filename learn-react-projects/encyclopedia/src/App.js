import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import "./App.css"
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul className="nav justify-content-center">
          <li>
            <Link to="/" style={{ "color": "white" }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ "color": "white" }}>About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
