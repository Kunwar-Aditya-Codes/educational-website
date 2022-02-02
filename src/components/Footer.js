import React from "react";

const Footer = () => {
  return (
    <div className="sticky top-full bg-[url('images/footer.png')]  ">
      <div className="text-center text-xl font-semibold p-4   text-white">
        <p className="pb-2">For more info call us on</p>
        <p className="pb-2">+91-9769522788</p>
      </div>
      <h1 className="text-slate-300 text-center py-4">
        &copy; Copyright 2022 Ignian Software Solutions LLP.
        <br /> All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
