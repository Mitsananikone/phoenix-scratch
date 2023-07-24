/** @format */

"use client";

import { userService } from "services";

export default function Explant() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">All About</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Breast Explant
            </h2>
            <p className="mb-4 text-white ">
            Discover a renewed sense of self with our outstanding breast explant services in Thailand. We stand as esteemed experts in cosmetic surgery, recognizing the significant influence that personal comfort and body image can have on your self-perception and contentment. Our accomplished surgeons excel in several procedures, notably explant, capsule removal, and revision surgeries, each tailored to suit your unique requirements and personal objectives. Equipped with cutting-edge facilities, cost-effective solutions, and a steadfast devotion to patient care, our team pledges a seamless experience from the primary consultation through to recovery. Unearth the transformative benefits of breast explant surgery with us and step forward into a future where you feel fully at ease with yourself.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/breast/explant-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
