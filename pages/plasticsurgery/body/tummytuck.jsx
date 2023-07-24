/** @format */

"use client";

import { userService } from "services";

export default function TummyTuck() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Body Plastic Surgery in Thailand
            </h2>
            <p className="mb-4 text-white ">
              Transform your life with our top-rated body plastic surgery services in Thailand. As pioneers in aesthetic enhancements, we focus on crafting your ideal physique with precision and care. Our expert surgeons specialize in a variety of procedures, ranging from liposuction and tummy tucks to body lifts and contouring, tailored to your personal goals. Leveraging the latest technology, affordable rates, and a patient-centered approach, we promise a smooth journey towards your desired appearance. Explore the potential of body plastic surgery with us and discover a new sense of confidence.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              className="rounded shadow-lg"
              src="(insert your image source here)"
              alt="Body Plastic Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
