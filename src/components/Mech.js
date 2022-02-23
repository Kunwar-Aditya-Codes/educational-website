import React from "react";
import CourseCard from "./CourseCard";
import ScrollToTop from "./ScrollToTop";
import { BsDropletHalf, BsUiRadios } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { AiFillSetting, AiOutlineHeatMap } from "react-icons/ai";
import { BiError } from "react-icons/bi";

const Mech = () => {
  return (
    <div className="bg-[#001220] text-white py-12 ">
      <ScrollToTop />
      <div className="text-justify w-4/5 mx-auto">
        <h1 className="text-center text-4xl font-semibold text-teal-600 underline py-5">
          Services
        </h1>
        <p className="text-lg">
          Assignment Help,Ph.D. Thesis Development,Paper Publishing in all
          international journals.Complete Source code will be provided.Support
          will be provided till submission.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <FaTemperatureHigh className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Thermodynamics"}
            description={
              "Thermodynamics is a branch of physics that deals with heat, work, and temperature, and their relation to energy, radiation, and physical properties of matter."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsDropletHalf className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Fluid Mechanics"}
            description={
              "Fluid mechanics is the study of fluid behavior (liquids, gases, blood, and plasmas) at rest and in motion. Fluid mechanics has a wide range of applications in mechanical and chemical engineering, in biological systems, and in astrophysics."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <AiFillSetting className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Manufacturing Technology"}
            description={
              "Manufacturing technology is a term that can refer to a number of modern methods of science, production, and engineering that assist in industrial production and various manufacturing processes."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BiError className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Dynamics of Machinery"}
            description={
              "Machine dynamics refer to the study of a system's motion based on the forces acting on the system. Machine dynamics apply knowledge of engineering mechanics, especially dynamics, to the problems of real machines."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsUiRadios className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Control Systems"}
            description={
              "A control system is a system, which provides the desired response by controlling the output. The following figure shows the simple block diagram of a control system. Here, the control system is represented by a single block."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <AiOutlineHeatMap className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Heat & Mass Transfer"}
            description={
              "Heat conduction in solid materials with and without internal heat sources. Basics of hydrodynamics. Conservation laws for fluid mass and momentum. Mass transfer. Thermal radiation (radiation heat transfer)."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Mech;
