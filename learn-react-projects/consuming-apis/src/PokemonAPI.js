import React, { useEffect, useState } from "react";

export const PokemonAPI = () => {
  const [name, setName] = useState([]);
  const getPokemonByClickButton = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((response) => setName(response.results));
  };

  return (
    <div>
      <button onClick={getPokemonByClickButton}>GET POKEMON</button>
      {name.length > 0 &&
        name.map((names, index) => {
          return <li key={index}>{names.name}</li>;
        })}
    </div>
  );
};
export default PokemonAPI;
