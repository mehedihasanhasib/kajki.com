import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProfileMyTasks() {
    const { flash, tasks } = usePage().props; // Assuming tasks are passed from the server

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <AppLayout>
            <Head>
                <title>My Tasks</title>
            </Head>
            <section className="py-2 xl:flex w-full">
                <ProfileSideBar />

                <div class="flex-1">
                    <div class="bg-white shadow-md p-6 md:p-8">
                        <h1 class="text-xl font-bold mb-4">My Posted Tasks</h1>

                        {/* <!-- Task List --> */}
                        <div class="space-y-4">
                            {/* <!-- Task 1 --> */}
                            <div class="border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h2 class="text-lg font-semibold text-gray-800">
                                    Task Title 1
                                </h2>
                                <p class="text-sm text-gray-600 mt-2">
                                    This is a description of the first task. It
                                    provides details about what needs to be
                                    done.
                                </p>
                                <div class="mt-4 flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        Posted on: Dec 20, 2024
                                    </span>
                                    <button class="text-blue-600 text-sm font-medium hover:underline">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Task 2 --> */}
                            <div class="border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h2 class="text-lg font-semibold text-gray-800">
                                    Task Title 2
                                </h2>
                                <p class="text-sm text-gray-600 mt-2">
                                    This is a description of the second task. It
                                    provides details about the requirements.
                                </p>
                                <div class="mt-4 flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        Posted on: Dec 19, 2024
                                    </span>
                                    <button class="text-blue-600 text-sm font-medium hover:underline">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Task 3 --> */}
                            <div class="border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow">
                                <h2 class="text-lg font-semibold text-gray-800">
                                    Task Title 3
                                </h2>
                                <p class="text-sm text-gray-600 mt-2">
                                    This is a description of the third task. It
                                    includes information about the objectives.
                                </p>
                                <div class="mt-4 flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        Posted on: Dec 18, 2024
                                    </span>
                                    <button class="text-blue-600 text-sm font-medium hover:underline">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
