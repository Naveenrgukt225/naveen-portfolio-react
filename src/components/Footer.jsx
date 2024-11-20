import React from 'react';
import './style.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Created By Naveen | All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/bhukya-naveen-563b04329/" target="_blank" className="social-link"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Naveenrgukt225/" target="_blank" className="social-link"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/mr_naveennaik_7/" target="_blank" className="social-link"><i className="fab fa-instagram"></i></a>
          <a href="https://youtube.com/@ipsnaveennayak6702/" target="_blank" className="social-link"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;