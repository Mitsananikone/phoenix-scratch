import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full mt-0 ">
      <Slider {...settings}>
        <div className="relative h-90 overflow-hidden rounded-lg md:h-96">
          <img src="/images/home/herobanner1.png" className="absolute block w-full h-full inset-0 object-cover" alt="Image 1" />
        </div>
        <div className="relative h-90 overflow-hidden rounded-lg md:h-96">
          <img src="/images/home/herobanner2.png" className="absolute block w-full h-full inset-0 object-cover" alt="Image 2" />
        </div>
        <div className="relative h-90 overflow-hidden rounded-lg md:h-96">
          <img src="/images/home/herobanner3.png" className="absolute block w-full h-full inset-0 object-cover" alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-4xl text-white mb-4">
          Experience the Best in Cosmetic Surgery
        </h1>
        <button className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-700">
          Book Your Journey
        </button>
      </div>
    </div>
  );
}
