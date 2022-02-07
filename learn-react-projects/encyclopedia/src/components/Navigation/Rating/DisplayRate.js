import React from "react";

export default function DisplayRate(props) {
  return (
    <div>
      <h1>Current Message</h1>
      <pre>{props.message}</pre>
    </div>
  );
}
