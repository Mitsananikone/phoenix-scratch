/** @format */

"use client";

import { userService } from "services";

export default function AboutUs() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">All About</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Breast Surgery in Thailand
            </h2>
            <p className="mb-4 text-white ">
              Breathe new confidence into your life with our premier breast
              surgery services in Thailand. As leaders in cosmetic and
              reconstructive surgery, we understand the impact that feeling good
              in your own skin has on your well-being. Our skilled surgeons
              offer a wide range of procedures, including augmentation,
              reduction, and reconstruction, tailored to meet your unique needs
              and aspirations. With state-of-the-art facilities, affordable
              pricing, and a commitment to patient care, our team ensures a
              seamless experience from consultation through recovery. Explore
              the transformative possibilities of breast surgery with us, and
              embrace the empowered version of yourself that awaits.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              className="rounded shadow-lg"
              src="(insert your image source here)"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
