import React from "react";
import { Link } from "react-router-dom";
import Task from "../Images/Task.png";
import "./Cards.css"
export const Cards = () => {
  return (
    <div>
      {/* first card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={Task} alt="task" />
        <div className="card-body">
          <h5 className="card-title">To Do list</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <button className="btn btn-primary">
            <Link to="/todo" style={{ color: "white" }}>
              Go to task
            </Link>
          </button>
        </div>
      </div>
      {/* second card */}
      <div className="card sort" style={{ width: "18rem" }}>
        <img className="card-img-top" src={Task} alt="task" />
        <div className="card-body">
          <h5 className="card-title">Coin Flipper</h5>
          <p className="card-text">
            I made this task when i learn react coding dojo.
          </p>
          <button className="btn btn-primary">
            <Link to="/coin" style={{ color: "white" }}>
              Go to task
            </Link>
          </button>
        </div>
      </div>
      <p>  
      </p>
    </div>
  );
};
