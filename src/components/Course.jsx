import React, { useState } from "react";

const FreeCourses = ({ freeCourse }) => {
  return (
    <>
      <h2>Free cousre: {freeCourse}</h2>
    </>
  );
};

const PaidCourses = ({ paidCourse }) => {
  return (
    <>
      <h2>paid cousre: {paidCourse}</h2>
    </>
  );
};
const [freeCourse] = useState("HTML CSS JS");
const [paidCourse] = useState("REACT JS NODE JS");
return (
  <div>
    Our Courses
    <PaidCourses paidCourse={freeCourse} />
    <FreeCourses freeCourseourse={paidCourse} />
  </div>
);

export default Course;
