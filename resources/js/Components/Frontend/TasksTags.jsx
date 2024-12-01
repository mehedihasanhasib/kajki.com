import React from "react";

export default function TasksTags() {
    return (
        <div className="flex flex-wrap gap-2 py-4 px-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Open Tasks
                <button className="ml-2 focus:outline-none">×</button>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Within 10 miles
                <button className="ml-2 focus:outline-none">×</button>
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Price: $50-$200
                <button className="ml-2 focus:outline-none">×</button>
            </span>
        </div>
    );
}
