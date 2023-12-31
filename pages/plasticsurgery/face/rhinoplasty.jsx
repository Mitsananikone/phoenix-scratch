/** @format */

"use client";

import { userService } from "services";

export default function Rhinoplasty() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
             Rhinoplasty Surgery
            </h2>
            <p className="mb-4 text-white ">
            Unveil a new version of yourself with our top-notch rhinoplasty services in Thailand. As pioneers in the realm of facial cosmetic surgery, we comprehend the powerful influence that a harmonious and well-balanced nose can exert on your self-assurance and overall facial aesthetics. Our highly trained surgeons provide an extensive variety of procedures including open rhinoplasty, closed rhinoplasty, and revision rhinoplasty, each designed to satisfy your individual desires and enhance your facial symmetry. Equipped with cutting-edge facilities, competitive pricing, and a steadfast commitment to patient care, we ensure a smooth journey from your first consultation through to recovery. Uncover the transformative potential of rhinoplasty with us, and step forward into the refined version of yourself that lies ahead.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/face/rhino-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
