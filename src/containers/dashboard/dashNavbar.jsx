import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import auth from "../../services/authServices";

import logo from "../../assets/images/logo.png";

const DashNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="dash-logo" src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/dashboard">
            Dashboard
          </Nav.Link>
          <NavDropdown title="Ship" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/dashboard/ship-add">
              Add
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/dashboard/ships">
              Ships
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/dashboard/ship-map">
              Ship map
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => auth.logout()}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashNavbar;
