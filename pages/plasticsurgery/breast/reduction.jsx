/** @format */

"use client";

import { userService } from "services";

export default function Reduction() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">All About</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Breast Reduction
            </h2>
            <p className="mb-4 text-white ">
            Experience a renewed sense of self-assurance with our leading male breast reduction services in Thailand. As specialists in the field of cosmetic surgery, we recognize the significant role body satisfaction plays in your overall quality of life. Our adept surgeons perform a broad range of procedures, including male breast reduction, contouring, and restructuring, all tailored to suit your individual needs and objectives. With our state-of-the-art facilities, cost-effective pricing, and an unyielding dedication to patient care, our team ensures a smooth process from the initial consultation through to your recovery. Discover the liberating potential of male breast reduction surgery with us, and step into a future filled with self-confidence and comfort in your own skin.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/breast/reduction-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
