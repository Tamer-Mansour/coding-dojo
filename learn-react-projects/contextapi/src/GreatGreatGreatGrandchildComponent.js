import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const GreatGreatGreatGrandchildComponent = (props) => {
  const context = useContext(UserContext);
  return <div>hello {context}</div>;
};
export default GreatGreatGreatGrandchildComponent;
