import TaskCard from "@/Components/Frontend/TaskCard";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

export default function Tasks() {
    const [filters, setFilters] = useState({
        categories: [],
        distance: "any",
        urgency: "all",
        price: { min: "", max: "" },
    });

    const categories = [
        { id: "plumbing", label: "Plumbing" },
        { id: "electrical", label: "Electrical" },
        { id: "cleaning", label: "Cleaning" },
        { id: "moving", label: "Moving" },
        { id: "painting", label: "Painting" },
        { id: "gardening", label: "Gardening" },
        { id: "assembly", label: "Furniture Assembly" },
        { id: "handyman", label: "Handyman" },
    ];

    return (
        <>
            <Head>
                <title>Tasks</title>
            </Head>
            <AppLayout>
                <div className="flex flex-col md:flex-row gap-6 p-4 lg:p-6">
                    {/* Filter Sidebar */}
                    <aside className="w-full md:w-72 shrink-0">
                        <div className="bg-white rounded-lg shadow-lg p-5 space-y-6">
                            <div>
                                <h3 className="text-lg text-center font-semibold text-gray-900 mb-4">
                                    Filters
                                </h3>

                                {/* Categories */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                                        Categories
                                    </h4>
                                    <div className="space-y-2">
                                        {categories.map(({ id, label }) => (
                                            <label
                                                key={id}
                                                className="flex items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    checked={filters.categories.includes(
                                                        id
                                                    )}
                                                    onChange={(e) => {
                                                        const newCategories = e
                                                            .target.checked
                                                            ? [
                                                                  ...filters.categories,
                                                                  id,
                                                              ]
                                                            : filters.categories.filter(
                                                                  (c) =>
                                                                      c !== id
                                                              );
                                                        setFilters({
                                                            ...filters,
                                                            categories:
                                                                newCategories,
                                                        });
                                                    }}
                                                />
                                                <span className="ml-2.5 text-sm text-gray-700">
                                                    {label}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Distance */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                                        Distance
                                    </h4>
                                    <select
                                        className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        value={filters.distance}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                distance: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="any">
                                            Any Distance
                                        </option>
                                        <option value="1">Within 1 mile</option>
                                        <option value="5">
                                            Within 5 miles
                                        </option>
                                        <option value="10">
                                            Within 10 miles
                                        </option>
                                        <option value="20">
                                            Within 20 miles
                                        </option>
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                                        Price Range
                                    </h4>
                                    <div className="flex gap-3">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={filters.price.min}
                                            onChange={(e) =>
                                                setFilters({
                                                    ...filters,
                                                    price: {
                                                        ...filters.price,
                                                        min: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={filters.price.max}
                                            onChange={(e) =>
                                                setFilters({
                                                    ...filters,
                                                    price: {
                                                        ...filters.price,
                                                        max: e.target.value,
                                                    },
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Urgency */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                                        Urgency
                                    </h4>
                                    <select
                                        className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        value={filters.urgency}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                urgency: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="all">All Tasks</option>
                                        <option value="urgent">
                                            Urgent Only
                                        </option>
                                        <option value="normal">
                                            Normal Priority
                                        </option>
                                    </select>
                                </div>

                                {/* Clear Filters */}
                                <button
                                    className="w-full text-sm bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200"
                                    onClick={() =>
                                        setFilters({
                                            categories: [],
                                            distance: "any",
                                            urgency: "all",
                                            price: { min: "", max: "" },
                                        })
                                    }
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <section className="flex-1">
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                            <TaskCard />
                        </div>
                    </section>
                </div>
            </AppLayout>
        </>
    );
}
