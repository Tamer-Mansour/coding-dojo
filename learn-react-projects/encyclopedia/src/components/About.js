import React from "react";
import "./About.css";
import Tamer from "../Images/Tamer.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const About = (props) => {
  return (
    <diV>
      <h2 style={{ color: "rgb(56, 93, 102)", textAlign: "center" }}>
        Our Team
      </h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={Tamer} alt="Tamer Mansour" style={{ width: "100%" }} />
            <div className="container">
              <h2>Tamer Mansour</h2>
              <p className="title">CEO & Founder</p>
              <p>I have alot of mony so i have the company.</p>
              <p>tamer.mansour@student.alquds.edu</p>
              <p>
                <Link to="/contact">
                  <button className="button btn-primary">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Tamer} alt="Mike" style={{ width: "100%" }} />
            <div className="container">
              <h2>Tamer Mansour</h2>
              <p className="title">Art Director</p>
              <p>I dont have any employee so im an art director.</p>
              <p>tamer.mansour@student.alquds.edu</p>
              <p>
                <Link to="/contact">
                  <button className="button btn-primary">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Tamer} alt="John" style={{ width: "100%" }} />
            <div className="container">
              <h2>Tamer Mansour</h2>
              <p className="title">Designer</p>
              <p>yeh this result im also designer.</p>
              <p>tamer.mansour@student.alquds.edu</p>
              <p>
                <Link to="/contact">
                  <button className="button btn-primary">Contact</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </diV>
  );
};
