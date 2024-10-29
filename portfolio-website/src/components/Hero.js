// Set up the file structure
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src="header.png" alt="Profile Picture" />
      </div>
      <div className="hero__about">
        <h1>About Me</h1>
        <p>
          I am a data analyst passionate about extracting insights from data, 
          with experience in Python, SQL, and data visualization tools.
          I am completing a Data Analytics Bootcamp and this portfolio showcases my work.
        </p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/juan-bracho-avila-71250a121/" target="_blank">Juan Bracho Avila</a></p>
      </div>
    </section>
  );
};

export default Hero;