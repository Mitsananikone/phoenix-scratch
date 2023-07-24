import React from "react";

export default function Introduction() {
    return (
    <section className="bg-cover bg-center py-20 px-6 md:px-16 text-white mt-32" style={{backgroundImage: 'url("/images/introduction/introduction.png")'}}>
    <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-6 font-bold">Welcome to the Pinnacle of Cosmetic Surgery Travel</h2>
        <p className="text-primary text-lg mb-8 font-semibold">Experience luxury like never before. Our travel tours are designed to provide you with the highest quality of cosmetic surgery while also giving you an unforgettable travel experience in the beautiful landscapes of Thailand.</p>

        <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6 bg-orange-400 bg-opacity-80 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Exclusive Services</h3>
                    <p>We offer a comprehensive array of personalized services, carefully crafted to meet your unique needs. Backed by our expert team, we strive to ensure you receive the pinnacle of care, blending luxury with world-class medical expertise for an unmatched experience."</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6  bg-orange-400 bg-opacity-80 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Top Surgeons</h3>
                    <p>Work with top surgeons who are renowned worldwide for their skill and expertise in the field of cosmetic surgery.Experience personalized care and innovative techniques that aim to exceed your expectations and transform your life</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6  bg-orange-400 bg-opacity-80 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Luxurious Travel</h3>
                    <p>Experience the allure and enchanting beauty of Thailand while staying in our exceptional accommodations. We deliver custom-tailored experiences, superior service, and a meticulously curated itinerary, ensuring your journey is unforgettable and truly one-of-a-kind</p>
                </div>
            </div>
        </div>

        <div className="text-center mt-10">
            <button className="px-8 py-3 bg-blue-700 text-white hover:bg-orange-400 hover:text-white font-semibold rounded transition duration-200">Start Your Journey</button>
        </div>
    </div>
</section>
);
}