import React, { useEffect, useState } from "react";
/* Styles */
import "../Styles/Circuits.css";
/* Components */
import { getCircuits } from "../api";
import Circuit from "./Circuit";

export default function Circuits() {
  const [circuits, setCircuits] = useState([]);

  const fetchCircuit = async () => {
    const data = await getCircuits();
    setCircuits(data);
  };

  useEffect(() => {
    fetchCircuit();
  }, []);

  return (
    <>
      <div className="list-title">
        <div className="circuit-title">
          <h1>CIRCUITS</h1>
        </div>
      </div>
      <section className="grid-circuits">
        <div className="circuits-wrapper">
          {circuits.map((c) => {
            return (
              <Circuit
                imgCircuit={c.imgCircuit}
                curves={c.curves}
                fastestLap={c.fastestLap}
                raceResult={c.raceResult}
                circuitLength={c.circuitLength}
                circuitName={c.circuitName}
                Location={c.Location}
                key={c.id}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
