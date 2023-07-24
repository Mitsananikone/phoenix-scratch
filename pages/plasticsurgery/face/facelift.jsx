/** @format */

"use client";

import { userService } from "services";

export default function FaceLift() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
             Face Lift Surgery
            </h2>
            <p className="mb-4 text-white ">
            Step into a new chapter of your life with our distinguished facelift surgery services in Thailand. As frontrunners in facial cosmetic surgery, we recognize the profound effect that a rejuvenated and youthful facial appearance can have on your overall confidence and life quality. Our proficient surgeons offer a wide array of procedures including mini facelifts, full facelifts, and neck lifts, each tailored to address your unique needs and enhance your natural features. Our state-of-the-art facilities, cost-effective procedures, and unwavering commitment to patient care ensure a streamlined experience from the initial consultation to the recovery phase. Discover the transformative power of facelift surgery with us, and step into the revitalized version of yourself that awaits.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/face/lift-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
