import React, { useState } from "react";
/* Styles */
import "../Styles/Circuit.css";

export default function Circuit({
  circuitName,
  Location,
  imgCircuit,
  circuitLength,
  curves,
  fastestLap,
  raceResult,
}) {
  const [turnOn, setTurnOn] = useState(false);

  return (
    <>
      <div
        className={`circuit-card ${turnOn ? "turn" : ""}`}
        onClick={() => setTurnOn(!turnOn)}
      >
        <div className="circuit-front">
          <div className="card__info">
            <span>
              <img src={imgCircuit} alt="img-circuit" />
            </span>
          </div>
          <div className="card__profile__text">
            <h2>{circuitName}</h2>
            <p>{Location.country}</p>
          </div>
        </div>
        <div className="circuit-back">
          <div>
            <h1>Info</h1>
          </div>
          <div className="card__profile">
            <ul>
              <li>
                Location: <span>{Location.locality}</span>
              </li>
              <li>
                Circuit Length: <span>{circuitLength}</span>
              </li>
              <li>
                Curves: <span>{curves}</span>
              </li>
              <li>
                Fastest Lap:{" "}
                <span>
                  {fastestLap.time}, {fastestLap.driver}
                </span>
              </li>
              <li>
                Last Winner: <span>{raceResult.winner}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
