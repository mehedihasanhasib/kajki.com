import ProfileTaskCard from "@/Components/Frontend/ProfileTaskCard";
import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import ProfileLayout from "@/Layouts/ProfileLayout";

export default function ProfileMyTasks({ tasks }) {
    const { flash } = usePage().props; // Assuming tasks are passed from the server

    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);

    return (
        <ProfileLayout>
            <div className="md:w-3/4 p-8">
                <section className="flex flex-col gap-3 p-2 xl:gap-0 xl:p-0 xl:flex-row w-full">
                    <div className="space-y-4">
                        {tasks?.length > 0 ? (
                            tasks?.map((task, index) => {
                                const { id, title, details } = task;
                                return (
                                    <ProfileTaskCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        details={details}
                                    />
                                );
                            })
                        ) : (
                            <div className="text-lg font-semibold text-gray-800 text-center p-4">
                                No tasks found.
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </ProfileLayout>
    );
}
