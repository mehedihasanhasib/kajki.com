import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import ProfileTaskCard from "@/Components/Frontend/ProfileTaskCard";
import AppLayout from "@/Layouts/AppLayout";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProfileMyTasks({ tasks }) {
    const { flash } = usePage().props; // Assuming tasks are passed from the server

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
                            {tasks?.length > 0 ? (
                                tasks?.map((task, index) => {
                                    const { id, title, details } = task;
                                    return (
                                        <ProfileTaskCard
                                            key={id}
                                            title={title}
                                            details={details}
                                        />
                                    );
                                })
                            ) : (
                                <div className="text-lg font-semibold text-gray-800 text-center p-4">
                                    No Posted tasks found.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
