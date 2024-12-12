import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Profile({ auth }) {
    const [user, setUser] = useState(auth.user);
    const { data, setData, patch, processing, errors, reset } = useForm({
        name: user.name,
        phone: user.phone,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        patch(route('profile.update'));
    };

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        setData(event.target.name, event.target.value);
    };
    return (
        <AppLayout>
            <Head>
                <title>Profile</title>
            </Head>
            <section className="py-2 xl:flex w-full">
                <ProfileSideBar />

                <div className="flex-1">
                    <div className="bg-white shadow-md p-6 md:p-8">
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* <!-- Email Field --> */}
                            <div className="space-y-2">
                                <label
                                    for="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ইমেইল
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="আপনার ইমেইল লিখুন"
                                    value={user.email}
                                    disabled={true}
                                />
                            </div>

                            {/* <!-- Name Field --> */}
                            <div className="space-y-2">
                                <label
                                    for="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    নাম
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="আপনার নাম লিখুন"
                                    value={user.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <span className="text-red-600 text-sm mt-1">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            {/* <!-- Phone Field --> */}
                            {/* <div className="space-y-2">
                                <label
                                    for="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    ফোন নম্বর
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="আপনার ফোন নম্বর লিখুন"
                                    value={user.phone ?? ""}
                                    onChange={handleChange}
                                />
                            </div> */}
                            {/* <!-- Location Field --> */}
                            {/* <div className="space-y-2">
                                <label
                                    for="location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    লোকেশন
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="location"
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                        placeholder="আপনার লোকেশন লিখুন"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
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
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- Password Field --> */}
                            {/* <div className="space-y-2">
                                <label
                                    for="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    পাসওয়ার্ড
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                        placeholder="পাসওয়ার্ড লিখুন"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div> */}

                            {/* <!-- Profile Picture Upload --> */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    প্রোফাইল ছবি
                                </label>
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                                        <svg
                                            className="h-12 w-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <label
                                        htmlFor="image"
                                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        ছবি আপলোড করুন
                                    </label>
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="image"
                                    />
                                </div>
                            </div>

                            {/* <!-- Save Button --> */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
