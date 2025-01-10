import TaskCard from "@/Components/Frontend/Task/TaskCard";
import TaskFilter from "@/Components/Frontend/Task/TaskFilter";
import TaskModal from "@/Components/Frontend/Task/TaskModal";
import AppLayout from "@/Layouts/AppLayout";
import { Head, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

// import { Inertia } from '@inertiajs/inertia';

export default function Tasks({ tasks, categories, divisions }) {
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [task, setTask] = useState({});

    const handlePageChange = (url) => {
        if (url) {
            router.visit(url);
        }
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    useEffect(() => {
        showTaskModal
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");
    }, [showTaskModal]);
    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                <div className="flex flex-col md:flex-row gap-2 p-4 2xl:max-w-[1536px] 2xl:mx-auto">
                    {/* Filter Sidebar */}
                    <TaskFilter categories={categories} divisions={divisions} />

                    {/* Main Content */}
                    <section className="flex-1">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                            {tasks.data.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    showTaskModal={showTaskModal}
                                    setShowTaskModal={setShowTaskModal}
                                    setTask={setTask}
                                />
                            ))}
                        </div>

                        {/* pagination */}
                        <div className="pagination">
                            {tasks.links.map((link, index) => (
                                <button
                                    key={index}
                                    disabled={!link.url}
                                    className={
                                        link.active
                                            ? "active"
                                            : "p-2 bg-blue-300 text-black"
                                    }
                                    onClick={() => handlePageChange(link.url)}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                {showTaskModal && (
                    <TaskModal
                        task={task}
                        setShowTaskModal={setShowTaskModal}
                    />
                )}
            </AppLayout>
        </>
    );
}
