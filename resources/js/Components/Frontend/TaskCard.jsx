import { Link } from "@inertiajs/react";

export default function TaskCard({ task = [], className = "" }) {
    const {
        id = null,
        title = "",
        details = "",
        budget = "",
        address = "",
    } = task;
    return (
        <>
            <Link
                href={route("task.show", { slug: "example-slug" })}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col justify-between ${className}`}
            >
                <div className="flex justify-between items-start mb-2 md:mb-4">
                    <div>
                        <h3 className="md:text-lg font-semibold mb-2">
                            {title.length > 20
                                ? title.substring(0, 20) + "..."
                                : title}
                        </h3>
                        <div className="flex items-center text-md text-gray-500 mb-2">
                            <svg
                                className="w-4 h-4 mr-1 mb-[1.5px]"
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
                            {address.length > 20
                                ? address.substring(0, 20) + "..."
                                : address}
                        </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        Open
                    </span>
                </div>
                <p className="text-gray-600 mb-4">
                    {details.length > 165
                        ? details.substring(0, 165) + "..."
                        : details}
                </p>
                <div>
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                        Requirements
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                            Plumbing
                        </span>
                        <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-full text-xs sm:text-sm font-medium">
                            Urgent
                        </span>
                        <span className="px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full text-xs sm:text-sm font-medium">
                            Experienced
                        </span>
                    </div>
                </div> 
                <div className="mt-auto flex justify-end">
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
            </Link>
        </>
    );
}
