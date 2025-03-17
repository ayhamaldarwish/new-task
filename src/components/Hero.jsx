import React from "react";
import { IoSearch } from "react-icons/io5";

// props from app component to manage search and category state
const Hero = ({ searchItem, setSearchItem, category, setCategory }) => {
  return (
    <div className="relative bg-gradient-to-b py-30 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* title section */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Develop your skills with <span className="text-blue-400">TECH</span> Academy of Programming
        </h2>
        <p className="text-gray-500 text-xl mt-3">
          Find the best courses and skills in platform
        </p>

        {/* Search box */}
        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center bg-white shadow-lg rounded-full overflow-hidden w-full max-w-2xl focus-within:ring-2 focus-within:ring-blue-300">
            {/* Dropdown selected */}
            <select
              className="text-gray-600 text-sm px-4 py-3 rounded-l-full focus:outline-none"
              value={category} // Set current value from state
              onChange={(e) => setCategory(e.target.value)} // Update state on change
            >
              <option value="">All Courses</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="web">Web</option>
            </select>
            {/* Input search */}
            <input
              type="text"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
              placeholder="Search..." 
              value={searchItem} // Set the input value 
              onChange={(e) => setSearchItem(e.target.value)} // Update state on change
            />
            {/* Search button */}
            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-4 text-white rounded-r-full transition duration-300 cursor-pointer">
              <IoSearch /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
