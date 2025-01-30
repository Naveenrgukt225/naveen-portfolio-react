import React from 'react';
import SkillImg from '../assets/asset 2.png';
import './style.css'; // Import the CSS file

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 84 },
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 80 },
    { name: 'NextJs', level: 60 },
  ];

  return (
    <section className={`skills-section ${darkMode ? 'dark' : ''}`} id="skills">
      <div className="skills-container">
        <h2 className={`skills-title ${darkMode ? 'dark' : ''}`}>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3 className={`skill-name ${darkMode ? 'dark' : ''}`}>{skill.name}</h3>
              <div className={`skill-bar ${darkMode ? 'dark' : ''}`}>
                <div
                  className={`skill-progress ${darkMode ? 'dark' : ''}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={SkillImg} alt="Developer Illustration" className="skills-image" />
    </section>
  );    
};

export default Skills;
