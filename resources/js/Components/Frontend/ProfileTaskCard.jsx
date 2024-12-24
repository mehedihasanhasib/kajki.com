import React from "react";

export default function ProfileTaskCard({id, title, details}) {
    return (
        <>
            <div className="border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    {details}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        Posted on: Dec 20, 2024
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:underline">
                        View Details
                    </button>
                </div>
            </div>
        </>
    );
}
