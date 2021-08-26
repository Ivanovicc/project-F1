import React from "react";
import { Link } from "react-router-dom";
/* Styles */
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="main-nav">
      <ul className="nav-list">
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
      </ul>
    </div>
  );
}
