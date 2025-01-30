import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import "@fontsource/poppins/700.css";
import './style.css';

const Header = ({ darkMode, setDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {  
    setIsNavOpen(prev => !prev);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <h1 className="title">NaveenPortFolio</h1>
        
        <button
          onClick={toggleNav}
          className="toggle-button nav-toggle"
          aria-label="Toggle navigation"
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link" onClick={handleNavLinkClick}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={handleNavLinkClick}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={handleNavLinkClick}>Skills</a></li>
            <li><a href="#portfolio" className="nav-link" onClick={handleNavLinkClick}>Projects</a></li>
            <li><a href="#contact" className="nav-link" onClick={handleNavLinkClick}>Contact</a></li>
          </ul>
        </nav>

        <button
          onClick={() => setDarkMode(prevMode => !prevMode)}
          className="toggle-button dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
