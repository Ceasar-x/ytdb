import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Import the footer-specific styles

import bac from "../../assets/back2.jpg"
import edu from "../../assets/edu.jpg"
import board from "../../assets/board.jpg"

import back from "../../assets/back.jpg"
import logo from "../../assets/logo.jpg"

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save email to localStorage
    localStorage.setItem("newsletterEmail", email);
    // Clear form input after submission
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> PCRV+W2G, Nijhof Advies 232104, Osun
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> +2348035231307
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> ytdschoolb@gmail.com
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </div>

        <div className="footer-section">
          <h3>Photo Gallery</h3>
          <div className="gallery">
            <div className="gallery-item">
              <img src={board} alt="Gallery Image 1" />
            </div>
            <div className="gallery-item">
              <img src={edu} alt="Gallery Image 2" />
            </div>
            <div className="gallery-item">
              <img src={back} alt="Gallery Image 3" />
            </div>
            <div className="gallery-item">
              <img src={logo} alt="Gallery Image 4" />
            </div>
            <div className="gallery-item">
              <img src={bac} alt="Gallery Image 5" />
            </div>
            <div className="gallery-item">
              <img src={edu} alt="Gallery Image 6" />
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Reach Us</h3>
          <p>Enter your email</p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
              className="newsletter-input"
              required
            /><br/>
            <button type="submit" className="newsletter-button">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          &copy; Your Site Name, All Rights Reserved.
        </div>
        <div className="footer-right">
          <div className="footer-menu">
            <Link to="/" className="footer-menu-item">
              Home
            </Link>
            <Link to="/cookies" className="footer-menu-item">
              Cookies
            </Link>
            <Link to="/help" className="footer-menu-item">
              Help
            </Link>
            <Link to="/faqs" className="footer-menu-item">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
