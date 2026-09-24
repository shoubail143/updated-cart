import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-300 p-6 transition duration-300 ">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-700 mb-4">{body}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-3">
        Read More →
      </button>
    </div>
  );
};

export default Card;
