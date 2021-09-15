import React, { useState } from "react";
/* Styles */
import "../Styles/Team.css";

export default function Team({
  name,
  imgTeam,
  carImg,
  chasis,
  drivers,
  powerUnity,
  nationality,
}) {
  /*  const [flip, setFlip] = useState(false); */

  return (
    <div className="card-team">
      <a className="link-driver">
        <fieldset className="field-link">
          <div className="rank-wrapper">
            <div className="current-points">points</div>
            <div className="points-label">PTS</div>
          </div>
          <div className="name-wrapper">
            <div className="driver-span">
              <span>{name}</span>
            </div>
          </div>
          <div className="rank-wrapper">
            <div>
              <span>{drivers[0].lastName}</span>
            </div>
            <div>
              <span>{drivers[1].lastName}</span>
            </div>
          </div>
          <div>
            <div>
              <picture>
                <img src={carImg} alt="" />
              </picture>
            </div>
          </div>
        </fieldset>
      </a>
    </div>
    /* <>
      <div
        className={`team-container ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div className="team-front">
          <div className="team-image">
            <img src={imgTeam} alt={chasis} />
          </div>
          <div className="car-image">
            <img src={carImg} alt={name} />
          </div>
          <div className="team-name">
            <h2>{name}</h2>
          </div>
        </div>
        <div className="team-back">
          <div className="back-title">
            <h1>Info</h1>
          </div>
          <ul className="box-info">
            <li>
              Drivers: <span>{drivers[0].lastName}</span>,
              <span> {drivers[1].lastName}</span>
            </li>

            <li>
              Power Unity: <span>{powerUnity}</span>
            </li>

            <li>
              Chasis: <span>{chasis}</span>
            </li>

            <li>
              Nationality: <span>{nationality}</span>
            </li>
          </ul>
        </div>
      </div>
    </> */
  );
}
