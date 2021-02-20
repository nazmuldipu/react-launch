import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { navTree } from '../../data/dashNavData';
import auth from '../../services/authServices';

const DashNavbar = () => {
  
  function renderDropDown(sn) {
    return (
      <NavDropdown.Item as={NavLink} to={sn.path} key={sn.path}>
        {sn.label}
      </NavDropdown.Item>
    );
  }

  function renderNav(nav) {
    if (!nav.subNav.length) {
      return (
        <Nav.Link as={NavLink} to={nav.path} key={nav.path}>
          {nav.label}
        </Nav.Link>
      );
    } else {
      return (
        <NavDropdown title={nav.label} id="basic-nav-dropdown" key={nav.label}>
          {nav.subNav.map((sn) => {
            return !(sn.roles && sn.roles.length)
              ? renderDropDown(sn)
              : auth.hasAuthority(sn.roles)
              ? renderDropDown(sn)
              : null;
          })}
        </NavDropdown>
      );
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="dash-logo" src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navTree.map((nav) => {
            return !(nav.roles && nav.roles.length)
              ? renderNav(nav)
              : auth.hasAuthority(nav.roles)
              ? renderNav(nav)
              : null;
          })}
        </Nav>

        <Nav>
          <Nav.Link onClick={() => auth.logout()}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashNavbar;
