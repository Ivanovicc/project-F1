import React from "react";
import { Link } from "react-router-dom";
/* Styles */
import "../../Styles/DriverStyles/Driver.css";

export default function Driver({
  number,
  photo,
  name,
  team,
  countryFlag,
  currPoints,
  currentPos,
  id,
}) {
  const linkColor = {
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
  };

  return (
    <div className="card-driver">
      <Link to={`drivers/${id}`} className="link-driver" style={linkColor}>
        <fieldset className="field-link">
          <div className="rank-wrapper">
            <div className="rank">{currentPos}</div>
            <div className="points">
              <div className="current-points">{currPoints}</div>
              <div className="points-label">PTS</div>
            </div>
          </div>
          <div className="name-wrapper">
            <div className="container-wrapper">
              <div className="driver-span">
                <span>{name}</span>
              </div>
              <div className="driver-nation">
                <picture>
                  <img src={countryFlag} alt="country-flag" />
                </picture>
              </div>
            </div>
          </div>
          <p className="team-driver">{team}</p>
          <div className="photo-wrapper">
            <picture className="driver-pic">
              <img src={photo[0]} alt="driver-pic" />
            </picture>
            <picture className="driver-num">
              <img src={number[1]} alt="driver-number" />
            </picture>
          </div>
        </fieldset>
      </Link>
    </div>
  );
}
