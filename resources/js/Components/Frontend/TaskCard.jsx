import { Link } from "@inertiajs/react";
import React from "react";

export default function TaskCard() {
    return (
        <>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 m-2">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                    <div>
                        <h3 className="md:text-lg font-semibold mb-2">
                            Fix Leaking Kitchen Faucet
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            Downtown, 2.5 miles away
                        </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Open
                    </span>
                </div>
                <p className="text-gray-600 mb-4">
                    Need a plumber to fix a leaking kitchen faucet. The leak is
                    getting worse and needs urgent attention. Available for
                    inspection today.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        Plumbing
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        Urgent
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                        Home
                    </span>
                </div>

                <div className="flex justify-end">
                    <Link
                        href={route("task.show", { slug: "example-slug" })}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        <span>Details</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}
