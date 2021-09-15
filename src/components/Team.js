import React from "react";
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
      <a className="link-team" href="#">
        <fieldset className="field-team">
          <div className="rank-team">
            <div className="rank">rank</div>
            <div className="points">
              <div>999</div>
              <div>PTS</div>
            </div>
          </div>
          <div className="team-name">
            <div className="team-span">
              <span>{name}</span>
            </div>
          </div>
          <div className="team-drivers">
            <div className="driver">
              <span>{drivers[0].lastName}</span>
            </div>
            <div className="driver">
              <span>{drivers[1].lastName}</span>
            </div>
          </div>
          <div className="image-wrapper">
            <picture className="team-car">
              <img src={carImg} alt="" className="lazy loaded" />
            </picture>
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
