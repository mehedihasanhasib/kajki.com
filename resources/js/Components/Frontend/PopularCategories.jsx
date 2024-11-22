import React from "react";

export default function PopularCategories() {
    return (
        <>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="md:w-8 md:h-8 w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </div>
                <h3 className="font-semibold mb-2">Carpentry</h3>
                {/* <p className="text-gray-600">Custom work & repairs</p> */}
            </div>
        </>
    );
}
