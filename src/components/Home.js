import React from "react";
/* Styles */
import "../Styles/Home.css";
/* Components */
import DriversStandings from "./DriversStandings";

export default function Home() {
  return (
    <main className="App">
      <div className="f1-standings">
        <div className="f1-tab">
          <ul className="tab-list">
            <li className="tab-item">
              <a href="_blank" className="active">
                Drivers
              </a>
            </li>
            <li className="tab-item">
              <a href="_blank" className="active">
                Constructors
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <DriversStandings />
        </div>
      </div>
    </main>
  );
}
