import React from "react";

const TrainingCard = ({ title, ad1, ad2, ad3, ad4, ad5 }) => {
  return (
    <div className="grid justify-items-center w-full p-4 ">
      <h1 className="my-3 text-2xl font-medium">{title}</h1>
      <p className="text-lg w-full ">
        - {ad1}. <br />- {ad2}. <br /> - {ad3}. <br /> - {ad4}.
        <br />- {ad5}.
      </p>
    </div>
  );
};

export default TrainingCard;
