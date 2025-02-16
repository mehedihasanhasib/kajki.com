import TaskCard from "@/Components/Frontend/Task/TaskCard";
import TaskFilter from "@/Components/Frontend/Task/TaskFilter";
import AppLayout from "@/Layouts/AppLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Tasks({ props, tasks, categories, divisions }) {
    const [filterData, setFilterData] = useState({});
    const handlePageChange = (page) => {
        const updatedData = { ...filterData, page };
        router.get(route("tasks"), updatedData, {
            preserveState: true,
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
                        <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 my-6 px-2">
                            {tasks.links.map((link, index) => {
                                // Hide "Previous" text on mobile, show only on larger screens
                                const label =
                                    link.label === "&laquo; Previous" ? (
                                        <>
                                            <span className="hidden sm:inline">
                                                &laquo; Previous
                                            </span>
                                            <span className="sm:hidden">
                                                &laquo;
                                            </span>
                                        </>
                                    ) : link.label === "Next &raquo;" ? (
                                        <>
                                            <span className="hidden sm:inline">
                                                Next &raquo;
                                            </span>
                                            <span className="sm:hidden">
                                                &raquo;
                                            </span>
                                        </>
                                    ) : (
                                        link.label
                                    );

                                return (
                                    <button
                                        key={index}
                                        disabled={!link.url}
                                        onClick={() =>
                                            handlePageChange(link.label)
                                        }
                                        className={`
                                                        min-w-[36px] h-[36px] px-2 sm:px-3 py-1 sm:py-2
                                                        rounded-md text-sm font-medium
                                                        transition-colors duration-200
                                                        ${
                                                            link.url
                                                                ? link.active
                                                                    ? "bg-blue-600 text-white"
                                                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                                                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                        }
                                                    `}
                                    >
                                        {typeof label === "object" ? (
                                            label
                                        ) : (
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: label,
                                                }}
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </AppLayout>
        </>
    );
}
