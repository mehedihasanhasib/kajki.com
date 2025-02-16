import { Link } from "@inertiajs/react";
import React from "react";

export default function PopularCategories({ category_id, category_name }) {
    return (
        <>
            <Link href={`/tasks?categories=${category_id}`}>
                <div className="bg-white p-4 m-2 md:p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                    <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="md:w-8 md:h-8 w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-2">{category_name}</h3>
                    {/* <p className="text-gray-600">Custom work & repairs</p> */}
                </div>
            </Link>
        </>
    );
}
