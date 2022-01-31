import React from "react";
import "./Home.css";
import { Cards } from "./Cards";
const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-center col">Welcome to my web site</h1>
      </div>
      <Cards />
    </>
  );
};
export default Home;
