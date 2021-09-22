import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import db from "../../services/firebaseConfig";

/* Styles */
import "../../Styles/DriverStyles/DriverInfo.css";

export default function DriverInfo() {
  const [driverDetails, setDriverDetails] = useState([]);

  const { id } = useParams();

  const fetchData = () => {
    return db
      .collection("drivers")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();

        return data;
      });
  };

  useEffect(() => {
    fetchData().then(setDriverDetails);
  }, []);

  return (
    <main role="main" className="main-template">
      <article>
        <div className="inner-wrap">
          <header className="driver-profile">
            <section className="profile">
              <figure className="title-driver">
                <div className="driver-image">
                  <img
                    src={
                      driverDetails.photo
                        ? driverDetails.photo[1]
                        : "loading..."
                    }
                    alt="driver_pic"
                  />
                </div>
              </figure>
            </section>
            <section className="stats">
              <div className="list-container">
                <table className="stats-list">
                  <tbody>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Name</span>
                      </th>
                      <td className="stat-value">{driverDetails.name}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Country</span>
                      </th>
                      <td className="stat-value">{driverDetails.country}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Team</span>
                      </th>
                      <td className="stat-value">{driverDetails.team}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Number</span>
                      </th>
                      <td className="stat-value">
                        {driverDetails.number
                          ? driverDetails.number[0]
                          : "loading..."}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Podiums</span>
                      </th>
                      <td className="stat-value">{driverDetails.podiums}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Total Points</span>
                      </th>
                      <td className="stat-value">
                        {driverDetails.pointsHistory + driverDetails.currPoints}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>World Championships</span>
                      </th>
                      <td className="stat-value">
                        {driverDetails.worldChamp === 0
                          ? "N/A"
                          : driverDetails.worldChamp}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Date of birth</span>
                      </th>
                      <td className="stat-value">{driverDetails.dateBirth}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="stat-key">
                        <span>Place of birth</span>
                      </th>
                      <td className="stat-value">{driverDetails.placeBirth}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </header>
          <section className="driver-biography">
            <div className="bio-title">
              <h3>Biography</h3>
            </div>
            <div className="bio-text">
              <p>{driverDetails.bio}</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
