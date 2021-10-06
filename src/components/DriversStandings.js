import React, { useEffect, useState } from "react";
import { fetchDriverInfo } from "../services/firebaseConfig";
/* Styles */
import "../Styles/DriverStyles/DriverStand.css";

export default function DriversStandings() {
  const [driverStand, setDriverStand] = useState([]);

  useEffect(() => {
    fetchDriverInfo().then(setDriverStand);
  }, []);

  return (
    <div className="tab-content active" style={{ display: "block" }}>
      <div className="stands-container">
        <div className="wrapp-stands">
          <h3 className="title-standing">STANDINGS</h3>
          {driverStand
            .sort((a, b) => {
              if (a.currPoints < b.currPoints) {
                return 1;
              } else return -1;
            })
            .map(({ id, currPoints, currentPos, name, team }) => {
              return (
                <ul className="f1-positions" key={id}>
                  <li className="podium-item">
                    <div className="podium-div">
                      <span className="podium-rank">{currentPos}</span>
                      <span
                        className="team-color-icon"
                        style={{
                          color:
                            team === "Red Bull Racing"
                              ? "#0600ef"
                              : "currentcolor" && team === "Mercedes"
                              ? "#00d2be"
                              : "currentcolor" && team === "McLaren"
                              ? "#FF9800"
                              : "currentcolor" && team === "Ferrari"
                              ? "#dc0000"
                              : "currentcolor" && team === "Alpine"
                              ? "#0090ff"
                              : "currentcolor" && team === "Aston Martin"
                              ? "#006f62"
                              : "currentcolor" && team === "AlphaTauri"
                              ? "#2b4562"
                              : "currentcolor" && team === "Williams"
                              ? "#005aff"
                              : "currentcolor" && team === "Alfa Romeo Racing"
                              ? "#900000"
                              : "currentcolor" && team === "Haas F1 Team"
                              ? "#ffffff"
                              : "currentcolor",
                        }}
                      ></span>
                      <span className="podium-driver">
                        <strong>{name}</strong>
                      </span>
                      <span className="podium-subdetail">{team}</span>
                      <span className="podium-right">
                        <span className="podium-label">{currPoints} PTS</span>
                      </span>
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
}
