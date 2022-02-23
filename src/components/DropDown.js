import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const [options3, setOptions3] = useState(false);
  const [options, setOptions] = useState(false);

  return (
    <>
      {!show ? (
        <button className="lg:hidden" onClick={() => setShow(!show)}>
          <FiMenu className="w-6 h-6 text-sky-600" />
        </button>
      ) : (
        <button onClick={() => setShow(!show)} className="">
          <IoClose className="fixed lg:hidden top-5 right-8 w-6 h-6 text-white z-50" />
        </button>
      )}
      <div
        className={`top-0 right-0 lg:hidden fixed bg-sky-600 w-[40vw] h-full z-40 p-4 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-300`}
      >
        <ul className="text-white font-semibold text-lg mt-12 text-center grid  ">
          <Link
            to="/contact"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Contact Us
          </Link>
          <Link
            to="/about"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            About Us
          </Link>
          <Link
            to="/training"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Training & Certification
          </Link>

          <Link
            to="/internship"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Internship
          </Link>
          <Link
            to="/competitive-exam"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Competitve Exam
          </Link>
          <Link
            to="/events"
            onClick={() => setShow(!show)}
            className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Events
          </Link>
          <>
            {!options3 ? (
              <li
                onClick={() => setOptions3(!options3)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Software Solution
                <AiOutlineCaretDown />
              </li>
            ) : (
              <li
                onClick={() => setOptions3(!options3)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Software Solution
                <AiOutlineCaretDown />
              </li>
            )}
            <ul
              className={`grid absolute top-[28rem] w-full right-0.5 bg-white text-sky-600   rounded-md p-4 transition-all duration-300 origin-top ${
                options3 ? "scale-100" : "scale-0"
              } transition ease-in-out duration-300`}
            >
              <Link
                to="/app-dev"
                onClick={() => setShow(!show)}
                className="hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                App Developement
              </Link>
              <Link
                to="/web-dev"
                onClick={() => setShow(!show)}
                className="hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Web Developement
              </Link>
            </ul>
          </>
          <>
            {!options ? (
              <li
                onClick={() => setOptions(!options)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Project Assistance
                <AiOutlineCaretDown />
              </li>
            ) : (
              <li
                onClick={() => setOptions(!options)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Project Assistance
                <AiOutlineCaretDown />
              </li>
            )}
            <ul
              className={`grid absolute top-[33rem] w-full right-0.5 bg-white text-sky-600   rounded-md p-4 transition-all duration-300 origin-top ${
                options ? "scale-100" : "scale-0"
              } transition ease-in-out duration-300`}
            >
              <Link
                to="/phd"
                onClick={() => setShow(!show)}
                className="hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Phd
              </Link>
              <Link
                to="/engineering"
                onClick={() => setShow(!show)}
                className="hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                M.Tech
              </Link>
              <Link
                to="/engineering"
                onClick={() => setShow(!show)}
                className="hover:bg-sky-600 hover:text-white transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                B.Tech
              </Link>
            </ul>
          </>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
