import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Nav2 = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <h1 className="text-white  text-3xl font-extrabold antialiased underline decoration-pink-500">Top Courses</h1>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search courses"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none hover:scale-x-105"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>
    </div>
  );
};

export default Nav2;
