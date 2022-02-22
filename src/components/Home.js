import React from "react";
import TopSlider from "./TopSlider";
import Card from "./Card";
import Vision from "./Vision";
import Testimonials from "./Testimonials";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="bg-sky-600">
        <TopSlider />
      </div>
      <div className="mt-20 text-center">
        <p className="w-5/6 text-3xl  underline underline-offset-2 mx-auto font-bold tracking-wide">
          "We provide hands on training for all domain by industry experts."
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card
          img={"images/card1.png"}
          title={"Artificial Intelligence"}
          description={
            "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions."
          }
        />
        <Card
          img={"images/card2.png"}
          title={"Data Science"}
          description={
            "Data science is the domain of study that deals with vast volumes of data using modern tools and techniques to find unseen patterns, derive meaningful information, and make business decisions."
          }
        />
        <Card
          img={"images/card3.png"}
          title={"Cloud Computing"}
          description={
            "Cloud computing is a combination of technologies that make up a network for the delivery of computing services."
          }
        />
        <Card
          img={"images/card4.png"}
          title={"Machine Learning"}
          description={
            "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed."
          }
        />
        <Card
          img={"images/card5.png"}
          title={"CAD"}
          description={
            "CAD, or computer-aided design and drafting (CADD), is technology for design and technical documentation, which replaces manual drafting with an automated process."
          }
        />
        <Card
          img={"images/card6.png"}
          title={"Manufacturing Process"}
          description={
            "Manufacturing engineering, or the manufacturing process, are the steps through which raw materials are transformed into a final product."
          }
        />
        <Card
          img={"images/card7.png"}
          title={"Analog Electronic Circuit"}
          description={
            "An analog circuit is a circuit with a continuous, variable signal (that is, an analog signal), as opposed to a digital circuit where a signal must be one of two discrete levels."
          }
        />
        <Card
          img={"images/card8.png"}
          title={"Digital Signal Processing"}
          description={
            "Digital Signal Processing is the mathematical manipulation of an information signal, such as audio, temperature, voice, and video and modify or improve them in some manner."
          }
        />
      </div>
      <div className="mt-16">
        <Vision />
      </div>

      <div className="mt-16">
        <h1 className="text-center text-white text-2xl shadow-lg py-3 mb-12 w-1/2 rounded-md mx-auto font-semibold bg-sky-600 ">
          Testimonials
        </h1>
        <Testimonials />
      </div>
      <div className="mt-16 pb-24 bg-sky-600 pt-12">
        <h1 className="text-center  text-2xl  shadow-lg py-3 mb-12 w-1/2 rounded-md mx-auto font-semibold bg-white ">
          Events
        </h1>
        <div className="rounded-md  bg-white my-10 shadow-lg p-4 w-3/4 lg:w-1/3 text-center mx-auto">
          <p className="text-xl font-semibold underline">Javascript-101</p>
          <p>-by Mahesh Rajekar</p>
        </div>
        <div className="rounded-md  bg-white my-10 shadow-lg p-4 w-3/4 lg:w-1/3 text-center mx-auto">
          <p className="text-xl font-semibold underline">Python-101</p>
          <p>-by Mahesh Rajekar</p>
        </div>
        <div className="rounded-md  bg-white mt-10 shadow-lg p-4 w-3/4 lg:w-1/3 text-center mx-auto">
          <p className="text-xl font-semibold underline">React-101</p>
          <p>-by Mahesh Rajekar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
