import React from "react";

const TestimonialCard = ({ name, title, description }) => {
  return (
    <div className=" w-3/4 mx-auto p-4 rounded-lg bg-teal-600">
      <p className=" text-justify text-md font-semibold">" {description} "</p>
      <p className=" text-justify pt-4 italic text-lg">-{name}</p>
      <p className=" text-justify italic text-lg ">{title} Student</p>
    </div>
  );
};

export default TestimonialCard;
