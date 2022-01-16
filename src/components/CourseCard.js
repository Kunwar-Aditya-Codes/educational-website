import React from "react";

const CourseCard = ({ title, description }) => {
  return (
    <div className="py-4">
      <h1 className="bg-gradient-to-r from-teal-400 p-2 text-2xl font-serif font-semibold ">
        {title}
      </h1>
      <p className="pt-5">{description}</p>
    </div>
  );
};

export default CourseCard;
