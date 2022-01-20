import React from "react";
const Peoples = ({ postJSON }) => {
    return (
      <div>
        <ul>
          <h1>The people name is : {postJSON.name}</h1>
          <li>Height: {postJSON.height}</li>
          <li>Mass: {postJSON.mass}</li>
          <li>Hair Color: {postJSON.hair_color}</li>
          <li>skin Color: {postJSON.skin_color}</li>
          <li>eye Color: {postJSON.eye_color}</li>
        </ul>
      </div>
    );
  };
  export default Peoples;