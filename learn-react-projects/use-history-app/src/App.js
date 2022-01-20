import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Router, navigate } from "@reach/router";
import Form from "./Components/Form";
import Api from "./Components/Api";
import People from "./Components/People";

function App() {
  const [postJSON, setPostJSON] = useState("");
  const handleClick = (choice, id) => {
    console.log("-----", choice, id);
    axios.get(`https://swapi.dev/api/${choice}/${id}`).then((response) => {
      setPostJSON(response.data);
      console.log(response.data);
      navigate(`/${choice}/${id}`);
    });
  };

  return (
    <div className="App">
      {/* <Api/> */}
      <Form handleClick={handleClick} />
      <Router>
        <People path="/people/:number" postJSON={postJSON} />
        <Planets path="/Planets/:number" postJSON={postJSON} />
      </Router>
    </div>
  );
}

const Planets = ({ postJSON }) => {
  return (
    <div>
      <ul>
        <h1>The planet name is : {postJSON.name}</h1>
        <li>Climate: {postJSON.climate} </li>
        <li>Terrain: {postJSON.terrain}</li>
        <li>Surface Water: {postJSON.surface_water}</li>
        <li>Population: {postJSON.population}</li>
      </ul>
    </div>
  );
};

export default App;
