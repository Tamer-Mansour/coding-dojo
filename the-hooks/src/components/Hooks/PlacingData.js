import React, { createContext, useContext } from "react";

export const TreesContext = createContext();

export const useTrees = () => {
  useContext(TreesContext);
};

export default function PlacingData() {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1>Trees I've heard of </h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}
