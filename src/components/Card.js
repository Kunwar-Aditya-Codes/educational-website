import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="mt-16 rounded-md shadow-teal-200 border-2 border-teal-600 shadow-lg p-4 w-3/4 mx-auto ">
      <div className="my-auto ">
        <img src={img} alt="" className="w-3/4 mx-auto rounded-md" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold font-serif py-4">{title}</h1>
        <p className="w-3/4 text-left mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default Card;
