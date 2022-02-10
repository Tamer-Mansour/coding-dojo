import React, { useReducer } from "react";

const initialState = {
  message1: "helllooo!!",
  message:"Welcome"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "yell":
      return {
        message1: `HEY! I JUST SAID ${state.message}!!`,
      };
    case "whisper":
      return {
        message1: `EXCUSE ME!!! I JUST SAID ${state.message}!!`,
      };
    default:
      return state;
  }
};

const Mess = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state.message}</p><p>{state.message1}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </div>
  );
};
export default Mess;
