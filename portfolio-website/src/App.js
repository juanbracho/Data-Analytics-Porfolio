// Main App Component
import React from 'react';
import Hero from './components/Hero';
import AssignmentsCarousel from './components/AssignmentsCarousel';
import ProjectsCarousel from './components/ProjectsCarousel';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Hero />
      <AssignmentsCarousel />
      <ProjectsCarousel />
    </div>
  );
}

export default App;