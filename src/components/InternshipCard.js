import React from "react";

const InternshipCard = ({ title, p1, time }) => {
  return (
    <div className="border text-justify rounded-md p-4 w-[95%] mx-auto my-2 flex justify-between">
      <div className=" w-2/3">
        <h1 className="my-1 bg-white text-black rounded-md p-2 text-xl font-medium underline underline-offset-2 ">
          {title}
        </h1>
        <p className="mt-3 text-lg text-slate-300">{p1}</p>
        <p className="my-1 text-lg">Time : {time} months</p>
      </div>
      <button className="text-xl font-medium bg-gradient-to-r hover:scale-110 transition ease-linear duration-200 from-[#FA7268] to-[#C62368]  px-3 rounded-md ">
        Apply
      </button>
    </div>
  );
};

export default InternshipCard;
