import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/products" className="nav-link">
        Products
      </Link>
    </nav>
  );
};

export default Navbar;
