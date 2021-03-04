import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/cockt.jpg";
import "./Navbar.css"

 function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <img src={logo} alt="cocktail logo" className="logo" />
      </div>
    </nav>
  );
}

export default Navbar;