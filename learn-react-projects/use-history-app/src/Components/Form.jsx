import React, { useState } from "react";

const Form = ({ handleClick }) => {
  const [choice, setChoice] = useState("");
  const [id, setId] = useState();

  const handleSelect = (e) => {
    setChoice(e.target.value);
  };

  const handleNumber = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <label>Search for: </label>
      <select name="select" onChange={handleSelect}>
        <option value={null}>select</option>
        <option value="planets">Planets</option>
        <option value="people">People(human)</option>
      </select>
      <label>ID: </label>
      <input name="id" type="number" value={id} onChange={handleNumber} />
      <button
        onClick={() => {
          console.log("------ on click: ", choice, id);
          handleClick(choice, id);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Form;
