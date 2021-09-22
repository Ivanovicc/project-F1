import React, { useState, useEffect } from "react";
import { fetchDriverInfo } from "../../services/firebaseConfig";
/* Styles */
import "../../Styles/DriverStyles/Drivers.css";
/* Components */
import Driver from "./Driver";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDriverInfo().then(setDrivers);
  }, []);

  return (
    <main className="drivers-box">
      <fieldset className="header-field">
        <div className="title-container">
          <h1>F1 Drivers 2021</h1>
        </div>
      </fieldset>
      <div className="description-box">
        <div className="box-descrip">
          <p>
            Check out this season's official F1 line-up. Full breakdown of
            drivers, points and current positions. Follow your favourite F1
            drivers on and off the track.
          </p>
        </div>
      </div>
      <div className="drivers-content">
        <div className="drivers-container">
          {drivers
            .sort((a, b) => {
              if (a.currPoints < b.currPoints) {
                return 1;
              } else return -1;
            })
            .map(
              ({
                id,
                currPoints,
                currentPos,
                number,
                photo,
                name,
                team,
                countryFlag,
              }) => {
                return (
                  <Driver
                    key={id}
                    id={id}
                    currentPos={currentPos}
                    currPoints={currPoints}
                    number={number}
                    photo={photo}
                    name={name}
                    team={team}
                    countryFlag={countryFlag}
                  />
                );
              }
            )}
        </div>
      </div>
    </main>
  );
}
