// Create a simple carousel for Assignments
import React, { useRef } from 'react';
import './AssignmentsCarousel.css';

const assignments = [
  { name: 'Excel', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module1' },
  { name: 'VBA', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module2' },
  { name: 'Python', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module3' },
  { name: 'Data Analysis w/ Python', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module4' },
  { name: 'Data Visualization w/ Python', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module5' },
  { name: 'Python APIs', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module6' },
  { name: 'SQL', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module9' },
  { name: 'Advanced SQL', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module10' },
  { name: 'Data Collection', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module11' },
  { name: 'NoSQL Databases', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module12' },
  { name: 'Interactive Visualizations', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module14' },
  { name: 'Mapping', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module15' },
  { name: 'Tableau', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module18' },
  { name: 'Unsupervised Learning', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module19' },
  { name: 'Supervised Learning', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module20' },
  { name: 'Neural Networks and Deep Learning', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module21' },
  { name: 'Big Data', thumbnail: 'placeholder.png', github: 'https://github.com/juanbracho/UT_Module22' },
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
            <img
              src={assignment.thumbnail}
              alt={`${assignment.name} thumbnail`}
              className="carousel__thumbnail"
              onClick={() => window.open(assignment.github, '_blank')}
            />
            <p>{assignment.name}</p>
          </div>
        ))}
      </div>
      <div className="scroll-button left" onMouseEnter={scrollLeft} />
      <div className="scroll-button right" onMouseEnter={scrollRight} />
    </section>
  );
};

export default AssignmentsCarousel;