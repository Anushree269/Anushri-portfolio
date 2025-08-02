import React, { useEffect, useRef } from 'react';
import './Home.css';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Project from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../Footer/Footer';
import anuVideo from '../../assets/anuv4.mp4';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const sectionAnimation = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' }
  }
};

const Home = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="home-container" ref={sectionRef}>
        <div className="home-left">
          <h1><span className="cursive">W</span>elcome to My Portfolio</h1>
          <p>
            UX Designer with 1 year of experience at Infobytes Technosys, working on Paytrakz, a Diary app, and the company website.
            Also a Lecturer at INSD, guiding students in UX design fundamentals. Open to remote or hybrid roles, preferably onsite near Pune.
          </p>
          <a href="/Anushree-resume.pdf" download className="download-btn">
            <FaDownload className="download-icon" />
            Download Resume
          </a>
        </div>

        <div className="home-video-container">
          <video
            className="home-video"
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
          >
            <source src={anuVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Other animated sections */}
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <About />
      </motion.div>
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Skills />
      </motion.div>
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Experience />
      </motion.div>
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Project />
      </motion.div>
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
