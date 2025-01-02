import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

export default function TaskDetails() {
    return (
        <AppLayout>
            <Head>
                <title>Task Details</title>
            </Head>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto p-3 sm:p-6">
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-green-700 text-sm sm:text-base font-medium">
                                    Open for applications
                                </span>
                            </div>
                            <span className="text-xs sm:text-sm text-green-600">
                                Posted 2 hours ago
                            </span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="border-b border-gray-100">
                            <div className="p-4 sm:p-6">
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                            Fix Leaking Kitchen Faucet
                                        </h1>
                                        <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3">
                                            <div className="flex items-center">
                                                <img
                                                    src="https://via.placeholder.com/40"
                                                    alt="John Doe"
                                                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full ring-2 ring-white"
                                                />
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        John Doe
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-500">
                                                        4.9 ★ (12 reviews)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:block h-6 w-px bg-gray-200"></div>
                                            <span className="flex items-center text-xs sm:text-sm text-gray-500">
                                                <svg
                                                    className="w-4 h-4 mr-1.5 mb-[1.5px]"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                Downtown Area
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <h3 className="ml-2 text-xs sm:text-sm font-medium text-gray-500">
                                            Timeline
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-sm sm:text-base text-gray-900">
                                        Needed within 24 hours
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <h3 className="ml-2 text-xs sm:text-sm font-medium text-gray-500">
                                            Budget
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-sm sm:text-base text-gray-900">
                                        $50 - $200
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        <h3 className="ml-2 text-xs sm:text-sm font-medium text-gray-500">
                                            Contact
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-sm sm:text-base text-gray-900">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                                    Description
                                </h2>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Need a plumber to fix a leaking kitchen
                                    faucet. The leak is getting worse and needs
                                    urgent attention. Available for inspection
                                    today. The faucet is a Moen single-handle
                                    model, approximately 2 years old.
                                </p>
                            </div>

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

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <a
                                    href="tel:+15551234567"
                                    className="w-full sm:flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 flex items-center justify-center"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    Call Now
                                </a>
                                {/* <button className="w-full sm:flex-1 bg-white text-gray-700 px-4 py-2.5 rounded-lg border text-sm sm:text-base font-medium hover:bg-gray-50">
                                    Save for Later
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
