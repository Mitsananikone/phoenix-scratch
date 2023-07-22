import React from "react";

export default function Introduction() {
    return (
    <section className="bg-cover bg-center py-20 px-6 md:px-16 text-white" style={{backgroundImage: 'url("/images/introduction/introduction.png")'}}>
    <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl mb-6 font-semibold">Welcome to the Pinnacle of Cosmetic Surgery Travel</h2>
        <p className="text-lg mb-8">Experience luxury like never before. Our travel tours are designed to provide you with the highest quality of cosmetic surgery while also giving you an unforgettable travel experience in the beautiful landscapes of Thailand.</p>

        <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6 bg-white bg-opacity-20 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Exclusive Services</h3>
                    <p>We offer a wide range of exclusive services that are designed to cater to your every need. Our team of experts ensure you receive the best care possible.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6 bg-white bg-opacity-20 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Top Surgeons</h3>
                    <p>Work with top surgeons who are renowned worldwide for their skill and expertise in the field of cosmetic surgery.</p>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-6">
                <div className="p-6 bg-white bg-opacity-20 rounded">
                    <h3 className="text-2xl mb-4 font-semibold">Luxurious Travel</h3>
                    <p>Explore the beauty of Thailand in luxurious accommodations, with personalized experiences and high-class service.</p>
                </div>
            </div>
        </div>

        <div className="text-center mt-10">
            <button className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-semibold rounded transition duration-200">Start Your Journey</button>
        </div>
    </div>
</section>
);
}