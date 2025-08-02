import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Contact</h3>
        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <span>Mahalunge, Baner, Pune, Maharashtra</span>
        </div>
        <div className="footer-item">
          <FaPhoneAlt className="footer-icon" />
          <span>91- 9022275035</span>
        </div>
        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <span>anushreegolde20@gmail.com</span>
        </div>
      </div>

      <div className="footer-right">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
