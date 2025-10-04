import React from 'react';

function ProjectCard({ project, onView, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 10,
        cursor: 'pointer',
        textAlign: 'center',
      }}
      onClick={() => onView(project)}
    >
      <img
        src={project.image}
        alt={project.name}
        style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 4 }}
      />
      <h3>{project.name}</h3>
      <p>דירוג: {project.rating}</p>
      <button
        onClick={e => {
          e.stopPropagation();
          onEdit(project);
        }}
        style={{ marginRight: 10 }}
      >
        ערוך
      </button>
      <button
        onClick={e => {
          e.stopPropagation();
          onDelete(project.id);
        }}
      >
        מחק
      </button>
    </div>
  );
}

export default ProjectCard;
