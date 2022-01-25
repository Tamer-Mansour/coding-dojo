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
      <form onSubmit={handleClick(choice, id)}>
        <label>Search for: </label>
        <select name="select" onChange={handleSelect}>
          <option>planets</option>
          <option>people</option>
        </select>
        <label>ID: </label>
        <input name="id" type="number" value={id} onChange={handleNumber} />
        <button
          onClick={()=> {
            console.log("------ on click: ",choice, id);
            handleClick(choice, id);
          }
          }  
        >Search</button>
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default Form;
