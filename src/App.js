import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/* Components */
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Drivers from "./components/Drivers";
import Teams from "./components/Teams";
import Circuits from "./components/Circuits";

export default function App() {
  return (
    <>
      <Redirect from="/" to="/Home" />
      <NavBar />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Drivers">
          <Drivers />
        </Route>
        <Route exact path="/Teams">
          <Teams />
        </Route>
        <Route exact path="/Circuits">
          <Circuits />
        </Route>
      </Switch>
    </>
  );
}
