import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = () => {
  return (
    <div className="bg-teal-500 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between lg:justify-around px-6">
        <Link
          to="/"
          className="text-white font-semibold tracking-wide italic text-xl lg:text-2xl xl:text-3xl"
        >
          Ignian Software Solutions LLP
        </Link>

        {/* Nav items */}
        <div className="font-semibold md:w-1/2 lg:w-1/3 flex justify-between ">
          <Link
            to="/engineering"
            className="hidden md:inline-block text-white focus:bg-emerald-300 p-2 rounded-md focus:shadow-md focus:text-black text-lg hover:scale-110 transition ease-in-out duration-200"
          >
            B.Tech/M.Tech
          </Link>
          <Link
            to="/phd"
            className="hidden md:inline-block text-white focus:bg-emerald-300 p-2 rounded-md focus:shadow-md focus:text-black text-lg hover:scale-110 transition ease-in-out duration-200"
          >
            PhD
          </Link>
          <Link
            to="/contact"
            className="hidden md:inline-block text-white focus:bg-emerald-300 p-2 rounded-md focus:shadow-md focus:text-black text-lg hover:scale-110 transition ease-in-out duration-200"
          >
            Contact
          </Link>
        </div>
        {/* sidebar */}
        <DropDown />
      </div>
    </div>
  );
};

export default Header;
