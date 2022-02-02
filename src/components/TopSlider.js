import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3200,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="w-full mx-auto pt-5 ">
      <Slider {...settings}>
        <div className="p-2 ">
          <img
            src="images/home.png"
            alt=""
            className="aspect-video  rounded-lg md:w-3/4 lg:w-2/3 mx-auto border-2 border-white"
          />
        </div>
        <div className="p-2 ">
          <img
            src="images/home2.png"
            alt=""
            className="aspect-video  rounded-lg md:w-3/4 lg:w-2/3 mx-auto border-2 border-white"
          />
        </div>
        <div className="p-2 ">
          <img
            src="images/home3.png"
            alt=""
            className="aspect-video  rounded-lg md:w-3/4 lg:w-2/3 mx-auto border-2 border-white"
          />
        </div>
      </Slider>
    </div>
  );
};

export default TopSlider;
