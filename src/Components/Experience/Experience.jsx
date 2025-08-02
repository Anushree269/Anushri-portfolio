import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>

      <div className="timeline">

        {/* Infobytes Technosys */}
        <div className="timeline-item">
          <div className="timeline-dot">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Infobytes Technosys <span>Feb 2024 - Feb 2025</span></h3>
            <p className="location">(UI/UX Designer) - Pune</p>
            <ul>
              <li>Designed intuitive user interfaces for Infobytes Technosys, ensuring visually appealing and user-friendly web and mobile applications.</li>
              <li>Developed the Paytrakz app dashboard, focusing on an optimized user experience, data visualization, and seamless navigation.</li>
              <li>Created lead generation designs to enhance user engagement and improve conversion rates through strategic UI/UX elements.</li>
              <li>Conducted end-to-end testing on the Paytrakz app, identifying and resolving usability issues to ensure a smooth and error-free user experience.</li>
              <li>Enhanced video editing and motion graphics skills, contributing to engaging promotional content and improving the brand’s digital presence.</li>
            </ul>
          </div>
        </div>

        {/* INSD */}
        <div className="timeline-item">
          <div className="timeline-dot">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="timeline-content">
            <h3>INSD - International School of Design <span>Jan 2025 - Present</span></h3>
            <p className="location">(UI/UX Designer & Lecturer) - Pune</p>
            <ul>
              <li>Trained students in UI/UX design fundamentals, Adobe Photoshop, and WordPress.</li>
              <li>Supervised student design projects and provided mentorship on UX principles.</li>
              <li>Designed and developed the official website of the institute using modern UI/UX practices and responsive design techniques.</li>
              <li>Guided students in designing and deploying their own websites using tools like WordPress, HTML, and CSS.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
