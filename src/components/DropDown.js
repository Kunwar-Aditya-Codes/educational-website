import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const DropDown = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {!show ? (
        <button className="md:hidden" onClick={() => setShow(!show)}>
          <FiMenu className="w-6 h-6 text-white" />
        </button>
      ) : (
        <button onClick={() => setShow(!show)} className="">
          <IoClose className="fixed top-5 right-8 w-6 h-6 text-white z-50" />
        </button>
      )}
      <div
        className={`top-0 right-0 fixed bg-teal-600 w-[40vw] h-full z-40 p-4 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-300`}
      >
        <ul className="text-white font-semibold text-lg mt-12 text-center grid  ">
          <Link
            to="/engineering"
            onClick={() => setShow(!show)}
            className="my-3 hover:bg-emerald-400 hover:text-black transition ease-in-out hover:scale-110 rounded-lg duration-300"
          >
            B.Tech/M.Tech
          </Link>
          <Link
            to="/phd"
            onClick={() => setShow(!show)}
            className="my-3 hover:bg-emerald-400 hover:text-black transition ease-in-out hover:scale-110 rounded-lg duration-300"
          >
            PhD
          </Link>
          <Link
            to="/contact"
            onClick={() => setShow(!show)}
            className="my-3 hover:bg-emerald-400 hover:text-black transition ease-in-out hover:scale-110 rounded-lg duration-300"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
