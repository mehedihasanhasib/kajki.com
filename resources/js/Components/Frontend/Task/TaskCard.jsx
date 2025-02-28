import { Link } from "@inertiajs/react";

export default function TaskCard({ task = [], className = "" }) {
    const { title = "", details = "", address = "", slug = "" } = task;

    return (
        <div
            className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between ${className}`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {title.length > 30 ? title.substring(0, 30) + "..." : title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                        <svg
                            className="w-5 h-5 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>{address.length > 25 ? address.substring(0, 25) + "..." : address}</span>
                    </div>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Open
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
                {details.length > 120 ? details.substring(0, 120) + "..." : details}
            </p>

            {/* Requirements */}
            {/* <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h2>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        Plumbing
                    </span>
                    <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                        Urgent
                    </span>
                    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                        Experienced
                    </span>
                </div>
            </div> */}

            {/* Details Link */}
            <div className="mt-auto flex justify-end">
                <Link
                    href={route("task.show", { slug })}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                    <span>View Details</span>
                    <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
