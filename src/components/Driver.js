import React from "react";
/* Styles */
import "../Styles/Driver.css";

export default function Driver({
  number,
  photo,
  name,
  team,
  countryFlag,
  currPoints,
  currentPos,
}) {
  return (
    <div className="card-driver">
      <a className="link-driver">
        <fieldset className="field-link">
          <div className="rank-wrapper">
            <div className="rank">{currentPos}</div>
            <div className="points">
              <div>{currPoints}</div>
              <div>PTS</div>
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
          <p className="team-name">{team}</p>
          <div className="photo-wrapper">
            <picture className="driver-pic">
              <img src={photo[0]} alt="driver-photo" />
            </picture>
            <picture className="driver-num">
              <img src={number[1]} alt="driver-number" />
            </picture>
          </div>
        </fieldset>
      </a>
    </div>
    /* <div
      className="container"
      style={{
        backgroundImage: `url(${photo[1]})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container__info">
        <span>
          <img src={number[1]} alt="img-number" />
        </span>
      </div>
      <div className="container__profile">
        <img src={countryFlag} alt="driver-flag" />
        <div className="container__profile__text">
          <h2>{name}</h2>
          <p>
            <b>{team}</b>
          </p>
        </div>
      </div>
    </div> */
  );
}
