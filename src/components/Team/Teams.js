import React, { useEffect, useState } from "react";
import { fetchTeamsInfo } from "../../services/firebaseConfig";
/* Styles */
import "../../Styles/TeamStyles/Teams.css";
/* Components */
import Team from "./Team";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeamsInfo().then(setTeams);
  }, []);

  return (
    <main className="teams-box">
      <fieldset className="team-fieldset">
        <div className="title-field">
          <h1>F1 Teams 2021</h1>
        </div>
      </fieldset>
      <div className="box-description">
        <div className="box-text">
          <p>
            Discover everything you need to know about this year's Formula 1
            teams - drivers, podium finishes, points earned and championship
            titles.
          </p>
        </div>
      </div>
      <div className="teams-content">
        <div className="teams-wrapper">
          {teams
            .sort((a, b) => {
              if (a.points < b.points) {
                return 1;
              } else return -1;
            })
            .map(({ id, points, rank, name, logo, car, drivers }) => {
              return (
                <Team
                  key={id}
                  id={id}
                  points={points}
                  rank={rank}
                  name={name}
                  logo={logo}
                  car={car}
                  drivers={drivers}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
}
