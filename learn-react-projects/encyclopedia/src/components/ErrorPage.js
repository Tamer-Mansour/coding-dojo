import React from "react";
import error from "../Images/error.jpg";

export const ErrorPage = () => {
  return (
    <div>
      <img src={error} style={{ width: "100%", height: "100%" }} alt="error" />
    </div>
  );
};
