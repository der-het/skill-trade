import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/">Features</Link>
        <Link to="/">Community</Link>
        <Link to="/">About</Link>
      </nav>
 
      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/Register">
          <button className="register-btn">Register</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
