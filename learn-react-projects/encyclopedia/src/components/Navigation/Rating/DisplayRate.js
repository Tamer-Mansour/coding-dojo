import React from "react";

export default function DisplayRate(props) {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Your Selected Rate is: {props.message}</h1>
    </div>
  );
}
