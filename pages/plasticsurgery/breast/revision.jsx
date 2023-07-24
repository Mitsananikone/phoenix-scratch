/** @format */

"use client";

import { userService } from "services";

export default function Revision() {
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
            Achieve your ideal aesthetic goals with our expert breast revision services in Thailand. Recognized for our proficiency in cosmetic surgery, we know how crucial it is to feel content with the appearance of your body. Our highly trained surgeons provide a vast selection of procedures, including breast revision, adjustment, and recontouring, all tailored to match your distinct desires and objectives. Equipped with advanced facilities, cost-effective pricing, and a dedicated patient care approach, our team guarantees a streamlined process from the initial consultation to your recovery. Uncover the transformative potential of breast revision surgery with us, and welcome a renewed sense of self-confidence that reflects your true aspirations.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/breast/revision-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
