import React from 'react';

// props from app component to manage courser and delete course
const CourseList = ({ courses, deleteCourse }) => {
  return (
    <>
        {/* course list */}
          <div className='text-center mb-4 border-t border-gray-200 pb-4'>
            <h1 className="text-4xl font-bold mt-4 text-blue-400">Courses</h1>
            <p className="text-gray-900 text-xl font-semibold">List of available courses</p>
          </div>
          {/* grid courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white p-4 rounded-lg shadow-md">
              {/* info course */}
              <div className="p-4">
                <h3 className="text-3xl font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
                <p className="text-sm font-medium text-gray-700 mt-2 "><b>Instructor Name:</b>{course.instructor}</p>
                {/* duration */}
                    <p className="text-sm font-medium text-gray-700 mt-2">
                        <b>Duration:</b> {course.duration}
                    </p>
                {/* button add & delete */}
                <div className="mt-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => deleteCourse(course.id)} // Deletes the course on click
                    className="bg-red-500 text-white px-4 py-2 ml-2 rounded-md hover:bg-red-600 transition cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default CourseList;
