import ProfileTaskCard from "@/Components/Frontend/ProfileTaskCard";
import { usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import ProfileLayout from "@/Layouts/ProfileLayout";

export default function ProfileMyTasks({ tasks }) {
    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.message) {
            toast.success(flash.message);
        } else if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash.message, flash.error]);

    return (
        <ProfileLayout>
            <div className="md:w-3/4 p-8">
                <section className="w-full">
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
