import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function TaskFilter({ categories, divisions, getFilterData }) {
    const [districts, setDistricts] = useState([]);
    const { data, setData, submit, processing, errors } = useForm();

    const filter = (updatedData) => {
        setData(updatedData);
        getFilterData(updatedData);
        router.get(route("tasks"), updatedData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedData = { ...data };

        if (name === "categories") {
            const checkboxes = Array.from(
                document.querySelectorAll('input[name="categories"]:checked')
            );
            const checkedCategories = checkboxes.map(
                (checkbox) => checkbox.value
            );
            if (checkedCategories.length > 0) {
                updatedData[name] = checkedCategories;
            } else {
                delete updatedData[name];
            }
        } else if (name === "division") {
            const selectedDivision = divisions.find(
                (division) => division.id == value
            );
            if (selectedDivision) {
                setDistricts(selectedDivision.district);
            } else {
                setDistricts([]);
            }
            if (value) {
                updatedData[name] = value;
            } else {
                delete updatedData[name];
                delete updatedData["district"];
            }
        } else {
            if (value) {
                updatedData[name] = value;
            } else {
                delete updatedData[name];
            }
        }

        filter(updatedData);
    };

    const handleBudgetFilter = (event) => {
        event.preventDefault();

        let updatedData = { ...data };

        const budget_min = document.getElementById("budget_min").value;
        const budget_max = document.getElementById("budget_max").value;

        if (budget_min) {
            updatedData["budget_min"] = budget_min;
        } else {
            delete updatedData["budget_min"];
        }

        if (budget_max) {
            updatedData["budget_max"] = budget_max;
        } else {
            delete updatedData["budget_max"];
        }

        filter(updatedData);
    };

    return (
        <aside className="w-full md:w-72 shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-5 space-y-6">
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
                            defaultValue=""
                            onChange={(e) => handleChange(e)}
                            className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">All</option>
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
                        <select
                            name="district"
                            onChange={(e) => handleChange(e)}
                            className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">All</option>
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
                        <form
                            onSubmit={handleBudgetFilter}
                            className="flex gap-3"
                        >
                            <input
                                type="number"
                                placeholder="Min"
                                name="budget_min"
                                id="budget_min"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                name="budget_max"
                                id="budget_max"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />

                            <input type="submit" className="hidden" />
                        </form>
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
                                        name="categories"
                                        onChange={(e) => handleChange(e)}
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
                        {/* Clear Filters */}
                        <button
                            onClick={() => filter({})}
                            className="w-full text-sm bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200"
                        >
                            Clear All Filters
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
