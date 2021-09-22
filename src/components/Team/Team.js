import React from "react";
import { Link } from "react-router-dom";
/* Styles */
import "../../Styles/TeamStyles/Team.css";

export default function Team({ name, logo, car, rank, drivers, points, id }) {
  const styleColor = {
    color:
      name === "Red Bull Racing"
        ? "#0600ef"
        : "currentcolor" && name === "Mercedes"
        ? "#00d2be"
        : "currentcolor" && name === "McLaren"
        ? "#FF9800"
        : "currentcolor" && name === "Ferrari"
        ? "#dc0000"
        : "currentcolor" && name === "Alpine"
        ? "#0090ff"
        : "currentcolor" && name === "Aston Martin"
        ? "#006f62"
        : "currentcolor" && name === "AlphaTauri"
        ? "#2b4562"
        : "currentcolor" && name === "Williams"
        ? "#005aff"
        : "currentcolor" && name === "Alfa Romeo Racing"
        ? "#900000"
        : "currentcolor" && name === "Haas F1 Team"
        ? "#ffffff"
        : "currentcolor",
  };

  return (
    <div className="card-team">
      <Link className="link-team" to={`teams/${id}`}>
        <fieldset className="field-team" style={styleColor}>
          <div className="rank-team">
            <div className="rank">{rank}</div>
            <div className="points">
              <div className="current-points">{points}</div>
              <div className="points-label">PTS</div>
            </div>
          </div>
          <div className="team-name">
            <div className="team-span">
              <span className="team-color" style={styleColor}></span>
              <span>{name}</span>
            </div>
            <div className="team-logo">
              <picture>
                <img src={logo.svg} alt="team_logo" className="lazy loaded" />
              </picture>
            </div>
          </div>
          <div className="team-drivers">
            <div className="driver">
              <span className="first-name">{drivers.driver_1.name}</span>
              <span className="last-name">{drivers.driver_1.lastname}</span>
            </div>
            <div className="driver">
              <span className="first-name">{drivers.driver_2.name}</span>
              <span className="last-name">{drivers.driver_2.lastname}</span>
            </div>
          </div>
          <div className="image-wrapper">
            <picture className="team-car">
              <img src={car.img} alt="" className="lazy loaded" />
            </picture>
          </div>
        </fieldset>
      </Link>
    </div>
  );
}
