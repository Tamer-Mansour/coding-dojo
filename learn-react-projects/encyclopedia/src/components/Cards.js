import React from "react";
import { Link } from "react-router-dom";
import Task from "../Images/Task.png";
import coin from "../Images/coin.jpg";
import login from "../Images/login.png";
import "./Cards.css";
export const Cards = () => {
  return (
    <div className="comm">
      {/* first card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={Task} alt="task" />
        <div className="card-body">
          <h5 className="card-title">To Do list</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <Link to="/todo" style={{ color: "white" }}>
            {" "}
            <button className="btn btn-primary">Go to task</button>
          </Link>
        </div>
      </div>
      {/* second card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={coin} alt="task" />
        <div className="card-body">
          <h5 className="card-title">Coin Flipper</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <Link to="/coin" style={{ color: "white" }}>
            {" "}
            <button className="btn btn-primary">Go to task</button>
          </Link>
        </div>
      </div>
      {/* third card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={Task} alt="task" />
        <div className="card-body">
          <h5 className="card-title">Prop It Up</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <Link to="/prop" style={{ color: "white" }}>
            {" "}
            <button className="btn btn-primary">Go to task</button>
          </Link>
        </div>
      </div>
      {/* forth card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={login} alt="task" />
        <div className="card-body">
          <h5 className="card-title">Form Login</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <Link to="/login" style={{ color: "white" }}>
            {" "}
            <button className="btn btn-primary">Go to task</button>
          </Link>
        </div>
      </div>
      {/* 6 card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={login} alt="task" />
        <div className="card-body">
          <h5 className="card-title">Add your images</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <Link to="/upload" style={{ color: "white" }}>
            {" "}
            <button className="btn btn-primary">Go to upload </button>
          </Link>
        </div>
      </div>
      <p></p>
    </div>
  );
};
