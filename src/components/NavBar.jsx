import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  // State to mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the mobile menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-slate-700 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center">
            <svg className="h-8 w-8 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div className="text-xl font-bold">
              <span className="text-blue-400">TECH</span> Academy 
            </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-blue-300 hover:border-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300 hover:border-blue-300">About</a>
          <a href="#" className="hover:text-blue-300 hover:border-blue-300">Contact</a>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition duration-300 cursor-pointer">Join</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <IoMenu className="text-3xl"/>
        </button>
      </div>

      {/* Mobile Menu responsive */}
      <div className={`md:hidden overflow-hidden transition-all duration-300  ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4">
          <button className="bg-blue-500 hover:bg-blue-600 w-full py-2 px-5 rounded mt-2">Join Now</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;




