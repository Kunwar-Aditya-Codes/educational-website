import React from "react";
import ScrollToTop from "./ScrollToTop";

const WebDevelopement = () => {
  return (
    <div className="text-lg">
      <ScrollToTop />
      <h1 className="text-center py-8 text-3xl font-medium tracking-wide font-serif ">
        WEB DEVELOPEMENT
      </h1>
      <div className=" pb-12 text-justify p-6 lg:w-4/5 mx-auto ">
        <p>
          Our professionals have enough experience that we develop website after
          having a proper deep research and analysis. We tend to perceive your
          business requirements and deliver accordingly! There's a lot of
          hardwork and effort which goes on behind the scenes but we never fail
          to deliver our best services to our customers! What are you waiting
          for then?
        </p>
        <p className="font-medium text-sky-600 mt-4">
          SCALE UP YOUR ORGANISATION BY HAVING YOUR OWN WEBSITE AND LET OTHERS
          KNOW WHAT POTENTIAL LIES WITHIN YOU..
        </p>
      </div>
      <h1 className="text-center py-8 text-2xl p-3 font-medium">
        Have a look at some of our happy customer's app!
      </h1>
      <div className=" bg-cyan-500 text-white lg:flex items-center justify-around lg:p-11 py-6">
        <img src="images/computer1.png" alt="" className="mx-auto lg:mx-0" />
        <p className="my-4  w-4/5 mx-auto lg:mx-0 lg:w-2/4">
          <h2 className="text-center text-xl my-2 lg:text-6xl lg:my-6">
            TESLA CLONE
          </h2>
          <p className="text-justify">
            Tech used to make this beautiful clone of TESLA is react - the best
            framework of Javascript and a very popular one. We have also used
            styled-components for designing and styling of the website and we
            have also made use of animation and it is full mobile responsive.
          </p>
        </p>
      </div>
      <div className=" bg-pink-500 text-white lg:flex flex-row-reverse items-center justify-around lg:p-11 py-6 ">
        <img src="images/computer2.png" alt="" className="mx-auto lg:mx-0" />
        <p className="my-4  w-4/5 mx-auto lg:mx-0 lg:w-2/4">
          <h2 className="text-center text-xl my-2 lg:text-6xl lg:my-6">
            HULU CLONE
          </h2>
          <p className="text-justify">
            A website that fulfills entertainment needs of a person! We have
            built that too. The tech stack we have used is Next.js and Tailwind
            Css. Next.js provides SSR(server side-rendering) which helps your
            website function fast and smooth.
          </p>
        </p>
      </div>
    </div>
  );
};

export default WebDevelopement;
