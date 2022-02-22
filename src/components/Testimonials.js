import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full mx-auto pt-5 text-white ">
        <Slider {...settings}>
          <TestimonialCard
            name={"Anil Gore"}
            title={"M.Tech"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
          <TestimonialCard
            name={"Kishori Jadhav"}
            title={"PhD"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
          <TestimonialCard
            name={"Sanket Phadke"}
            title={"PhD"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
          <TestimonialCard
            name={"Anil Gore"}
            title={"M.Tech"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
          <TestimonialCard
            name={"Kishori Jadhav"}
            title={"PhD"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
          <TestimonialCard
            name={"Sanket Phadke"}
            title={"PhD"}
            description={
              "Ignian Software Solutions provides excellent service for Documents and coding. Every small queries provide solutions is really help to us by conducting their various session like explain concept and line by line coding session. The management has always been respectful,responsive, supportive and understanding. Staff are very helpful and having very friendly nature. I have learn a lot from all the session and help from employee. Thanks all Ignian Software Solution "
            }
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
