import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import db from "../../services/firebaseConfig";

/* Styles */
import "../../Styles/TeamStyles/TeamInfo.css";

export default function TeamInfo() {
  const { id } = useParams();

  const [team, setTeam] = useState([]);

  const fetchTeam = () => {
    return db
      .collection("teams")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();

        return data;
      });
  };

  useEffect(() => {
    fetchTeam().then(setTeam);
  }, []);

  return (
    <main className="main-team" role="main">
      <article>
        <div className="wrap-group">
          <header className="team-details">
            <section className="team-stats">
              <div className="list-component">
                <div className="brand-logo">
                  <img
                    src={team.logo ? team.logo.img : <span>Loading...</span>}
                    alt="team_template"
                  />
                </div>
                <table className="stat-list">
                  <tbody>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">Full Team Name </span>
                      </th>
                      <td className="stat-value">{team.fullname}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">Chassis </span>
                      </th>
                      <td className="stat-value">
                        {team.car ? team.car.chasis : <span>Loading...</span>}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">Power Unit </span>
                      </th>
                      <td className="stat-value"></td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">Pole Positions </span>
                      </th>
                      <td className="stat-value"></td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">First Team Entry </span>
                      </th>
                      <td className="stat-value"></td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">World Championships </span>
                      </th>
                      <td className="stat-value"></td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span className="text">Fastest Lap </span>
                      </th>
                      <td className="stat-value"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            {/* <section>
              <ul>
                <li>
                  <figure>
                    <div></div>
                    <figcaption>
                      <h1></h1>
                      <div>
                        <span></span>
                      </div>
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <div></div>
                    <figcaption>
                      <h1></h1>
                      <div>
                        <span></span>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </section> */}
          </header>
        </div>
      </article>
    </main>
  );
}
