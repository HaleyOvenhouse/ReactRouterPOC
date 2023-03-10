import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';


function Nav() {
    return (
        <nav className="Nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;