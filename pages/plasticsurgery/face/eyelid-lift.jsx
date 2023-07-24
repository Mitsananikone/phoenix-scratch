/** @format */

"use client";

import { userService } from "services";

export default function EyeLidLift() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
             Eyelid Lift Surgery
            </h2>
            <p className="mb-4 text-white ">
            Revitalize your appearance and spirit with our distinguished eyelid lift services in Thailand. As pioneers in blepharoplasty, we acknowledge the profound influence that youthful, bright eyes can exert on your self-esteem. Our adept surgeons perform an array of procedures, including upper, lower, and double eyelid surgeries, each one attentively adapted to reflect your personal aesthetic goals and particular needs. Equipped with cutting-edge facilities, economical surgical solutions, and a steadfast commitment to patient care, we facilitate a smooth journey from your initial consultation to the postoperative recovery phase. Discover the rejuvenating potential of eyelid lift surgery with us, and step into a more vibrant version of yourself thats waiting to be unveiled.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/face/eyelid-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
