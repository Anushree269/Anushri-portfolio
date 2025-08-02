import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-container">
      
      {/* Contact Information */}
      <div className="contact-left">
        <h2>Contact me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>91- 9022275035</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Mahalunge, Baner, Pune, Maharashtra</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>anushreegolde20@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
        </form>
      </div>
       
    </div>
  );
};

export default ContactSection;
