const { projects, incrementId, removeProject } = require('../data/projectsData');
const validateProject = require('../utils/validateProject');

exports.getAllProjects = (req, res) => {
  res.json(projects);
};

exports.getProjectById = (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
};

exports.createProject = (req, res) => {
  const data = req.body;
  if (!validateProject(data)) {
    return res.status(400).json({ error: 'Invalid project data' });
  }

  const newProject = {
    id: incrementId(),
    name: data.name,
    description: data.description,
    image: data.image,
    rating: data.rating
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

exports.updateProject = (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });

  const data = req.body;
  if (!validateProject(data)) {
    return res.status(400).json({ error: 'Invalid project data' });
  }

  projects[index] = { id, ...data };
  res.json(projects[index]);
};

exports.deleteProject = (req, res) => {
  const id = parseInt(req.params.id);
  const success = removeProject(id);
  if (!success) return res.status(404).json({ error: 'Project not found' });
  res.status(204).send();
};

exports.rateProject = (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(p => p.id === id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  project.rating += 1;
  res.json(project);
};
