import React, { useEffect, useState } from "react";
/* Styles */
import "../Styles/Teams.css";
/* Components */
import { getTeams } from "../api";
import Team from "./Team";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const data = await getTeams();
    setTeams(data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <>
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
    </>
  );
}
