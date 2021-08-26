import React from "react";
/* Styles */
import "../Styles/Driver.css";

export default function Driver({
  imageNumber,
  image,
  name,
  lastName,
  team,
  countryFlag,
}) {
  return (
    <div
      class="container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="container__info">
        <span>
          <img src={imageNumber} alt="img-number" />
        </span>
      </div>
      <di class="container__profile">
        <img src={countryFlag} alt="driver-flag" />
        <div class="container__profile__text">
          <h2>
            {name} {lastName}
          </h2>
          <p>
            <b>{team}</b>
          </p>
        </div>
      </di>
    </div>
  );
}
