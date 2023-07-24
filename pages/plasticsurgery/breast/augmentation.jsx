/** @format */

"use client";

import { userService } from "services";

export default function Augmentation() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2 pr-4">
            <h4 className="mb-4 text-secondary">All About</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Breast Augmentation
            </h2>
            <p className="mb-4 text-white ">
            Enhance your beauty and boost your self-esteem with our leading breast augmentation services in Thailand. As pioneers in cosmetic surgery, we acknowledge the role that a positive body image plays in your overall happiness and confidence. Our highly trained surgeons specialize in various procedures, including augmentation, lift, and revision surgeries, personalized to align with your specific desires and expectations. Armed with top-notch facilities, competitive rates, and an unwavering dedication to patient satisfaction, our team promises a smooth journey from the initial consultation to post-surgery recovery. Discover the life-changing potential of breast augmentation with us, and step into a more confident, radiant version of you.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/breast/augmentation-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
