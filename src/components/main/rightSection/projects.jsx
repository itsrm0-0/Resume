import React from "react";

const Projects = () => {
  return (
    <section className="projects-section ">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3 className="project-title font-bold ">Resume Website (React)</h3>
          <p className="project-description">
          I built a professional resume website using React
          </p>
        </div>
        <div className="project-card">
          <h3 className="project-title font-bold ">Breakfast Menu (JavaScript)</h3>
          <p className="project-description">
          I developed a dynamic breakfast menu app using JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
