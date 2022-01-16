import React from "react";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { AiTwotonePhone } from "react-icons/ai";
import ScrollToTop from "./ScrollToTop";

const Contact = () => {
  return (
    <div className="w-3/4 lg:w-full mx-auto mt-12 lg:flex lg:justify-around">
      <ScrollToTop />
      <div className=" lg:w-1/3">
        <div className="grid justify-items-center py-6 text-2xl">
          <GoLocation className="mb-3" />
          <a
            href="https://www.google.com/maps/place/Pune,+Maharashtra/@18.6875923,73.3400789,8z/data=!4m13!1m7!3m6!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!2sPune,+Maharashtra!3b1!8m2!3d18.5204303!4d73.8567437!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437"
            target="_blank"
            className="bg-teal-400 p-1 rounded-md hover:scale-110 transition duration-300 ease-in-out"
          >
            Location
          </a>
        </div>
        <div className="grid justify-items-center py-6 text-2xl">
          <HiOutlineMail className="mb-3" />
          <a
            href="mailto:hnresearchsolutions@gmail.com"
            target="_blank"
            className="bg-teal-400 p-1 rounded-md hover:scale-110 transition duration-300 ease-in-out"
          >
            Email
          </a>
        </div>
        <div className="grid justify-items-center py-6 text-2xl">
          <AiTwotonePhone className="mb-3" />
          <a
            href="tel:+919769522788"
            target="_blank"
            className="bg-teal-400 p-1 rounded-md hover:scale-110 transition duration-300 ease-in-out"
          >
            Phone
          </a>
        </div>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScKyiTuMp3kXMQjRaWzVZE_oJzqriXLR2ERHGMofLVmcid-1Q/viewform?embedded=true"
        width="640"
        height="979"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className=" w-[110%] h-[65rem] lg:w-[50%] mx-auto"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
