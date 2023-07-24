/** @format */

"use client";

import { userService } from "services";

export default function EarPinning() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
             Ear pinning Surgery
            </h2>
            <p className="mb-4 text-white ">
            Unleash a newfound sense of self-assurance with our elite ear pinning services in Thailand. As specialists in otoplasty, we recognize the powerful effect that achieving harmonious facial symmetry can have on your self-confidence. Our proficient surgeons carry out a diverse range of procedures, including ear reshaping, size reduction, and pinning, each meticulously tailored to align with your aesthetic aspirations and individual requirements. With our avant-garde facilities, cost-effective surgical options, and a dedicated emphasis on patient care, we ensure a streamlined process from the initial consultation to post-surgery recovery. Delve into the transformative potential of ear pinning with us, and step forward into the more self-assured version of yourself that lies ahead.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/face/ear-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
