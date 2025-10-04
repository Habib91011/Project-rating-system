import React, { useEffect, useState } from 'react';
import { API_URL } from './api';
import ProjectForm from './Components/ProjectForm';
import ProjectView from './Components/ProjectView';
import ProjectList from './Pages/ProjectList';

function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', image: '', rating: 0 });
  const [editingId, setEditingId] = useState(null);
  const [viewProject, setViewProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch(${API_URL}/projects);
    const data = await res.json();
    setProjects(data);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? ${API_URL}/projects/${editingId} : ${API_URL}/projects;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setForm({ name: '', description: '', image: '', rating: 0 });
    setEditingId(null);
    fetchProjects();
  };

  const handleEdit = project => {
    setForm({
      name: project.name,
      description: project.description,
      image: project.image,
      rating: project.rating,
    });
    setEditingId(project.id);
  };

  const handleDelete = async id => {
    if (window.confirm('האם אתה בטוח שברצונך למחוק את הפרויקט?')) {
      await fetch(${API_URL}/projects/${id}, { method: 'DELETE' });
      fetchProjects();
    }
  };

  const handleRate = async id => {
    await fetch(${API_URL}/projects/${id}/rate, { method: 'POST' });
    fetchProjects();
    if (viewProject && viewProject.id === id) {
      const res = await fetch(${API_URL}/projects/${id});
      const data = await res.json();
      setViewProject(data);
    }
  };

  if (viewProject) {
    return (
      <ProjectView
        project={viewProject}
        onRate={handleRate}
        onBack={() => setViewProject(null)}
      />
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>ניהול פרויקטים</h1>
      <ProjectForm
        form={form}
        editingId={editingId}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        onCancel={() => {
          setEditingId(null);
          setForm({ name: '', description: '', image: '', rating: 0 });
        }}
      />
      <ProjectList
        projects={projects}
        onView={setViewProject}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
