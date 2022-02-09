import React, { useReducer } from "react";

function UseReducer() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  return (
    <>
      <button onClick={() => setNumber(1)}>{number}</button>
      <button onClick={() => setNumber(-1)}>{number}</button>
    </>
  );
}
export default UseReducer;
