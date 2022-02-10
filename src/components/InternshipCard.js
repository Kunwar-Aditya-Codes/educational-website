import React from "react";

const InternshipCard = ({ title, p1, time, p2 }) => {
  return (
    <div className="border text-center rounded-md p-4 w-[95%] mx-auto my-2">
      <h1 className="my-1 bg-white text-black rounded-md p-2 text-xl font-medium underline underline-offset-2 ">
        {title}
      </h1>
      <p className="mt-3 text-lg text-slate-300">{p1}</p>
      <p className="mt-3 text-lg text-slate-300">Taught by Industry Expert</p>
      <p className="my-1 text-lg">Time : {time} months</p>
    </div>
  );
};

export default InternshipCard;
