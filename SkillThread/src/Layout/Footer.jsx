import React from "react";
import "./Footer.css";
import { FaGlobe, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div><br />
          <p>© 2024 SkillThread. Exchange Skills, Empower Lives.</p>
        </div>

        {/* Center */}
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Support</a>
          <a href="/">Community Guidelines</a>
        </div>

        {/* Right */}
        <div className="footer-social">
          <a href="/">
            <FaGlobe />
          </a>

          <a href="/">
            <FaRegEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
