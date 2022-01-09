import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/room">Room</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
