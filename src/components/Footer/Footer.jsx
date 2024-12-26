import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h1 className="footer-title">Shree Ganesh Museum</h1>
          <p className="footer-text">
            Discover the rich cultural heritage of Lord Ganesh.
          </p>
        </div>

        <div>
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About Us</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Resources</h2>
          <ul className="footer-links">
            <li><Link to="#faq">FAQ</Link></li>
            <li><Link to="#support">Support</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Follow Us</h2>
          <div className="footer-social-icons">
            <Link to="https://facebook.com" aria-label="Facebook">
              <FaFacebookF size={20} />
            </Link>
            <Link to="https://twitter.com" aria-label="Twitter">
              <FaTwitter size={20} />
            </Link>
            <Link to="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shree Ganesh Museum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
