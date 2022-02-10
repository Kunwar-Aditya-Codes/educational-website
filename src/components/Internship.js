import React from "react";
import InternshipCard from "./InternshipCard";
import ScrollToTop from "./ScrollToTop";

const Internship = () => {
  return (
    <div className="bg-[#001220] text-white  py-12">
      <ScrollToTop />
      <h1 className="text-center my-8 text-4xl tracking-wide font-serif">
        Interships You Might be Interested In!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <InternshipCard
          title={"Develop Your Skillset"}
          time={"3"}
          p1={"Online Skill Development Programs"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard
          title={"Business Development Intern"}
          time={"3-4"}
          p1={"Finbricks"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard title={"Data Entry Operator"} time={"4"} p1={"BWA"} />
        <InternshipCard
          title={"Lead Generation Intern"}
          time={"2"}
          p1={"Intugine Technologies"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard
          title={"Devops"}
          time={"1-2"}
          p1={"Beagle Cyber Innovations Private Limited"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard
          title={"Content Writing Internship"}
          time={"5"}
          p1={"lifeisoutside.com"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard
          title={"Business Consultant"}
          time={"2-4"}
          p1={"Rosefield Energy Tech Pvt Ltd"}
          p2={"Mr. Rajesh Sharma"}
        />
        <InternshipCard
          title={"Graphic Design Intern"}
          time={"1"}
          p1={"DIBC"}
          p2={"Mr. Rajesh Sharma"}
        />
      </div>
    </div>
  );
};

export default Internship;
