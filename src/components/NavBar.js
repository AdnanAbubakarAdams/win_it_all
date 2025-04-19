import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="" className="nav-links">AddyPages</Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-links">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-links">
              SIGN IN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-links">
              SIGN UP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
