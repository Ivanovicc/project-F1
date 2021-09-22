import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
/* Components */
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Drivers from "./components/Driver/Drivers";
import DriverInfo from "./components/Driver/DriverInfo";
import Teams from "./components/Team/Teams";
import TeamInfo from "./components/Team/TeamInfo";
import Circuits from "./components/Circuits";

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
        <Route exact path="/teams/:id" component={TeamInfo} />
        <Route exact path="/circuits" component={Circuits} />
      </Switch>
    </>
  );
}
