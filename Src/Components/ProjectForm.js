import React from 'react';

function ProjectForm({ form, editingId, onChange, onSubmit, onCancel }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: 20 }}>
      <input
        name="name"
        placeholder="שם"
        value={form.name}
        onChange={onChange}
        required
        style={{ marginRight: 10 }}
      />
      <input
        name="description"
        placeholder="תיאור"
        value={form.description}
        onChange={onChange}
        required
        style={{ marginRight: 10 }}
      />
      <input
        name="image"
        placeholder="קישור לתמונה"
        value={form.image}
        onChange={onChange}
        required
        style={{ marginRight: 10 }}
      />
      <input
        name="rating"
        type="number"
        placeholder="דירוג"
        value={form.rating}
        onChange={onChange}
        min={0}
        required
        style={{ width: 60, marginRight: 10 }}
      />
      <button type="submit">{editingId ? 'עדכן פרויקט' : 'צור פרויקט'}</button>
      {editingId && (
        <button
          type="button"
          onClick={onCancel}
          style={{ marginLeft: 10 }}
        >
          ביטול
        </button>
      )}
    </form>
  );
}

export default ProjectForm;
