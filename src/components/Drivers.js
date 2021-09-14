import React, { useState, useEffect } from "react";
import db from "../services/firebaseConfig";
/* Styles */
import "../Styles/Drivers.css";
/* Components */
/* import { getDrivers } from "../api"; */
import Driver from "./Driver";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const fetchDriver = async () => {
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
    <>
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
    </>
  );
}
