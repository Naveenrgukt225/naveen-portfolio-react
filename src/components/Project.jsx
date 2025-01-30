import React, { useState } from 'react';
import p1 from '../assets/walpaperPet.jpg';
import p2 from '../assets/asset 4.png';
import p3 from '../assets/asset 6.png';
import p4 from '../assets/asset 7.png';
import p5 from '../assets/asset 8.png';
import { FaLink } from 'react-icons/fa';
import './style.css'; // Import the CSS file

// Sample portfolio data with links
const portfolioData = [
  { id: 1, title: 'Project 1', category: 'Website', image: p1, link: 'http://localhost:8080/PetShop/petIndex.jsp' },
  { id: 2, title: 'Project 2', category: 'Application', image: p2, link: 'https://www.google.com' },
  { id: 3, title: 'Project 3', category: 'Website', image: p3, link: 'https://www.google.com' },
  { id: 4, title: 'Project 4', category: 'Application', image: p4, link: 'https://www.google.com' },
  { id: 5, title: 'Project 5', category: 'Website', image: p5, link: 'https://www.google.com' },
];

const Project = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio = activeFilter === 'All' ? portfolioData : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section className={`portfolio-section ${darkMode ? 'dark' : ''}`} id="portfolio">
      <div className="portfolio-container">
        <h2 className={`portfolio-title ${darkMode ? 'dark' : ''}`}>Projects</h2>
        
        {/* Filter buttons */}
        <div className="filter-buttons">
          {['All', 'Website', 'Application'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-button ${activeFilter === filter ? 'active' : ''} ${darkMode ? 'dark' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="portfolio-items">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              className={`portfolio-item ${darkMode ? 'dark' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`portfolio-image ${hoveredItem === item.id ? 'opacity-50' : ''}`}
              />
              {hoveredItem === item.id && (
                <a
                  href={item.link} // Link to the project's URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-overlay"
                >
                  <FaLink /> View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
