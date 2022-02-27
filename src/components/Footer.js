import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center pt-6 bg-[#7EC8E3]">
      <Link
        to="/contact"
        className="text-xl font-medium bg-[#001220] text-white p-2 rounded-md "
      >
        Contact Us
      </Link>
      <h1 className="text-slate-900 text-center py-4">
        &copy; Copyright 2022 Ignian Software Solutions LLP.
        <br /> All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
