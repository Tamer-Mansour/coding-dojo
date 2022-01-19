import React, { useEffect, useState } from "react";
import axios from "axios";

export const PokemonAPI = () => {
  const [name, setName] = useState([]);
  const getPokemonByClickButton = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => setName(response.data.results));
  };

  return (
    <div>
      <button onClick={getPokemonByClickButton}>AXION POKEMON</button>
      {name.length > 0 &&
        name.map((names, index) => {
          return <li key={index}>{names.name}</li>;
        })}
    </div>
  );
};
export default PokemonAPI;
//https://pokeapi.co/api/v2/pokemon?limit=807
