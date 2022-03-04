import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = () => {
  return (
    <div className="bg-[#4FBDBA] sticky top-0 z-50 ">
      <div className="flex items-center justify-evenly ">
        <div className="flex items-center justify-center  ">
          <img src="images/Logo.png" alt="" className="w-24 h-24 p-2" />
          <Link
            to="/"
            className=" lg:text-center font-semibold tracking-wide italic text-xl "
          >
            Ignian Software Solutions LLP
          </Link>
        </div>

        {/* Nav items */}
        <div className="font-semibold flex justify-between pb-1 items-center lg:w-full px-3 ">
          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-md focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group   p-2 rounded-md lg:text-base focus:shadow-lg focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/training"
          >
            Training & Certification
          </Link>

          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-lg focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/internship"
          >
            Internship
          </Link>
          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-lg focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/competitive-exam"
          >
            Competitive Exam
          </Link>
          <li className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg hover:scale-110 transition ease-in-out duration-200">
            Project Assistance
            <ul className="grid absolute text-white bg-[#001220] rounded-md p-4 transition-all duration-300 w-full origin-top scale-0 group-hover:scale-100 ">
              <Link
                to="/phd"
                className="hover:bg-white hover:text-black  transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Phd
              </Link>
              <Link
                to="/engineering"
                className="hover:bg-white hover:text-black  transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                M.Tech
              </Link>
              <Link
                to="/engineering"
                className="hover:bg-white hover:text-black  transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                B.Tech
              </Link>
            </ul>
          </li>
          <li className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-md focus:text-black text-lg hover:scale-110 transition ease-in-out duration-200">
            Software Solution
            <ul className="grid absolute bg-[#001220] text-white rounded-md p-4 transition-all duration-300 w-full origin-top scale-0 group-hover:scale-100 ">
              <Link
                to="/app-dev"
                className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                App Developement
              </Link>
              <Link
                to="/web-dev"
                className="hover:bg-white hover:text-black transition-all ease-in-out duration-200 p-2 my-1 rounded-md"
              >
                Web Developement
              </Link>
            </ul>
          </li>
          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-md focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/events"
          >
            Events
          </Link>
          <Link
            className="list-none xl:text-lg cursor-pointer hidden lg:inline-block group  p-2 rounded-md lg:text-base focus:shadow-md focus:bg-[#001220] focus:text-white  text-lg hover:scale-110 transition ease-in-out duration-200"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
        {/* sidebar */}
        <DropDown />
      </div>
    </div>
  );
};

export default Header;
