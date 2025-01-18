import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function TaskFilter({ categories, divisions, getFilterData }) {
    const url = new URL(window.location.href);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    const [districts, setDistricts] = useState(() => {
        // Initialize districts based on initial division value
        if (queryParams.division) {
            const division = divisions.find(
                (d) => d.id == queryParams.division
            );
            return division ? division.district : [];
        }
        return [];
    });

    const { data, setData, submit, processing, errors } = useForm({});

    const [budgetMin, setBudgetMin] = useState(queryParams.budget_min || "");
    const [budgetMax, setBudgetMax] = useState(queryParams.budget_max || "");

    useEffect(() => {
        // if (queryParams.division) {
        //     const division = divisions.find(
        //         (d) => d.id == queryParams.division
        //     );
        //     if (division) {
        //         setDistricts(division.district);
        //     }
        // }
        setData(queryParams);
    }, []);

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
                updatedData[name] = checkedCategories.join("_");
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
                delete updatedData["district"];
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

    const handleBudgetChange = (event) => {
        const { name, value } = event.target;
        if (name === "budget_min") {
            setBudgetMin(value);
        }
        if (name === "budget_max") {
            setBudgetMax(value);
        }
    };

    const submitBudget = (event) => {
        const { name, value } = event.target;
        const updatedData = { ...data };
        if (name == "budget_min") {
            if (value) {
                updatedData["budget_min"] = value;
            } else {
                delete updatedData["budget_min"];
            }
        }
        if (name == "budget_max") {
            if (value) {
                updatedData["budget_max"] = value;
            } else {
                delete updatedData["budget_max"];
            }
        }

        filter(updatedData);
    };

    const handleKeyPress = (event) => {
        const { name, value } = event.target;
        const updatedData = { ...data };
        if (event.key === "Enter") {
            if (name == "budget_min") {
                if (value) {
                    updatedData["budget_min"] = value;
                } else {
                    delete updatedData["budget_min"];
                }
            }
            if (name == "budget_max") {
                if (value) {
                    updatedData["budget_max"] = value;
                } else {
                    delete updatedData["budget_max"];
                }
            }
            filter(updatedData);
        }
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
                            defaultValue={queryParams.division || ""}
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
                            defaultValue={queryParams.district || ""}
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
                        <div className="flex gap-3">
                            <input
                                type="number"
                                placeholder="Min"
                                name="budget_min"
                                value={budgetMin}
                                onChange={(e) => handleBudgetChange(e)}
                                onBlur={(e) => submitBudget(e)}
                                onKeyDown={(e) => handleKeyPress(e)}
                                id="budget_min"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <input
                                type="number"
                                placeholder="Max"
                                name="budget_max"
                                value={budgetMax}
                                onChange={(e) => handleBudgetChange(e)}
                                onBlur={(e) => submitBudget(e)}
                                onKeyDown={(e) => handleKeyPress(e)}
                                id="budget_max"
                                min={0}
                                className="w-full text-sm rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                            <input type="submit" className="hidden" />
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
