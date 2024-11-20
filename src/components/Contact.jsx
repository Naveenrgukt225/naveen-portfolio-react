import React from 'react';
import './style.css'; // Import the CSS file

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`contact-section ${darkMode ? 'dark' : ''}`}>
      <div className={`contact-container ${darkMode ? 'dark' : ''}`}>
        <h2 className={`contact-title ${darkMode ? 'dark' : ''}`}>Contact</h2>
        <form className={`contact-form ${darkMode ? 'dark' : ''}`}>
          <input type="text" placeholder="Your Name" className={`contact-input ${darkMode ? 'dark' : ''}`} />
          <input type="email" placeholder="Your Email" className={`contact-input ${darkMode ? 'dark' : ''}`} />
          <textarea placeholder="Write Message Here..." className={`contact-textarea ${darkMode ? 'dark' : ''}`} />
          <button className={`contact-button ${darkMode ? 'dark' : ''}`}>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;