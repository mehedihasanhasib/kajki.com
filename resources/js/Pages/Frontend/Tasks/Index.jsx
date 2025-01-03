import TaskCard from "@/Components/Frontend/Task/TaskCard";
import TaskFilter from "@/Components/Frontend/Task/TaskFilter";
import TaskModal from "@/Components/Frontend/Task/TaskModal";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

export default function Tasks({ tasks, categories, divisions }) {
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [showTask, setShowTask] = useState({});
    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                <div className="flex flex-col md:flex-row gap-6 p-4 lg:p-6 2xl:max-w-[1536px] 2xl:mx-auto">
                    {/* Filter Sidebar */}
                    <TaskFilter categories={categories} divisions={divisions} />

                    {/* Main Content */}
                    <section className="flex-1">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            {tasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    showTaskModal={showTaskModal}
                                    setShowTaskModal={setShowTaskModal}
                                    setShowTask={setShowTask}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                {showTaskModal && (
                    <TaskModal
                        task={showTask}
                        setShowTaskModal={setShowTaskModal}
                    />
                )}
            </AppLayout>
        </>
    );
}
