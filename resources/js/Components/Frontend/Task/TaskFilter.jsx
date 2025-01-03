import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function TaskFilter({ categories, divisions }) {
    const [districts, setDistricts] = useState([]);
    const { data, setData, submit, processing, errors } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        submit("get", route("tasks"), {
            preserveState: true,
            preserveScroll: true,
        });
        console.log(data);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, category: 1 });
    };

    const handleDivisionChange = (event) => {
        const { value } = event.target;
        setData({ ...data, division: value });
        divisions.forEach((division) => {
            if (value == division.id) {
                setDistricts(division.district);
            }
        });
    };
    return (
        <aside className="w-full md:w-72 shrink-0">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="bg-white rounded-lg shadow-lg p-5 space-y-6"
            >
                <div>
                    <h3 className="text-lg text-center font-semibold text-gray-900 mb-4">
                        Filters
                    </h3>

                    {/* Division */}
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                            Divisions
                        </h4>
                        <select
                            name="division"
                            onChange={(e) => handleDivisionChange(e)}
                            className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Division</option>
                            {divisions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.division}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* District */}
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                            District
                        </h4>
                        <select className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                            <option value="">Select Disrtict</option>
                            {districts.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.district}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                            Budget
                        </h4>
                        <div className="flex gap-3">
                            <input
                                type="number"
                                placeholder="Min"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                            Categories
                        </h4>
                        <div className="space-y-2">
                            {categories.map((option) => (
                                <label
                                    key={option.id}
                                    className="flex items-center"
                                >
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            handleChange(e, option.id)
                                        }
                                        value={option.id}
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    <span className="ml-2.5 text-sm text-gray-700">
                                        {option.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button
                            type="submit"
                            className="w-full text-sm bg-blue-500 text-white py-2.5 px-4 rounded-lg hover:bg-blue-600"
                        >
                            Apply Filters
                        </button>
                        {/* Clear Filters */}
                        <button className="w-full text-sm bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200">
                            Clear All Filters
                        </button>
                    </div>
                </div>
            </form>
        </aside>
    );
}
