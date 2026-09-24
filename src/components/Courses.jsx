import React, { useState, useEffect } from "react";
import { use } from "react";

const PaidCourses = ({ course }) => {
  return (
    <div className="bg-gray-100 m-15">
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center ">
        Paid Courses
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {course.map((c) => (
          <div
            className="text-md border border-gray-400 rounded-xl  bg-white shadow-md hover:shadow-xl p-6"
            key={c.id}
          >
            <span className="font-bold text-blue-700 rounded-e-full p-1 bg-blue-300">
              PREMIUM
            </span>
            <h3 className="font-semibold p-2">{c.title}</h3>
            <p className="font-bold text-2xl text-gray-700">$69</p>
            <button className="text-xl py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white mt-2 rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
const FreeCourses = ({ course }) => {
  return (
    <div className="bg-gray-100 m-15">
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center ">
        Free Courses
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {course.map((c) => (
          <div
            className="text-md border border-gray-400 rounded-xl  bg-white shadow-md hover:shadow-xl p-6"
            key={c.id}
          >
            <span className="font-bold text-green-700 rounded-e-full py-2 px-4 bg-green-300">
              Free
            </span>
            <h3 className="font-semibold p-2">{c.title}</h3>
            <p className="font-bold text-2xl text-gray-700">$69</p>
            <button className="text-xl py-2 px-3 bg-green-600 hover:bg-green-700 text-white mt-2 rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data = await response.json();
        setCourse(data.slice(0, 20));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPosts();
  }, []);

  const freecourse = course.filter((course) => !course.completed);
  const paidcourse = course.filter((course) => !course.completed);

  return (
    <div className="mt-5 m-5">
      <PaidCourses course={paidcourse} />
      <FreeCourses course={freecourse} />
    </div>
  );
};

export default Course;
