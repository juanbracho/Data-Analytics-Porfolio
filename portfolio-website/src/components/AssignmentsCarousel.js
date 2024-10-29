// Create a simple carousel for Assignments
import React, { useRef } from 'react';
import './AssignmentsCarousel.css';

const assignments = [
  'Excel', 'VBA', 'Python', 'Data Analysis w/ Python', 'Data Visualization w/ Python', 
  'Python APIs', 'SQL', 'Advanced SQL', 'Data Collection', 'NoSQL Databases',
  'Interactive Visualizations', 'Mapping', 'Tableau', 'Unsupervised Learning', 
  'Supervised Learning', 'Neural Networks and Deep Learning', 'Big Data'
];

const AssignmentsCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const handleDrag = (e) => {
    let startX = e.clientX;
    let scrollLeft = carouselRef.current.scrollLeft;

    const mouseMove = (e) => {
      const dx = e.clientX - startX;
      carouselRef.current.scrollLeft = scrollLeft - dx;
    };

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  };

  return (
    <section className="carousel">
      <h2>Assignments</h2>
      <div
        className="carousel__container"
        ref={carouselRef}
        onMouseDown={handleDrag}
      >
        {assignments.map((assignment, index) => (
          <div key={index} className="carousel__item">
            <div className="carousel__placeholder">[Placeholder Image]</div>
            <p>{assignment}</p>
          </div>
        ))}
      </div>
      <div className="scroll-button left" onMouseEnter={scrollLeft} />
      <div className="scroll-button right" onMouseEnter={scrollRight} />
    </section>
  );
};

export default AssignmentsCarousel;