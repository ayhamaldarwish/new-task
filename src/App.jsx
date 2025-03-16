import React, { useState } from 'react';
import CourseList from './components/CourseList';
import AddCourseForm from './components/AddCourseForm';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Introduction to React', description: 'Learn React basics', instructor: 'Ahmed Alami', category: 'programming', duration: '3 months' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS', instructor: 'Jane Smith', category: 'programming', duration: '8 weeks' },
    { id: 3, title: 'Web Development', description: 'Learn HTML, CSS, JS', instructor: 'Ayham Alhelal', category: 'web', duration: '6 months' },
    { id: 4, title: 'UI/UX Design', description: 'Master Figma and Adobe XD', instructor: 'Sara Ali', category: 'design', duration: '5 months' },
    { id: 5, title: 'Data Structures', description: 'Learn DS and Algorithms', instructor: 'John Doe', category: 'programming', duration: '4 months' },
    { id: 6, title: 'Modern CSS', description: 'CSS3 and Flexbox', instructor: 'Alaa Amar', category: 'web', duration: '2 months' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  
  // Filter courses based on search term and category
  const filteredCourses = courses.filter(course => 
    (category === '' || course.category === category) &&
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Add a new course
  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: Date.now() }]);
  };
  
  // Delete a course
  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8 ">
        <main>
          <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} category={category} setCategory={setCategory} />
          <CourseList courses={filteredCourses} deleteCourse={deleteCourse}  />
          <AddCourseForm addCourse={addCourse} />
        </main>
      </div>
    </div>
  );
}

export default App;