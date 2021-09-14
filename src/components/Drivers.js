import React, { useState, useEffect } from "react";
import db from "../services/firebaseConfig";
/* Styles */
import "../Styles/Drivers.css";
/* Components */
/* import { getDrivers } from "../api"; */
import Driver from "./Driver";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const fetchDriver = () => {
    db.collection("drivers").onSnapshot((querySnapshot) => {
      const drivers = [];
      querySnapshot.forEach((doc) => {
        drivers.push(doc.data());
      });
      setDrivers(drivers);
    });
  };

  useEffect(() => {
    fetchDriver();
  }, []);

  return (
    <main className="drivers-box">
      <div className="header-container">
        <fieldset className="header-field">
          <div className="title-container">
            <div className="box-title">
              <h1>F1 Drivers 2021</h1>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="description-box">
        <div className="content-box">
          <div className="content-container">
            <div className="box-descrip">
              <p>
                Check out this season's official F1 line-up. Full breakdown of
                drivers, points and current positions. Follow your favourite F1
                drivers on and off the track.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="drivers-container">
          {drivers
            .sort((a, b) => {
              if (a.currPoints < b.currPoints) {
                return 1;
              } else return -1;
            })
            .map((d, key) => {
              return (
                <Driver
                  key={key}
                  currentPos={d.currentPos}
                  currPoints={d.currPoints}
                  number={d.number}
                  photo={d.photo}
                  name={d.name}
                  team={d.team}
                  countryFlag={d.countryFlag}
                />
              );
            })}
        </div>
      </div>
    </main>
    /* <>
      <div className="drivers-box">
        <div className="box-title">
          <h1>DRIVERS</h1>
        </div>
      </div>
      <section className="drivers-title">
        <div className="drivers-container">
          {drivers
            .sort((a, b) => {
              if (a.currPoints < b.currPoints) {
                return 1;
              } else return -1;
            })
            .map((d, key) => {
              return (
                <Driver
                  key={key}
                  currentPos={d.currentPos}
                  currPoints={d.currPoints}
                  number={d.number}
                  photo={d.photo}
                  name={d.name}
                  team={d.team}
                  countryFlag={d.countryFlag}
                />
              );
            })}
        </div>
      </section>
    </> */
  );
}
