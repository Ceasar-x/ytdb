import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.jpg"


const Navbar = () => {
  const location = useLocation(); // Get the current path

  const handleLinkClick = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.remove("open");
  };

  const isActive = (path) => location.pathname === path; // Check if the current path matches the link's path

  return (
    <nav className="navbar">
      <div className="container1">
        <div id="na">
          <div id="brand-holder">
            <Link to="/" className="brand">
              <img src={logo} alt="" />
              <h1>Young Tajudeen (Y.T.D.) Primary School "B" Ojoro, Ede.</h1>
            </Link>
          </div>
          <button className="navbar-toggler" onClick={toggleMenu}>
            <span className="navbar-toggler-icon">
              <FaBars className="menu-icon" />
            </span>
          </button>
        </div>
        <div className="nav-links">
          <Link
            to="/"
            onClick={handleLinkClick}
            className={isActive("/") ? "active-link" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className={isActive("/about") ? "active-link" : ""}
          >
            About Us
          </Link>
          <Link
            to="/classes"
            onClick={handleLinkClick}
            className={isActive("/classes") ? "active-link" : ""}
          >
            Classes
          </Link>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={isActive("/contact") ? "active-link" : ""}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Toggle menu functionality
const toggleMenu = () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
};

export default Navbar;
