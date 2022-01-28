import React from "react";
import "./Home.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "../Tasks/ToDo/ToDoList";
import CoinFlipper from "../Tasks/CoinFlipper/CoinFlipper";
import CountingIt from "../Tasks/FirstApp/CountingIt";
import { Cards } from "./Cards";
import Form from "../Tasks/Login/Assignment/Form";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center col">Welcome to my web site</h1>
      </div>
      <Cards />
      <BrowserRouter>
        <Switch>
          <Route  path="/todo">
            <ToDoList />
          </Route>
          <Route exact path="/coin">
            <CoinFlipper />
          </Route>
          <Route exact path="/prop">
            <CountingIt />
          </Route>
          <Route exact path="/login">
            <Form />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Home;
