import React, { useState } from "react";

const Form = ({ handleClick }) => {
  const [choice, setChoice] = useState("");
  const [id, setId] = useState(0);

  const handleSelect = (e) => {
    setChoice(e.target.value);
  };

  const handleNumber = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(choice, id);
        }}
      >
        <label>Search for: </label>
        <select name="select" onChange={handleSelect} required>
          <option value="">select</option>
          <option value="planets">Planets</option>
          <option value="people">People(human)</option>
        </select>
        <label>ID: </label>
        <input
          name="id"
          type="number"
          value={id}
          onChange={handleNumber}
          required
        />
        {/* <button
        onClick={() => {
          console.log("------ on click: ", choice, id);
          handleClick(choice, id);
        }}
      >
        Search
      </button> */}
        <input
          type="submit"
          onClick={() => {
            console.log("------ on click: ", choice, id);
            // handleClick(choice, id);
          }}
        />
      </form>
    </div>
  );
};

export default Form;
