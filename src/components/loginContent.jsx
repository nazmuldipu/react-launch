import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const LoginContent = () => {
  return (
    <React.Fragment>
      <div className="row bg-primary-color py-md-5 pb-3">
        <div className="offset-2 col-8 p-3">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="offset-md-2 col-md-8">
          <div className="row">
            <div className="col-3">
              <a
                className="nav-link p-0"
                href="https://www.hotelswave.com/hotels"
                target="_blank"
              >
                HOTEL
              </a>
            </div>
            <div className="col-3">
              <a
                className="nav-link p-0"
                href="https://www.hotelswave.com/flight"
                target="_blank"
              >
                FLIGHT
              </a>
            </div>
            <div className="col-3">
              <a
                className="nav-link p-0"
                href="https://www.hotelswave.com/ships"
                target="_blank"
              >
                SHIPS
              </a>
            </div>
            <div className="col-3">
              <a
                className="nav-link p-0"
                href="https://www.hotelswave.com/address"
                target="_blank"
              >
                SHIPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginContent;
