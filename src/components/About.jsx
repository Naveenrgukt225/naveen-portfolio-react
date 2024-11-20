import React from "react";
import AboutImg from "../assets/asset 1.png";
import './style.css'; // Ensure you import the CSS file

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`about-section ${darkMode ? 'dark' : 'light'}`} 
    >
      <img src={AboutImg} alt="Developer Illustration" className="about-image" />
      <div className="about-container">
        <h2 className="about-title">
          About Me
        </h2>
        <p className="about-description">
          As a web developer, <br /> I am passionate about creating visually
          appealing and user-friendly websites. With expertise in HTML, CSS,
          JavaScript, Bootstrap, and jQuery, I strive to deliver high-quality
          and responsive designs that meet the needs of my clients. I look
          forward to collaborating with you and bringing your web development
          projects to life. Feel free to explore my portfolio and get in touch
          with me to discuss your project requirements.
        </p>
        <button className="download-button">
          <a href="https://drive.google.com/file/d/1mE5SGih0xSEAFJr87yO269ulPDrOcWv5/view?usp=drivesdk" target="__blank">
            Download CV
          </a>
        </button>
      </div>
    </section>
  );
};

export default About;
