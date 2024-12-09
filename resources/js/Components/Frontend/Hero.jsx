import React from "react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 md:py-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    আপনার কাজের জন্য দক্ষ লোক সন্ধান করুন
                </h1>
                <p className="md:text-lg mb-8">
                    আপনার প্রয়োজনীয় যে কোনও কাজের জন্য দক্ষ পেশাদারদের সাথে
                    যোগাযোগ স্থাপন করুন।
                </p>

                <div className="flex flex-col md:flex-row md:justify-center w-full md:space-x-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search by work name"
                        className="px-4 py-3 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 md:mb-0"
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        className="px-4 py-3 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 md:mb-0"
                    />

                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}
