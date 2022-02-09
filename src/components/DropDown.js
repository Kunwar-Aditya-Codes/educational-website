import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AiOutlineCaretDown } from "react-icons/ai";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const [options1, setOptions1] = useState(false);
  const [options2, setOptions2] = useState(false);
  const [options3, setOptions3] = useState(false);

  return (
    <>
      {!show ? (
        <button className="lg:hidden" onClick={() => setShow(!show)}>
          <FiMenu className="w-6 h-6 text-white" />
        </button>
      ) : (
        <button onClick={() => setShow(!show)} className="">
          <IoClose className="fixed lg:hidden top-5 right-8 w-6 h-6 text-white z-50" />
        </button>
      )}
      <div
        className={`top-0 right-0 lg:hidden fixed bg-gradient-to-b from-[#FA7268] to-[#C62368] w-[40vw] h-full z-40 p-4 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-300`}
      >
        <ul className="text-white font-semibold text-lg mt-12 text-center grid  ">
          <Link
            to="/about"
            onClick={() => setShow(!show)}
            className="hover:bg-[#001220] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            About Us
          </Link>
          <Link
            to="/training"
            onClick={() => setShow(!show)}
            className="hover:bg-[#001220] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
          >
            Training & Certification
          </Link>
          <>
            {!options1 ? (
              <li
                onClick={() => setOptions1(!options1)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Internship
                <AiOutlineCaretDown />
              </li>
            ) : (
              <li
                onClick={() => setOptions1(!options1)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Internship
                <AiOutlineCaretDown />
              </li>
            )}
            <ul
              className={`grid absolute top-[17rem] w-full right-0.5 bg-[#001220]   rounded-md p-4 transition-all duration-300 origin-top ${
                options1 ? "scale-100" : "scale-0"
              } transition ease-in-out duration-300`}
            >
              <Link
                to="/software-training"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Software Training
              </Link>
              <Link
                to="/app-training"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                App Developement
              </Link>
              <Link
                to="/web-training"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Web Developement
              </Link>
            </ul>
          </>
          <>
            {!options2 ? (
              <li
                onClick={() => setOptions2(!options2)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Project Assistance
                <AiOutlineCaretDown />
              </li>
            ) : (
              <li
                onClick={() => setOptions2(!options2)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Project Assistance
                <AiOutlineCaretDown />
              </li>
            )}
            <ul
              className={`grid absolute top-[21rem] w-full right-0.5 bg-[#001220]   rounded-md p-4 transition-all duration-300 origin-top ${
                options2 ? "scale-100" : "scale-0"
              } transition ease-in-out duration-300`}
            >
              <Link
                to="/phd"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Phd
              </Link>
              <Link
                to="/engineering"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                M.Tech
              </Link>
              <Link
                to="/engineering"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                B.Tech
              </Link>
            </ul>
          </>
          <>
            {!options3 ? (
              <li
                onClick={() => setOptions3(!options3)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Competitive Exam
                <AiOutlineCaretDown />
              </li>
            ) : (
              <li
                onClick={() => setOptions3(!options3)}
                className="list-none xl:text-lg cursor-pointer grid justify-items-center  text-white focus:bg-emerald-300 p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg  transition ease-in-out duration-200"
              >
                Competitive Exam
                <AiOutlineCaretDown />
              </li>
            )}
            <ul
              className={`grid absolute top-[25rem] w-full right-0.5 bg-[#001220]   rounded-md p-4 transition-all duration-300 origin-top ${
                options3 ? "scale-100" : "scale-0"
              } transition ease-in-out duration-300`}
            >
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                GATE
              </Link>
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                NET/SET
              </Link>
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                JEE
              </Link>
              <Link
                to="/"
                onClick={() => setShow(!show)}
                className="hover:bg-gradient-to-r from-[#FA7268] to-[#C62368] transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                UPSC
              </Link>
            </ul>
          </>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
