/** @format */

"use client";

import { userService } from "services";

export default function Labiaplasty() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Labiaplasty
            </h2>
            <p className="mb-4 text-white ">
            Reclaim your confidence and enhance your comfort with our top-tier labiaplasty services in Thailand. As renowned specialists in the realm of cosmetic gynaecology, we recognize the deep connection between your physical comfort and your overall well-being. Our team of expert surgeons are well-versed in performing a variety of procedures such as labiaplasty, vaginal rejuvenation, and contouring, each one tailored to suit your unique goals and needs. Operating from our state-of-the-art facilities, offering cost-effective services, and maintaining a steadfast commitment to patient care, we assure a seamless experience from consultation through to recovery. Discover the transformative potential of labiaplasty with us, and step forward into a more confident and comfortable version of yourself.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/body/labiaplasty-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
