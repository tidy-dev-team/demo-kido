import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="kido-footer">
    <div className="footer-left">
      <span className="footer-logo">Kido</span>
      <span className="footer-copyright">© 2025 Kido. All rights reserved.</span>
    </div>
    <nav className="footer-links">
      <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
      <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
    </nav>
  </footer>
);

export default Footer;
