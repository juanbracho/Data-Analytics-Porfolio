// Create a simple carousel for Assignments
import React from 'react';

const assignments = [
  'Excel', 'VBA', 'Python', 'Data Analysis w/ Python', 'Data Visualization w/ Python', 
  'Python APIs', 'SQL', 'Advanced SQL', 'Data Collection', 'NoSQL Databases',
  'Interactive Visualizations', 'Mapping', 'Tableau', 'Unsupervised Learning', 
  'Supervised Learning', 'Neural Networks and Deep Learning', 'Big Data'
];

const AssignmentsCarousel = () => {
  return (
    <section className="carousel">
      <h2>Assignments</h2>
      <div className="carousel__container">
        {assignments.map((assignment, index) => (
          <div key={index} className="carousel__item">
            <div className="carousel__placeholder">[Placeholder Image]</div>
            <p>{assignment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssignmentsCarousel;
