import React from "react";
import CourseCard from "./CourseCard";
import ScrollToTop from "./ScrollToTop";
import { BiChip } from "react-icons/bi";
import { RiLayoutFill } from "react-icons/ri";
import {
  GiAerialSignal,
  GiCircularSawblade,
  GiElectric,
  GiUnplugged,
} from "react-icons/gi";
import {
  BsBezier2,
  BsFillLightningChargeFill,
  BsUiRadios,
} from "react-icons/bs";
import { VscRadioTower } from "react-icons/vsc";
import { ImEmbed2 } from "react-icons/im";

const Electronics = () => {
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
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <BiChip className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Analog Electronic Circuit"}
            description={
              "An analog circuit is a circuit with a continuous, variable signal (that is, an analog signal), as opposed to a digital circuit where a signal must be one of two discrete levels. Analog circuits within electrical equipment can convey information through changes in the current, voltage, or frequency."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <BsUiRadios className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Control Systems"}
            description={
              "A control system is a system, which provides the desired response by controlling the output. The following figure shows the simple block diagram of a control system. Here, the control system is represented by a single block."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <ImEmbed2 className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Embeded System"}
            description={
              "An embedded system is a microprocessor-based computer hardware system with software that is designed to perform a dedicated function, either as an independent system or as a part of a large system."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <GiAerialSignal className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Digital Signal Processing"}
            description={
              "Digital Signal Processing is the mathematical manipulation of an information signal, such as audio, temperature, voice, and video and modify or improve them in some manner. The basics of digital signal processing (DSP) leading up to a series of articles on statistics and probability."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <GiElectric className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Electric Power"}
            description={
              "Electric power is the rate, per unit time, at which electrical energy is transferred by an electric circuit. The SI unit of power is the watt, one joule per second. Electric power is usually produced by electric generators, but can also be supplied by sources such as electric batteries."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <VscRadioTower className="w-8 h-8 mx-auto mt-4" />
          <CourseCard
            title={"Networking"}
            description={
              "The foundations of networking: switches, routers, and wireless access points. Switches, routers, and wireless access points are the essential networking basics. Through them, devices connected to your network can communicate with one another and with other networks, like the Internet."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <GiCircularSawblade className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Ac/Dc Motors"}
            description={
              "AC motors can be defined as an electric motor which is driven by an alternating current (AC). DC motors is also a rotatory electric motor that converts Direct current (DC energy) into mechanical energy. AC motors are mainly of two types which are synchronous AC motors and induction motors."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <BsBezier2 className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"VLSI"}
            description={
              "Very-large-scale integration (VLSI) is the process of creating an integrated circuit (IC) by combining thousands of transistors into a single chip. VLSI began in the 1970s when complex semiconductor and communication technologies were being developed. The microprocessor is a VLSI device."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <BsFillLightningChargeFill className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"High Voltage Transmission"}
            description={
              "A high-voltage, direct current (HVDC) electric power transmission system (also called a power superhighway or an electrical superhighway) uses direct current (DC) for the bulk transmission of electrical power, in contrast with the more common alternating current (AC) systems."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <RiLayoutFill className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"PLC SCADA"}
            description={
              "A PROGRAMMABLE LOGIC CONTROLLER (PLC) is an industrial computer control system that continuously monitors the state of input devices and makes decisions based upon a custom program to control the state of output devices."
            }
          />
        </div>
        <div className="rounded-lg w-4/5 mt-8 mx-auto text-justify p-6 shadow-md  border border-teal-600 shadow-teal-300">
          <GiUnplugged className="w-8 h-8 mx-auto mt-4 " />
          <CourseCard
            title={"Power Electronics"}
            description={
              "The power system is a network which consists generation, distribution and transmission system. It uses the form of energy (like coal and diesel) and converts it into electrical energy."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Electronics;
