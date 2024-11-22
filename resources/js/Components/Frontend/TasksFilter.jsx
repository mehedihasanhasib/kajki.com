import React from "react";

export default function TasksFilter() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <div className="flex-1">
                    <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option value="">All Categories</option>
                        <option value="electrical">Electrical</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="carpentry">Carpentry</option>
                        <option value="painting">Painting</option>
                    </select>
                </div>
                <div className="flex-1">
                    <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                        <option value="">Location</option>
                        <option value="nearby">Within 5 miles</option>
                        <option value="city">Within city</option>
                        <option value="remote">Remote work</option>
                    </select>
                </div>
                <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                    Search
                </button>
            </div>
        </div>
    );
}
