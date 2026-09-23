import React from "react";

const Hero = () => {
  return (
    <section className="py-15 bg-gray-100">
      <div className="items-center text-gray-700 text-center text-3xl mt-0">
        <h1>
          Welcome to
          <span className="font-bold text-blue-500 p-2">BlogVerse</span>
        </h1>
        <p className="text-md text-gray-700">
          Explore blogs on Lifestyle , Education , Programming & Many more
        </p>
        <br />
        <button className="bg-blue-500 text-white p-2 rounded-md ">
          Explore Now!
        </button>
      </div>
    </section>
  );
};

export default Hero;
