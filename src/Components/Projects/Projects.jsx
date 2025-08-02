import React, { useState } from 'react';
import './Projects.css';

const allProjects = [
  { 
    title: 'Paytrakz Dashboard Design', 
    description: 'Paytrakz is an all-in-one Business Management Software designed to simplify and automate essential business operations.', 
    category: 'UI/UX Designers',
    link: 'https://www.figma.com/design/RYyw5Ebhj9dqx0GmKzVSen/PayTrakz_Web?node-id=0-1&t=llz8raklJ4p6q1lx-1' 
  },
  { 
    title: 'Diary App', 
    description: 'Dairy App is a business tool for dairy owners to manage milk deliveries, customers, billing, and payments efficiently.', 
    category: 'UI/UX Designers',
    link: 'https://www.figma.com/design/SLOlZuXg0vARAH1OO0QJNd/Untitled?node-id=0-1&t=zzIsaVxIqCqaB1Nb-1' 
  },
  { 
    title: 'To-Do-List', 
    description: 'A To-Do List Application is a task management tool that helps users organize, prioritize, and track their daily activities or goals', 
    category: 'PHP',
    link: 'https://to-do-list.infy.uk/?i=1' 
  },
  
];

const categories = ['All', 'UI/UX Designers',  'PHP'];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchText.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="project-container">
      <h2>Projects</h2>

      <div className="project-controls">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-title-link"
                >
                  {project.title}
                </a>
              </h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="no-projects-message">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Project;