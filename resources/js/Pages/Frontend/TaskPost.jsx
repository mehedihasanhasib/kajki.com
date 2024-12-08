import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function TaskPost() {
    return (
        <AppLayout>
            <Head>
                <title>Create Task</title>
            </Head>
            <section className="py-4">
                <div className="mx-auto max-w-4xl bg-white p-8 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Task Details
                    </h2>
                    <form action="#" method="POST">
                        {/* <!-- Task Title --> */}
                        <div className="mb-4">
                            <label
                                for="title"
                                className="block text-gray-700 font-medium"
                            >
                                Task Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="What task do you need help with?"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* <!-- Category --> */}
                        <div className="mb-4">
                            <label
                                for="category"
                                className="block text-gray-700 font-medium"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                <option value="">Select a category</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="carpentry">Carpentry</option>
                                <option value="electrical">Electrical</option>
                                <option value="cleaning">Cleaning</option>
                            </select>
                        </div>

                        {/* <!-- Description --> */}
                        <div className="mb-4">
                            <label
                                for="description"
                                className="block text-gray-700 font-medium"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Provide more details about your task"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            ></textarea>
                        </div>

                        {/* <!-- Urgency --> */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">
                                Urgency
                            </label>
                            <div className="mt-2 flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="urgency"
                                        value="urgent"
                                        className="text-blue-500 focus:ring focus:ring-blue-300"
                                    />
                                    <span className="ml-2 text-gray-700">
                                        Urgent
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="urgency"
                                        value="week"
                                        className="text-blue-500 focus:ring focus:ring-blue-300"
                                    />
                                    <span className="ml-2 text-gray-700">
                                        Within a week
                                    </span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="urgency"
                                        value="flexible"
                                        className="text-blue-500 focus:ring focus:ring-blue-300"
                                    />
                                    <span className="ml-2 text-gray-700">
                                        Flexible
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* <!-- Location --> */}
                        <div className="mb-4">
                            <label
                                for="location"
                                className="block text-gray-700 font-medium"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter your location (e.g., city or ZIP code)"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* <!-- Budget --> */}
                        <div className="mb-4">
                            <label
                                for="budget"
                                className="block text-gray-700 font-medium"
                            >
                                Budget (Optional)
                            </label>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                placeholder="Enter your budget (e.g., $50)"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* <!-- Contact Information --> */}
                        <div className="mb-4">
                            <label
                                for="contact-name"
                                className="block text-gray-700 font-medium"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="contact-name"
                                name="contact-name"
                                placeholder="Your Name"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                for="contact-phone"
                                className="block text-gray-700 font-medium"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="contact-phone"
                                name="contact-phone"
                                placeholder="Your Phone Number"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                for="contact-email"
                                className="block text-gray-700 font-medium"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="contact-email"
                                name="contact-email"
                                placeholder="Your Email Address"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* <!-- File Upload --> */}
                        <div className="mb-4">
                            <label
                                for="file-upload"
                                className="block text-gray-700 font-medium"
                            >
                                Upload Files (Optional)
                            </label>
                            <input
                                type="file"
                                id="file-upload"
                                name="file-upload"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Post Your Task
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </AppLayout>
    );
}
