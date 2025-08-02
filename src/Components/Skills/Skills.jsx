import React from 'react';
import wordpressLogo from '../../assets/wordpress.png'; // Adjust path if needed
import reactlogo from '../../assets/react logo.png';
import phplogo from '../../assets/php logo.png';
import javascriptlogo from '../../assets/javascript logo.png';
import htmllogo from '../../assets/java logo.png';
import figmalogo from '../../assets/figma.png';


import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-circles">
        {/* Circle 1 */}
        <div className="skill-circle">
          <img src={wordpressLogo } alt="Logo 1" className="skill-logo" />
        </div>
        {/* Circle 2 */}
        <div className="skill-circle">
          <img src={reactlogo} alt="Logo 2" className="skill-logo" />
        </div>
        {/* Circle 3 */}
        <div className="skill-circle">
          <img src={phplogo} alt="Logo 3" className="skill-logo" />
        </div>
        {/* Circle 4 */}
        <div className="skill-circle">
          <img src={javascriptlogo} alt="Logo 4" className="skill-logo" />
        </div>
        {/* Circle 5 */}
        <div className="skill-circle">
          <img src={htmllogo} alt="Logo 5" className="skill-logo" />
        </div>
        {/* Circle 6 */}
        <div className="skill-circle">
          <img src={figmalogo} alt="Logo 6" className="skill-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
