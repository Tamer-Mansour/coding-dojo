import React, { useReducer, useState } from "react";

function Check() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </div>
  );
}
export default Check;
