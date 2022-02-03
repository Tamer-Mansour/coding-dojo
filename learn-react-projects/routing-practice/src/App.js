//import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Home path="/:wordOrNum" />
        <Home path="/:wordOrNum/:color/:backgroundColor" />
      </Router>

      <div>
        <p>
          type in url{" "}
          <code style={{ color: "red" }}>http://localhost:3000/home</code> to
          rout in the home page
        </p>
        <p>
          type in url{" "}
          <code style={{ color: "red" }}>http://localhost:3000/4</code> to rout
          in the number page
        </p>
        <p>
          type in url{" "}
          <code style={{ color: "red" }}>http://localhost:3000/hello</code> to
          rout to output
          <code>Your input word is ^your world^ :</code>
        </p>
        <p>
          type in url{" "}
          <code style={{ color: "red" }}>
            http://localhost:3000/hello/blue/red
          </code>{" "}
          to rout to output
          <code style={{ color: "red" }}>
            Your input word is ^your world^ with blue color and red background :
          </code>
        </p>
      </div>
    </div>
  );
}

export default App;
