import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = ({ searchTerm, setSearchTerm, category, setCategory }) => {
  return (
    <div className="relative bg-gradient-to-b py-30 px-4 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Develop your skills with <span className="text-blue-400">TECH</span> Academy of Programming
        </h2>
        <p className="text-gray-500 text-xl mt-3">
          Find the best courses and skills in platform
        </p>

        {/* Search Box */}
        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center bg-white shadow-lg rounded-full overflow-hidden w-full max-w-2xl focus-within:ring-2 focus-within:ring-blue-300">
            <select
              className="text-gray-600 text-sm px-4 py-3 rounded-l-full focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Courses</option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="web">Web</option>
            </select>
            <input
              type="text"
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
