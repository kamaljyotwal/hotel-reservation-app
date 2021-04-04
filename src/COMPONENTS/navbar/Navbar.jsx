import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="/logo.svg" alt="" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setIsopen((current) => !current)}
          >
            <HiMenu className="nav-icon" />
          </button>
        </div>
        <ul className={isopen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
