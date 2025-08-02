import React from 'react';
import './About.css';
import anuv3 from '../../assets/anu8.mp4'; 

const About = () => {
  return (
    <div className="about-container">
      <video autoPlay muted className="about-video">
        <source src={anuv3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          I began my UX journey with a passion for intuitive, people-first design. Over the past year at Infobytes Technosys, I’ve worked on products like Paytrakz, a Diary app, and the company website, gaining hands-on experience in research, prototyping, and accessibility.

At the same time, I’ve been teaching UX design at INSD, helping students understand user-centric design principles. I’m now looking to grow further in a remote or hybrid role, preferably onsite near Pune
        </p>
        <h3>Education</h3>
        <div className="education-timeline">
          <div className="education-item">
            <h4>Bachelor of Computer Application (BCA)</h4>
            <p>RDG Women's College, Akola</p>
            <span>2019 - 2022</span>
          </div>

          <div className="education-item">
            <h4>Master of Computer Application (MCA)</h4>
            <p>Suryadatta Institute of Business Management, Pune</p>
            <span>2022 - 2024</span>
          </div>
        </div>
      </div>
     
      
    </div>
  );
};

export default About;
