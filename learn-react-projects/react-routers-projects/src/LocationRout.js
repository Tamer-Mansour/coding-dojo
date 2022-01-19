import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Location from "./Location";

function LocationRout() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/Ramallah">Ramallah</Link>
         &nbsp;|&nbsp;
        <Link to="/location/Jerusalem">Jerusalem</Link>
        &nbsp;|&nbsp;
        <Link to="/location/Amman">Amman</Link>
      </p>
      <Switch>
        <Route path="/location/:city">
          <Location />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default LocationRout;
