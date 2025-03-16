import React, { useState } from 'react';

function AddCourseForm({ addCourse }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.instructor.trim()) newErrors.instructor = 'Instructor name is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      addCourse(formData);
      setFormData({
        title: '',
        description: '',
        instructor: '',
        duration: ''
      });
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">Course Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title}</span>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />
          {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description}</span>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="instructor" className="block font-medium mb-1">Instructor Name:</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.instructor && <span className="text-red-500 text-sm mt-1">{errors.instructor}</span>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="duration" className="block font-medium mb-1">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.duration && <span className="text-red-500 text-sm mt-1">{errors.duration}</span>}
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 focus:outline-none"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourseForm;