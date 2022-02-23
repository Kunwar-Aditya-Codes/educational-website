import React from "react";
import CourseCard from "./CourseCard";
import ScrollToTop from "./ScrollToTop";
import { BsAlignTop, BsBuilding, BsEasel, BsMask } from "react-icons/bs";
import { GiWaterTank } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";

const Civil = () => {
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
          <BsAlignTop className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Hydraulics"}
            description={
              "Hydraulics (from Greek: Υδραυλική) is a technology and applied science using engineering, chemistry, and other sciences involving the mechanical properties and use of liquids. At a very basic level, hydraulics is the liquid counterpart of pneumatics, which concerns gases."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsMask className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Solid Mechanics"}
            description={
              "Solid mechanics, also known as mechanics of solids, is the branch of continuum mechanics that studies the behavior of solid materials, especially their motion and deformation under the action of forces, temperature changes, phase changes, and other external or internal agents."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsBuilding className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"RC Structures"}
            description={
              "The reinforced concrete structure refers to the members, such as beams, boards, columns, roof trusses, consisting of concrete and steel bars. In these structures, the steel bars are enwrapped by concrete, but their mechanical properties will still lose due to the fire to destroy the whole structure."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsEasel className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"CAD"}
            description={
              "CAD, or computer-aided design and drafting (CADD), is technology for design and technical documentation, which replaces manual drafting with an automated process. If you are a designer, drafter, architect or engineer, you have probably used 2D or 3D CAD programs such as AutoCAD or AutoCAD LT software."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <GiWaterTank className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Waste Water Engineering"}
            description={
              "Sanitary engineering, also known as public health engineering or wastewater engineering, is the application of engineering methods to improve sanitation of human communities, primarily by providing the removal and disposal of human waste, and in addition to the supply of safe potable water."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <MdPrecisionManufacturing className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Manufacturing Process"}
            description={
              "Manufacturing engineering, or the manufacturing process, are the steps through which raw materials are transformed into a final product. The manufacturing process begins with the product design, and materials specification from which the product is made."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Civil;
