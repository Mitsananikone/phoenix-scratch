/** @format */

"use client";

import { userService } from "services";

export default function BreastLift() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">All About</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Breast Lift
            </h2>
            <p className="mb-4 text-white ">
            Embark on a journey of renewed self-confidence with our superior breast lift services in Thailand. As a foremost authority in cosmetic surgery, we appreciate the profound role that comfort and body confidence play in your overall happiness. Our highly-trained surgeons provide a variety of services, including breast lift, reshaping, and rejuvenation, all customized to align with your specific needs and desires. Leveraging state-of-the-art facilities, competitive pricing, and an unwavering commitment to patient care, our team ensures a seamless journey from your initial consultation through to your recovery. Discover the uplifting impact of breast lift surgery with us, and step into a future where you confidently embody your best self.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/breast/lift-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
