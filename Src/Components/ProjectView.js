import React from 'react';

function ProjectView({ project, onRate, onBack }) {
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.name} style={{ width: '100%' }} />
      <p>{project.description}</p>
      <p>דירוג: {project.rating}</p>
      <button onClick={() => onRate(project.id)}>דרג +1</button>
      <button onClick={onBack} style={{ marginLeft: 10 }}>
        חזרה לרשימה
      </button>
    </div>
  );
}

export default ProjectView;
