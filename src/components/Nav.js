import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li className="nav-li">
            <NavLink to="/one">One</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/three">Three</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/four">Four</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/celtic">Celtic Cross</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
