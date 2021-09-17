import React, { useEffect, useState } from "react";
import db from "../services/firebaseConfig";
/* Styles */
import "../Styles/Teams.css";
/* Components */
import Team from "./Team";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    db.collection("teams").onSnapshot((querySnapshot) => {
      const teams = [];
      querySnapshot.forEach((doc) => {
        teams.push(doc.data());
      });
      setTeams(teams);
    });
  };

  useEffect(() => {
    fetchTeams();
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
            .map((t, key) => {
              return (
                <Team
                  key={key}
                  points={t.points}
                  rank={t.rank}
                  name={t.name}
                  logo={t.logo}
                  car={t.car}
                  drivers={t.drivers}
                />
              );
            })}
        </div>
      </div>
    </main>
    /* <>
      <div className="grid-title">
        <div className="title-wrap">
          <h1>TEAMS</h1>
        </div>
      </div>
      <section className="grid-teams">
        <div className="teams-wrapper">
          {teams.map((t) => {
            return (
              <Team
                key={t.id}
                name={t.name}
                imgTeam={t.imgTeam}
                carImg={t.carImg}
                chasis={t.chasis}
                drivers={t.drivers}
                powerUnity={t.powerUnity}
                nationality={t.nationality}
              />
            );
          })}
        </div>
      </section>
    </> */
  );
}
