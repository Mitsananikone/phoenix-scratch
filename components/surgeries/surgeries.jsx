import React, { useState } from "react";

const procedures = {
  breast: [
    {name: "Breast Augmentation", image: "/images/surgeries/breast/augmentation.png"},
    {name: "Breast Lift", image: "/images/surgeries/breast/lift.png"},
    {name: "Breast Reduction", image: "/images/surgeries/breast/reduction.png"},
    {name: "Breast Revision", image: "/images/surgeries/breast/revision.png"},
    {name: "Breast Explant", image: "/images/surgeries/breast/explant.png"},
    {name: "Male Breast Reduction", image: "/images/surgeries/breast/male.png"}
  ],
  body: [
    {name: "Mummy Makeover", image: "/images/surgeries/body/mummy.png"},
    {name: "Tummy Tuck", image: "/images/surgeries/body/tummy.png"},
    {name: "Labiaplasty", image: "/images/surgeries/body/labia.png"},
    {name: "Arm Lift", image: "/images/surgeries/body/armlift.png"},
    {name: "Thigh Lift", image: "/images/surgeries/body/thighlift.png"},
    {name: "Weight Loss Surgery", image: "/images/surgeries/body/weightloss.png"}
  ],
  face: [
    {name: "Rhinoplasty", image: "/images/surgeries/face/rhino.png"},
    {name: "Facelift", image: "/images/surgeries/face/lift.png"},
    {name: "Eyelid Surgery", image: "/images/surgeries/face/eyelid.png"},
    {name: "Ear Pinning", image: "/images/surgeries/face/ear.png"}
  ],
};


export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('breast');

  return (
    <section className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 mx-auto  mt-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl leading-9 font-extrabold text-white">
          Surgeries
        </h2>
        <p className="text-center text-gray-300 mb-8">
        Thailand is a global leader in the field of professional plastic surgery, recognized for its advanced technology, innovative techniques, and highly skilled surgeons. The Countrys aesthetic medicine industry is renowned for its ability to combine medical excellence with exceptional patient care, delivering world-class results in a variety of surgical procedures. Whether its a subtle enhancement or a comprehensive transformation, Thai plastic surgery clinics provide unparalleled expertise, ensuring optimal outcomes and the highest standards of safety
        </p>

        <div className="flex justify-center mb-8 text-white">
          <button className={`px-4 py-2 ${activeTab === 'breast' ? 'text-orange-600' : ''}`} onClick={() => setActiveTab('breast')}>Breast</button>
          <button className={`px-4 py-2 ${activeTab === 'body' ? 'text-orange-600' : ''}`} onClick={() => setActiveTab('body')}>Body</button>
          <button className={`px-4 py-2 ${activeTab === 'face' ? 'text-orange-600' : ''}`} onClick={() => setActiveTab('face')}>Face</button>
        </div>

        <div className="grid grid-cols-3 gap-6">
        {procedures[activeTab].map((procedure, index) => (
  <ProcedureCard key={index} procedure={procedure} />
))}
        </div>
      </div>
    </section>
  );
}

function ProcedureCard({ procedure }) {
  return (
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 min-h-[300px]">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            alt={procedure.name}
            className="object-cover object-center h-full w-full"
            src={procedure.image}
          />
        </div>
        <div className="flex-1 bg-white bg-opacity-20 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{procedure.name}</h3>
          </div>
          <div className="mt-3">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
