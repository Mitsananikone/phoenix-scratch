/** @format */

"use client";

import { userService } from "services";

export default function MummyMakeover() {
  return (
    <div className="container">
      <div className="flex items-center justify-center h-full w-full mt-64">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 bg-dark">
          <div className="md:w-1/2">
            <h4 className="mb-4 text-secondary">Excellence in</h4>
            <h2 className="mb-4 text-primary text-2xl font-bold">
              Mummy Makeover
            </h2>
            <p className="mb-4 text-white ">
            Rediscover your pre-pregnancy physique with our exceptional Mommy Makeover services in Thailand. Specializing in body transformation post-childbirth, we acknowledge the profound effect that regaining your body confidence can have on your overall happiness and self-esteem. Our proficient surgeons offer a comprehensive suite of procedures, such as breast augmentation or lift, tummy tuck, and liposuction, all personalized to restore your body shape and match your aesthetic goals. Utilizing our cutting-edge facilities, offering economical packages, and pledging unwavering commitment to patient care, we ensure a smooth journey from your initial consultation to complete recovery. Embrace the transformative journey of a Mommy Makeover with us, and welcome back the vibrant, confident you that you remember.
            </p>
            <button className="w-full md:w-auto bg-accent text-white py-2 px-4 rounded shadow-lg hover:bg-accent-darker focus:outline-none">
              Enquire Now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 pl-4">
            <img
              className="rounded shadow-lg w-full"
              src="/images/surgeries/body/mummy-white.png"
              alt="Breast Surgery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
