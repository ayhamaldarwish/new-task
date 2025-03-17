import React, { useState } from 'react';

const AddCourseForm = ({ addCourse }) => {
  // State to store the formdata
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: ''
  });

  // Update formData when entering data in any input
  const handleChange = (e) => {
    setFormData({...formData /* copy of the previous data */,[e.target.name]: e.target.value});
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the addCourse
    addCourse(formData);
    // Reset fields to empty values after adding course
    setFormData({
      title: '',
      description: '',
      instructor: '',
      duration: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-10 border-t-4 border-blue-500">
      {/* Form Title */}
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Add New Course</h2>
      {/* Form to Add a New Course */}
      <form onSubmit={handleSubmit}>
        {/* Course Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-1">Course Title:</label>
          <input type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Description Input */}
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">Description:</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          />
        </div>
        {/* Instructor Name Input */}
        <div className="mb-4">
          <label htmlFor="instructor" className="block font-medium mb-1">Instructor Name:</label>
          <input
            type="text"
            name="instructor"
            required
            value={formData.instructor}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Duration Input */}
        <div className="mb-4">
          <label htmlFor="duration" className="block font-medium mb-1">Duration:</label>
          <input
            type="text"
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Submit Button to Add the Course */}
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
