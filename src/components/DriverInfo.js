import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import db from "../services/firebaseConfig";

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
    <main>
      <article>
        <div>
          <header>
            <section>
              <figure>
                <div>
                  <img src={driverDetails.photo[1]} alt="driver_pic" />
                </div>
                <figcaption>
                  <div>
                    <span>{driverDetails.number[0]}</span>
                    <span>
                      <img src={driverDetails.countryFlag} alt="driver_flag" />
                    </span>
                  </div>
                  <h1>{driverDetails.name}</h1>
                </figcaption>
              </figure>
            </section>
            <section>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <span>Team</span>
                      </th>
                      <td>{driverDetails.team}</td>
                    </tr>
                    <tr>
                      <th>
                        <span>Country</span>
                      </th>
                      <td>{driverDetails.country}</td>
                    </tr>
                    <tr>
                      <th>
                        <span>Podiums</span>
                      </th>
                      <td>{driverDetails.podiums}</td>
                    </tr>
                    <tr>
                      <th>
                        <span>Points</span>
                      </th>
                      <td>{driverDetails.pointsHistory}</td>
                    </tr>
                    <tr>
                      <th>
                        <span>World Championships</span>
                      </th>
                      <td>
                        {driverDetails.worldChamp === 0
                          ? "N/A"
                          : driverDetails.worldChamp}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span>Date of birth</span>
                      </th>
                      <td>{driverDetails.dateBirth}</td>
                    </tr>
                    <tr>
                      <th>
                        <span>Place of birth</span>
                      </th>
                      <td>{driverDetails.placeBirth}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </header>
        </div>
      </article>
    </main>
  );
}
