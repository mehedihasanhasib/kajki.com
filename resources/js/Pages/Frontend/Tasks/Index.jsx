import TaskCard from "@/Components/Frontend/Task/TaskCard";
import TaskFilter from "@/Components/Frontend/Task/TaskFilter";
import AppLayout from "@/Layouts/AppLayout";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";

export default function Tasks({ tasks, categories, divisions }) {
    const [filterData, setFilterData] = useState({});
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State to manage filter visibility
    const [sortBy, setSortBy] = useState("date"); // State to manage sorting

    const handlePageChange = (page) => {
        const updatedData = { ...filterData, page };
        router.get(route("tasks"), updatedData, {
            preserveState: true,
        });
    };

    const getFilterData = (filterData) => {
        setFilterData(filterData);
    };

    const handleSortChange = (event) => {
        // const { value } = event.target;
        // setSortBy(value);
        // const updatedData = { ...filterData, sort: value };
        // router.get(route("tasks"), updatedData, {
        //     preserveState: true,
        // });
    };

    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                <div className="2xl:max-w-[1536px] 2xl:mx-auto px-4 pt-4">
                    <div className="flex justify-between md:justify-end items-center sticky top-0 z-20 bg-white p-3 rounded-lg shadow-sm">
                        {/* Filter Button - New Design */}
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden flex items-center gap-2 text-gray-700 font-medium px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                />
                            </svg>
                            Filters {filterData && Object.keys(filterData).length > 0 &&
                                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                    {Object.keys(filterData).length}
                                </span>
                            }
                        </button>

                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={handleSortChange}
                            className="text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                        >
                            <option value="date">Sort by Date</option>
                            <option value="budget">Sort by Budget</option>
                            <option value="popularity">Sort by Popularity</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 p-4 2xl:max-w-[1536px] 2xl:mx-auto">

                    {/* Filter Sidebar */}
                    <div className={`fixed md:relative inset-0 z-40 transform ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-white md:bg-transparent w-3/4 sm:w-2/3 md:w-72 h-full md:h-auto overflow-y-auto md:overflow-visible shadow-xl md:shadow-none`}>
                        {/* Mobile Filter Header */}
                        <div className="md:hidden sticky top-0 bg-white p-4 border-b z-10">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            {Object.keys(filterData).length > 0 && (
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="text-sm text-gray-600">
                                        {Object.keys(filterData).length} filter{Object.keys(filterData).length > 1 ? 's' : ''} applied
                                    </span>

                                </div>
                            )}
                        </div>
                        <TaskFilter
                            categories={categories}
                            divisions={divisions}
                            getFilterData={getFilterData}
                        />
                    </div>

                    {/* Main Content */}
                    <section className="flex-1">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
                                                        ${link.url
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