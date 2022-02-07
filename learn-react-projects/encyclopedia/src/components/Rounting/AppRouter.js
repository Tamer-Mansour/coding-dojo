import React from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoinFlipper from "../../Tasks/CoinFlipper/CoinFlipper";
import CountingIt from "../../Tasks/FirstApp/CountingIt";
import Form from "../../Tasks/Login/Form";
import ToDoList from "../../Tasks/ToDo/ToDoList";
import { About } from "../About";
import { ContactUs } from "../ContactUs";
import { ErrorPage } from "../ErrorPage";
import Home from "../Home";
import RateUs from "../Navigation/Rating/RateUs";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
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
            <RateUs />
          </Route>
          <Route exact path="/todo" component={ToDoList} />
          <Route exact path="/coin" component={CoinFlipper} />
          <Route exact path="/prop" component={CountingIt} />
          <Route exact path="/login" component={Form} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
export default AppRouter;
