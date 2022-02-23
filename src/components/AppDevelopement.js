import React from "react";
import ScrollToTop from "./ScrollToTop";

const AppDevelopement = () => {
  return (
    <div className="bg-[#001220] text-white text-lg">
      <ScrollToTop />
      <h1 className="text-center py-8 text-3xl font-medium tracking-wide font-serif ">
        APP DEVELOPEMENT
      </h1>
      <div className=" pb-12 text-justify p-6 lg:w-4/5 mx-auto ">
        <p>
          Our professionals have enough experience that we develop apps after
          having a proper deep research and analysis. We tend to perceive your
          business requirements and deliver accordingly! There's a lot of
          hardwork and effort which goes on behind the scenes but we never fail
          to deliver our best services to our customers! What are you waiting
          for then?
        </p>
        <p className="font-medium text-amber-300 mt-4">
          SCALE UP YOUR ORGANISATION BY HAVING YOUR OWN APP AND LET OTHERS KNOW
          WHAT POTENTIAL LIES WITHIN YOU..
        </p>
      </div>
      <h1 className="text-center py-8 text-2xl p-3 font-medium">
        Have a look at some of our happy customer's app!
      </h1>
      <div className=" bg-teal-500 text-white lg:flex items-center justify-around lg:p-11 py-6">
        <img src="images/iphone1.png" alt="" className="mx-auto lg:mx-0" />
        <p className="my-4  w-4/5 mx-auto lg:mx-0 lg:w-2/4">
          <h2 className="text-center text-xl my-2 lg:text-6xl lg:my-6">
            STUDENT ERP
          </h2>
          <p className="text-justify">
            This app is made with java and is for student data management
            system. Data is stored and fetched and displayed on the dashboard of
            the student which ultimately results in less of paper work.
          </p>
        </p>
      </div>
      <div className=" bg-fuchsia-500 text-white lg:flex flex-row-reverse items-center justify-around lg:p-11 py-6 ">
        <img src="images/iphone2.png" alt="" className="mx-auto lg:mx-0" />
        <p className="my-4  w-4/5 mx-auto lg:mx-0 lg:w-2/4">
          <h2 className="text-center text-xl my-2 lg:text-6xl lg:my-6">
            ATTENDANCE MANAGEMENT
          </h2>
          <p className="text-justify">
            As the name is suggesting , this app is also made with java and is
            for management of attendace of students and teachers. This app is
            very benificial for tracking the attendace and will also give the
            present and absent percentage.
          </p>
        </p>
      </div>
    </div>
  );
};

export default AppDevelopement;
