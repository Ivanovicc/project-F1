import React from "react";
import { Link } from "react-router-dom";
/* Styles */
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="main-nav">
      <div className="primary-nav">
        <div className="nav-width">
          <div className="primary-links">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/drivers">Drivers</Link>
              </li>
              <li className="nav-item">
                <Link to="/teams">Teams</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <ul className="nav-list">
        <li className="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Drivers">Drivers</Link>
        </li>
        <li className="nav-item">
          <Link to="/Teams">Teams</Link>
        </li>
        <li className="nav-item">
          <Link to="/Circuits">Circuits</Link>
        </li>
      </ul> */}
    </div>
  );
}
