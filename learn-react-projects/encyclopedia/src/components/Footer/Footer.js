import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="foot pt-4 ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase" style={{ color: "white" }}>
              Encyclopedia
            </h5>
            <p style={{ color: "white" }}>
              I was make this website to contain all tasks i made in coding dojo
              tutorial.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0.5" />
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase" style={{ color: "white" }}>
              Links
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: "white" }}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ color: "white" }}
        className="footer-copyright text-center py-3 copy"
      >
        © 2022 Copyright:
        <a href="/about" style={{ color: "white" }}>
          {" "}
          Tamer Company
        </a>
      </div>
    </footer>
  );
};
export default Footer;
