let projects = [];
let nextId = 1;

function incrementId() {
  return nextId++;
}

function removeProject(id) {
  const index = projects.findIndex(p => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
}

module.exports = { projects, incrementId, removeProject };
