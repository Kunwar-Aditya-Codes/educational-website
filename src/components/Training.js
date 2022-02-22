import React from "react";
import ScrollToTop from "./ScrollToTop";
import TrainingCard from "./TrainingCard";
import {
  SiC,
  SiCplusplus,
  SiHiveBlockchain,
  SiJava,
  SiPython,
} from "react-icons/si";
import { GiBrain, GiMaterialsScience } from "react-icons/gi";

const Training = () => {
  return (
    <div className="text-white py-6">
      <ScrollToTop />
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        <div className=" grid justify-items-center py-5 mb-8 border-sky-600 border-2 text-sky-600 rounded-md mx-auto  shadow-md  w-5/6">
          <SiC className="h-10 w-10 text-blue-700" />
          <TrainingCard
            title={"C Programming"}
            ad1={"It is easy to understand"}
            ad2={"Presence of many Libraries"}
            ad3={"Easy to write"}
            ad4={"Low cost"}
            ad5={" Fast execution speed"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <SiCplusplus className="h-12 w-12 text-purple-700" />
          <TrainingCard
            title={"C++"}
            ad1={"Object-Oriented"}
            ad2={"Multi-paradigm programming language"}
            ad3={"Fast and Powerful"}
            ad4={"Wide Range of Applications"}
            ad5={"Huge Community"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <SiJava className="h-16 w-16 text-amber-500" />
          <TrainingCard
            title={"Java"}
            ad1={"Object-Oriented"}
            ad2={"Java is platform-independent"}
            ad3={"Uses strong memory management"}
            ad4={"Multi-Threaded"}
            ad5={"Secured programming language"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <SiPython className="h-12 w-12 text-fuchsia-500" />
          <TrainingCard
            title={"Python"}
            ad1={"Improved Productivity"}
            ad2={"Dynamically Typed"}
            ad3={"Portability"}
            ad4={"Vast Libraries Support"}
            ad5={"Interpreted Language"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <SiHiveBlockchain className="h-12 w-12 text-sky-400" />
          <TrainingCard
            title={"Blockchain"}
            ad1={"Trust between different entities"}
            ad2={"Decentralized structure"}
            ad3={"Improved security and privacy"}
            ad4={"Reduced costs"}
            ad5={"Visibility and traceability"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <GiBrain className="h-12 w-12 text-emerald-500" />
          <TrainingCard
            title={"Machine Learning"}
            ad1={"Easily identifies trends and patterns"}
            ad2={"No human intervention needed"}
            ad3={"Continuous Improvement"}
            ad4={"Handling multi-dimensional and multi-variety data"}
            ad5={"Wide Applications"}
          />
        </div>
        <div className=" grid justify-items-center py-5 mb-8 rounded-md mx-auto border-sky-600 border-2 text-sky-600  shadow-md  w-5/6">
          <GiMaterialsScience className="h-12 w-12 text-lime-500" />
          <TrainingCard
            title={"Data Science"}
            ad1={"Increases business predictability"}
            ad2={"Ensures real-time intelligence"}
            ad3={"Improves data security"}
            ad4={"Helps interpret complex data"}
            ad5={"Facilitates the decision-making process"}
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
