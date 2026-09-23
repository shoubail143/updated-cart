import React from "react";
import blog from "../assets/blog.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0px bg-white w-full ml-0">
      <div className="flex max-w-7xl px-8 mx-auto p-10 gap-200 mt-0 ">
        <img src={blog} alt="blog" className="w-35 h-35 mt-0" />
        <div className="flex items-center gap-7">
          <Link
            to="/Home"
            className="text-gray-800 font-medium hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            to="/Course"
            className="text-gray-800 font-medium hover:text-blue-500 transition"
          >
            Courses
          </Link>
          <Link
            to="/Login"
            className="text-white font-medium p-2 rounded-md bg-blue-500 hover:bg-blue-400 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
