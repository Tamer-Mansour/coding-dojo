import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Router, navigate } from "@reach/router";
import Form from "./Components/Form";
import { Home } from "./Components/Home";

function App() {
  const [postJSON, setPostJSON] = useState("");
  const handleClick = (choice, id) => {
    console.log("-----", choice, id);
    axios.get(`https://swapi.dev/api/${choice}/${id}`).then((response) => {
      setPostJSON(response.data);
      console.log(response.data);
      navigate(`/home/${choice}/${id}`);
    });
  };

  return (
    <div className="App">
      <Router>
      <Home path="/" />
      <Form path="/home" handleClick={handleClick} />
        <People path="/home/people/:number" postJSON={postJSON} />
        <Planets path="/home/planets/:number" postJSON={postJSON} />
      </Router>
    </div>
  );
}
const People = ({ postJSON }) => {
  return (
    <div>
      <ul>
        <h1>The people name is : {postJSON.name}</h1>
        <li>
          <b>Height:</b> {postJSON.height}
        </li>
        <li>
          <b>Mass:</b> {postJSON.mass}
        </li>
        <li>
          <b>Hair Color:</b> {postJSON.hair_color}
        </li>
        <li>
          <b>skin Color:</b> {postJSON.skin_color}
        </li>
        <li>
          <b>eye Color:</b> {postJSON.eye_color}
        </li>
      </ul>
    </div>
  );
};
const Planets = ({ postJSON }) => {
  return (
    <div>
      <ul>
        <h1>The planet name is : {postJSON.name}</h1>
        <li>
          <b>Climate:</b> {postJSON.climate}{" "}
        </li>
        <li>
          <b>Terrain:</b> {postJSON.terrain}
        </li>
        <li>
          <b>Surface Water:</b> {postJSON.surface_water}
        </li>
        <li>
          <b>Population:</b> {postJSON.population}
        </li>
      </ul>
    </div>
  );
};

export default App;
