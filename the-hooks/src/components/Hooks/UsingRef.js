import React, { useState } from "react";
import useInput from "../Custom Hooks/useInput";

function UsingRef() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sound like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input type="color" {...colorProps} />
      <button>Add</button>
    </form>
  );
}
export default UsingRef;
