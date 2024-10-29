// Create a simple carousel for Projects
import React from 'react';

const projects = [
  'Stock Analysis with Python', 'ETL Project', 'Data Visualization with Python', 'Capstone Project TBD'
];

const ProjectsCarousel = () => {
  return (
    <section className="carousel">
      <h2>Projects</h2>
      <div className="carousel__container">
        {projects.map((project, index) => (
          <div key={index} className="carousel__item">
            <div className="carousel__placeholder">[Placeholder Image]</div>
            <p>{project}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
