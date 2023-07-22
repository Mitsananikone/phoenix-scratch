import React from "react";
import { motion } from "framer-motion";

const serviceDetails = [
    {
        title: "Types of Surgeries",
        image: "/images/servicedetails/servicedetails1.png",
        content: "We offer a wide range of surgeries including, but not limited to, rhinoplasty, liposuction, breast augmentation, and tummy tucks."
    },
    {
        title: "Accommodations",
        image: "/images/servicedetails/servicedetails2.png",
        content: "Stay in the best hotels with complete amenities and 24/7 assistance. We ensure your comfort and well-being throughout your stay."
    },
    {
        title: "Amenities",
        image: "/images/servicedetails/servicedetails3.png",
        content: "Experience top-notch services, including therapeutic massages, private transportation, and personalized customer service."
    },
];

export default function ServiceDetailsSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <motion.section 
            className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 mx-auto" 
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Service Details
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceDetails.map((detail, index) => (
                        <motion.div key={index} className="rounded-lg shadow-lg overflow-hidden p-6 bg-white bg-opacity-20" variants={item}>
                            <img src={detail.image} className="w-full h-32 object-cover mb-4 rounded" alt={detail.title} />
                            <h3 className="text-2xl mb-4 font-semibold">{detail.title}</h3>
                            <p className="text-gray-500">{detail.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
