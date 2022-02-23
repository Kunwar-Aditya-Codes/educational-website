import React from "react";
import CourseCard from "./CourseCard";
import ScrollToTop from "./ScrollToTop";
import {
  BsBoundingBox,
  BsFillCloudFill,
  BsFillFileEarmarkCodeFill,
  BsFillImageFill,
  BsFillPersonBadgeFill,
  BsGraphUp,
  BsPersonBoundingBox,
} from "react-icons/bs";
import { BiMobileAlt, BiWorld } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { IoRadio } from "react-icons/io5";

const IT = () => {
  return (
    <div className=" bg-[#001220] text-white py-12 ">
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
          <BsGraphUp className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Data Science"}
            description={
              "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions. Data science uses complex machine learning algorithms to build predictive models."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsFillImageFill className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Matlab Image processing"}
            description={
              "Image Processing Toolbox provides a comprehensive set of reference-standard algorithms and workflow apps for image processing, analysis, visualization, and algorithm development. You can interactively segment image data, and batch-process large data sets."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsFillCloudFill className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Cloud Computing"}
            description={
              "Cloud computing is a combination of technologies that make up a network for the delivery of computing services. It requires hardware for infrastructural purposes and software to deliver the on-demand services over the internet."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BiWorld className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Big Data"}
            description={
              "Big Data is a collection of data that is huge in volume, yet growing exponentially with time. It is a data with so large size and complexity that none of traditional data management tools can store it or process it efficiently."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <GiNetworkBars className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Networking"}
            description={
              "The foundations of networking: switches, routers, and wireless access points. Switches, routers, and wireless access points are the essential networking basics. Through them, devices connected to your network can communicate with one another and with other networks, like the Internet."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsPersonBoundingBox className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Artificial intelligence"}
            description={
              "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsFillPersonBadgeFill className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Machine Learning"}
            description={
              "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsBoundingBox className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Blockchain Technology"}
            description={
              "A blockchain is a digital record of transactions. The name comes from its structure, in which individual records, called blocks, are linked together in single list, called a chain. Each transaction added to a blockchain is validated by multiple computers on the Internet."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BiMobileAlt className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Mobile Application Developnment"}
            description={
              "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <BsFillFileEarmarkCodeFill className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Full stack web Developnment"}
            description={
              "A full stack developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  text-white border border-teal-600 shadow-teal-300">
          <IoRadio className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Internet Of Things (IOT)"}
            description={
              "The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default IT;
