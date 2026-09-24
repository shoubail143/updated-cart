import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center bg-slate-100 h-screen w-full m-auto">
      <div className="items-center text-center max-w-7xl bg-white p-20 shadow-xl hover:shadow-gray-400 rounded-md ">
        <h2 className="font-bold text-center text-2xl text-blue-500 mb-8">
          Sign up
        </h2>
        <br />
        <input
          placeholder="username"
          type="text"
          className="border border-gray-400  text-gray-600 p-2 mt-5 mb-3 "
        />
        <br />
        <input
          className="border border-gray-400  text-gray-600 p-2 mt-5 mb-3 "
          placeholder="Email"
          type="email"
        />
        <br />
        <input
          className="border border-gray-400  text-gray-600 p-2 mt-3 mb-3 "
          placeholder="Password"
          type="password"
        />
        <br />
        <button className="text-white bg-blue-500 hover:bg-blue-700 mt-2 mb-3 px-3 py-2 rounded-md">
          Sign Up
        </button>
        <p className="text-gray-800 text-l">
          Don't have account{" "}
          <Link className="text-blue-500 hover:underline" to="/Login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
