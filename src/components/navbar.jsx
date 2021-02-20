import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark homeNavbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" href="/register">
                DASHBOARD
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <Link to="/register" className="nav-link" href="/register">
                REGISTER
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" href="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
