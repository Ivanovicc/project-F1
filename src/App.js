import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/* Components */
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Drivers from "./components/Drivers";
import Teams from "./components/Teams";
import Circuits from "./components/Circuits";
import DriverInfo from "./components/DriverInfo";

export default function App() {
  return (
    <>
      <Redirect from="/" to="/home" />
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/drivers" component={Drivers} />
        <Route exact path="/drivers/:id" component={DriverInfo} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/circuits" component={Circuits} />
      </Switch>
    </>
  );
}
