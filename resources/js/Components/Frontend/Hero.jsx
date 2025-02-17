import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Hero() {
    const [animationData, setAnimationData] = useState(null);
    const [backgroundAnimationData, setBackgroundAnimationData] = useState(null);

    // Fetch the main animation (for the card)
    useEffect(() => {
        fetch("https://assets5.lottiefiles.com/packages/lf20_2cwDXD.json")
            .then(response => response.json())
            .then(data => setAnimationData(data));
    }, []);

    // Fetch the background animation
    useEffect(() => {
        fetch("https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json") // Replace with your preferred background animation
            .then(response => response.json())
            .then(data => setBackgroundAnimationData(data));
    }, []);

    return (
        <section className="relative overflow-hidden">
            {/* Background Animation */}
            {backgroundAnimationData && (
                <div className="absolute inset-0 z-0">
                    <Lottie
                        animationData={backgroundAnimationData}
                        loop={true}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Overlay to make content readable */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-blue-900/90 to-blue-800/90 z-10"></div>

            {/* Content */}
            <div className="relative max-w-[80vw] mx-auto md:px-6 py-6 md:py-12 lg:py-18 flex items-center z-20">
                <div className="grid xl:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium backdrop-blur-md">
                            🚀 Find the Best Professional for Your Task
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-200">
                            Connect with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skilled Experts</span> Effortlessly
                        </h1>
                        <p className="text-lg text-blue-100/80 max-w-xl">
                            Find verified professionals for your tasks in just a few clicks. Let’s get things done efficiently!
                        </p>

                        {/* Search Bar */}
                        {/* <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 shadow-md max-w-2xl">
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    placeholder="What type of task?"
                                    className="w-full p-3 pl-10 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500 shadow-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full p-3 pl-10 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500 shadow-sm"
                                />
                                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200">
                                    Search
                                </button>
                            </div>
                        </div> */}

                        {/* Stats */}
                        {/* <div className="flex flex-wrap gap-8">
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/10 rounded-lg p-3">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">25k+</div>
                                    <div className="text-blue-200">Verified Experts</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-purple-500/10 rounded-lg p-3">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">70k+</div>
                                    <div className="text-blue-200">Tasks Completed</div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Right - Animation Card */}
                    <div className="flex justify-center xl:justify-end">
                        <div className="w-full max-w-lg bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
                            {animationData && (
                                <Lottie animationData={animationData} loop={true} className="w-full h-full" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}