import React, { useState } from "react";
import "./App.css";
import Example from "./Example";
import TimeDisplay from "./TimeDisplay";
import PokemonAPI from "./PokemonAPI";

function App() {
  const [pieceOfState, setPieceOfState] = useState("initial value here");

  return (
    <div className="App">
      <Example />
      <p>************************************************</p>
      <TimeDisplay />
      <p>************************************************</p>

      <PokemonAPI />
    </div>
  );
}

export default App;
