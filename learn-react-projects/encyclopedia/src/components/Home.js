import React from "react";
import "./Home.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "../Tasks/ToDo/ToDoList";
import CoinFlipper from "../Tasks/CoinFlipper/CoinFlipper";
import { Cards } from "./Cards";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center col">Welcome to my web site</h1>
      </div>
      <Cards />
      <BrowserRouter>
        <Switch>
          <Route path="/todo">
            <ToDoList />
          </Route>
          <Route path="/coin">
            <CoinFlipper />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Home;
