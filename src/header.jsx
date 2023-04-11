import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><Link to="./Order.jsx">Order</Link></li>
          <li><Link to="/profile.jsx">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
