import TaskCard from "@/Components/Frontend/Task/TaskCard";
import TaskFilter from "@/Components/Frontend/Task/TaskFilter";
import AppLayout from "@/Layouts/AppLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

import "./pagination.css";

// import { Inertia } from '@inertiajs/inertia';

export default function Tasks({ tasks, categories, divisions }) {
    const [filterData, setFilterData] = useState({});

    const handlePageChange = (page) => {
        const updatedData = { ...filterData, page };
        router.get(route("tasks"), updatedData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getFilterData = (filterData) => {
        setFilterData(filterData);
    };
    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                <div className="flex flex-col md:flex-row gap-2 p-4 2xl:max-w-[1536px] 2xl:mx-auto">
                    {/* Filter Sidebar */}
                    <TaskFilter
                        categories={categories}
                        divisions={divisions}
                        getFilterData={getFilterData}
                    />

                    {/* Main Content */}
                    <section className="flex-1">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                            {tasks.data.map((task, index) => (
                                <TaskCard key={index} task={task} />
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
                                    onClick={() => handlePageChange(link.label)}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            </AppLayout>
        </>
    );
}
