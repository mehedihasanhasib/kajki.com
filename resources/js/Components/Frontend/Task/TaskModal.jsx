import React from "react";

export default function TaskModal({ task, setShowTaskModal }) {
    const closeModal = () => {
        setShowTaskModal(false);
    };

    const {
        id = null,
        title = "",
        details = "",
        budget = "",
        address = "",
        contact_number = "",
        user = {},
        images = [],
    } = task;
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                {/* <!-- Header --> */}
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Task Details
                    </h3>
                    <button
                        onClick={closeModal}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {/* <!-- Task Info --> */}
                    <div className="space-y-6 mb-8">
                        <div>
                            <h4 className="text-2xl font-semibold">{title}</h4>
                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span>{address}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            {/* <!-- Budget Section --> */}
                            <div className="bg-green-50 p-4 rounded-lg flex-1 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                    className="w-8 h-8"
                                    fill="currentColor"
                                    role="img"
                                    aria-label="Taka sign"
                                >
                                    {/* <!-- Taka symbol --> */}
                                    <text
                                        className="text-green-700"
                                        x="50%"
                                        y="50%"
                                        dominantBaseline="middle"
                                        textAnchor="middle"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="70"
                                        fontWeight="bold"
                                    >
                                        ৳
                                    </text>
                                </svg>

                                <div>
                                    {/* <!-- <p className="text-sm text-green-700">Budget</p> --> */}
                                    <p className="text-2xl font-bold text-green-700">
                                        {budget}
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Contact Section --> */}
                            <div className="bg-blue-50 p-4 rounded-lg flex-1 flex items-center gap-4">
                                <svg
                                    className="w-8 h-8 text-blue-700"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div>
                                    {/* <!-- <p className="text-sm text-blue-700">Contact</p> --> */}
                                    <p className="text-2xl font-bold text-blue-700">
                                        {`+88${contact_number}`}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md flex gap-3">
                            {images.map((image) => {
                                return (
                                    <img
                                        key={image.id}
                                        src={`storage/${image.image_path}`}
                                        className="w-52 h-52 object-cover rounded-md"
                                    />
                                );
                            })}
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Details</h4>
                            <p className="text-gray-600">{details}</p>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2">Requirements</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                    Plumbing
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                    Urgent
                                </span>
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                    Professional
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Client Info --> */}
                    <div className="border-t pt-6">
                        <h4 className="font-medium mb-4">Posted By</h4>
                        <div className="flex items-start gap-4">
                            <img
                                className="w-12 h-12 rounded-full border border-gray-300"
                                src={
                                    user.profile_picture
                                        ? `/storage/users_profile_picture/${user.profile_picture}`
                                        : `/assets/images/user-avatar.webp`
                                }
                                alt="Client avatar"
                            />
                            <div>
                                <h5 className="font-medium">{user.name}</h5>
                                <p className="text-sm text-gray-600">
                                    Member since Jan 2024
                                </p>
                                <div className="flex items-center mt-1">
                                    <div className="flex">
                                        <svg
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-600">
                                            4.8 (42 reviews)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Footer --> */}
                <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3 justify-end shadow-sm">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                        Close
                    </button>
                    <a
                        href={`tel:+88${contact_number}`}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </div>
    );
}
