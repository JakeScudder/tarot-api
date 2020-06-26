import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li className="nav-li">
            <NavLink to="/one">Draw One</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/three">Draw Three</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/four">Draw Four</NavLink>
          </li>
          <li className="nav-li">
            <NavLink to="/celtic">Draw Celtic Cross</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
