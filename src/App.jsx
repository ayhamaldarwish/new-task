import React, { useState } from 'react';
import CourseList from './components/CourseList';
import AddCourseForm from './components/AddCourseForm';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

// course data
const CoursesData = [
  { id: 1, title: 'introduction to react', description: 'Learn React basics', instructor: 'Jane Smith', category: 'programming', duration: '3 months' },
  { id: 2, title: 'advanced javaScript', description: 'Deep dive into JS', instructor: 'Jane Smith', category: 'programming', duration: '8 weeks' },
  { id: 3, title: 'web development', description: 'Learn HTML, CSS, JS', instructor: 'Jane Smith', category: 'web', duration: '6 months' },
  { id: 4, title: 'UI/UX Design', description: 'Master Figma and Adobe XD', instructor: 'John Doe', category: 'design', duration: '5 months' },
  { id: 5, title: 'Data Structures', description: 'Learn DS and Algorithms', instructor: 'John Doe', category: 'programming', duration: '4 months' },
  { id: 6, title: 'Modern CSS', description: 'CSS3 and Flexbox', instructor: 'John Doe', category: 'web', duration: '2 months' },
];

const App = () => {
  // State for storing the list of courses using the courses data
  const [courses, setCourses] = useState(CoursesData);
  // State for storing the searchItem
  const [searchItem, setSearchItem] = useState('');
  // State for storing the selected category
  const [category, setCategory] = useState('');

  // Filter the courses based on the searchItem and selected category
  const filterCourses = courses.filter(course => 
    (category === '' /* display all the course becz no category selected */ || course.category === category /* Select the value classified under the selected category  */) // filter based on category
    && 
    course.title.includes(searchItem) // filter based on searchItem
  );

  // add a new course
  const addCourse = (newCourse) => {
    setCourses([...courses /* all previous courses will be copied to the new array */, 
      {...newCourse /* add all values to new course(id-title....) */, id: courses.length + 1 /* add new id */ }]);
  };

  // delete a course based on its id
  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id)); // يتم البحث عن الكورس بid  ويتم حذفه
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
          {/* Hero section with search and category filters */}
          <Hero searchItem={searchItem} setSearchItem={setSearchItem} category={category} setCategory={setCategory} />
          
          {/* List of courses filtered based on search and category */}
          <CourseList courses={filterCourses} deleteCourse={deleteCourse} />
          
          {/* Form to add a new course */}
          <AddCourseForm addCourse={addCourse} />
      </div>
    </div>
  );
};

export default App;
