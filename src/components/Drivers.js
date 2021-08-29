import React, { useState, useEffect } from "react";
/* Styles */
import "../Styles/Drivers.css";
/* Components */
import { getDrivers } from "../api";
import Driver from "./Driver";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const fetchDriver = async () => {
    try {
      const data = await getDrivers();
      setDrivers(data);
    } catch (error) {
      console.log(error);
    }
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
          {drivers.map((d) => {
            return (
              <Driver
                key={d.id}
                imageNumber={d.imageNumber}
                image={d.image}
                name={d.name}
                lastName={d.lastName}
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
