/** @format */

"use client";

import { userService } from "services";

export default function WeightLoss() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Weight Loss Surgery
            </h2>
            <p className="mb-4 text-white ">
            Embrace a newfound self-confidence with our unparalleled thigh lift surgery services in Thailand. Being at the forefront of cosmetic surgery, we recognize the profound effect that enhancing your body image can have on your self-esteem and quality of life. Our adept surgeons provide an array of services, including thigh lift procedures designed to contour your lower body to fit your unique goals and desires. With advanced facilities, cost-effective treatment plans, and a deep-rooted commitment to patient care, we guarantee a streamlined journey from your initial consultation through recovery. Experience the transformative power of thigh lift surgery with us and step forward into a more confident and fulfilling life.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/body/weightloss-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
