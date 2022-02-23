import React from "react";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  return (
    <div className="bg-[#001220] text-white min-h-screen grid">
      <ScrollToTop />
      <h1 className="text-center text-amber-300  text-3xl my-auto  lg:text-4xl font-serif py-6 uppercase tracking-widest">
        Get to know us!
      </h1>
      <p className="text-justify px-6  pb-10  text-lg md:w-2/3 mx-auto lg:w-1/2 lg:text-xl">
        To create a world of opportunities in which the students could explore
        and identify their domain of passion and transform it into a dream and
        booming career. To provide best in class, creative, unique Software
        Solutions that can solve all our client’s business problems that they
        face on day to day bases. We provide software & solutions for companies
        of all sizes and all industry sectors. We thrive in achieving excellence
        in providing the best IT solutions to our clients so that they can meet
        their business needs in the most effective and efficient way.
      </p>
      <p className="text-justify px-6  pb-10  text-lg mx-auto">
        <p className="text-center text-amber-300 text-3xl my-auto   lg:text-4xl font-serif py-6 uppercase tracking-widest">
          ADDRESS
        </p>
        Near Bombay Hotel, Kalaburgi (GULBARGA) – 585104, Karnataka .
      </p>
    </div>
  );
};

export default About;
