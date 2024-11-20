import React from 'react';
import DevImg from '../assets/asset 0.png';
import './style.css'; // Import the CSS file

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className={`hero-section ${darkMode ? 'dark' : ''}`}>
      <div className="hero-container">
        <div className="contents-hero">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bhukya-naveen-563b04329/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Naveenrgukt225/" target="_blank" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/mr_naveennaik_7/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@ipsnaveennayak6702/" target="_blank" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="name-highlight">Naveen</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer</h2>
            <p className="hero-description">
              I design web applications for my clients and company. If you want to make your website, contact me.
            </p>
            <a href="#contact">
              <button className="contact-button">Contact Me</button>
            </a>
          </div>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
