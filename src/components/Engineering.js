import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Engineering = () => {
  return (
    <div className="grid md:grid-cols-2">
      <ScrollToTop />
      <div className="w-3/4  mx-auto my-12 hover:scale-110 shadow-xl shadow-slate-400 transition ease-in-out duration-200 border">
        <Link to="/engineering/it">
          <img src="images/eng1.png" alt="" className="rounded-md " />
        </Link>
      </div>
      <div className="w-3/4  mx-auto my-12 hover:scale-110 shadow-xl shadow-slate-400 transition ease-in-out duration-200 border">
        <Link to="/engineering/mechanical">
          <img src="images/eng2.png" alt="" className="rounded-md " />
        </Link>
      </div>
      <div className="w-3/4  mx-auto my-12 hover:scale-110 shadow-xl shadow-slate-400 transition ease-in-out duration-200 border">
        <Link to="/engineering/civil">
          <img src="images/eng3.png" alt="" className="rounded-md " />
        </Link>
      </div>
      <div className="w-3/4  mx-auto my-12 hover:scale-110 shadow-xl shadow-slate-400 transition ease-in-out duration-200 border">
        <Link to="/engineering/electronics">
          <img src="images/eng4.png" alt="" className="rounded-md " />
        </Link>
      </div>
    </div>
  );
};

export default Engineering;
