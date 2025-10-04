module.exports = function validateProject(data) {
  const { name, description, image, rating } = data;
  if (typeof name !== 'string' || name.trim() === '') return false;
  if (typeof description !== 'string') return false;
  if (typeof image !== 'string' || !image.startsWith('http')) return false;
  if (typeof rating !== 'number' || rating < 0) return false;
  return true;
};
