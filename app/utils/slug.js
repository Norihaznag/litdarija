// utils/slug.js
export const createSlug = (title, instructor, id) => {
  const cleanText = (text) => text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const cleanTitle = cleanText(title);
  const cleanInstructor = cleanText(instructor);
  
  return `${cleanTitle}-by-${cleanInstructor}-${id}`;
};