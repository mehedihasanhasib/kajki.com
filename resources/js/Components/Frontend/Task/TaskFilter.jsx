import { Link, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function TaskFilter({ categories, divisions, getFilterData }) {
    const url = new URL(window.location.href);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    const [data, setData] = useState({});
    const [districts, setDistricts] = useState(() => {
        if (queryParams.division) {
            const division = divisions.find(
                (d) => d.id == queryParams.division
            );
            return division ? division.district : [];
        }
        return [];
    });
    const [budgetMin, setBudgetMin] = useState(queryParams.budget_min || "");
    const [budgetMax, setBudgetMax] = useState(queryParams.budget_max || "");
    const [updatedCategories, setUpdatedCategories] = useState(() => {
        const queryCategories = queryParams.categories
            ? queryParams.categories.split("_")
            : [];

        return categories.map((category) => {
            return {
                id: category.id,
                name: category.name,
                isChecked: queryCategories.includes(category.id.toString()),
            };
        });
    });

    useEffect(() => {
        setData(queryParams);
    }, []);

    const filter = (updatedData) => {
        setData(updatedData);
        // Reset categories when clearing filters
        if (Object.keys(updatedData).length === 0) {
            setUpdatedCategories(categories.map(category => ({
                id: category.id,
                name: category.name,
                isChecked: false,
            })));
        }
        getFilterData(updatedData);
        router.get(route("tasks"), updatedData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleChange = (event, id = null) => {
        const { name, value } = event.target;
        let updatedData = { ...data };

        if (name === "categories") {
            const ckeckedCategories = updatedCategories.map((category) => {
                return category.id === id
                    ? { ...category, isChecked: !category.isChecked }
                    : category;
            });

            setUpdatedCategories(ckeckedCategories);

            const checkedBoxes = ckeckedCategories
                .map((category) => (category.isChecked ? category.id : null))
                .filter((category) => category !== null);

            if (checkedBoxes.length > 0) {
                updatedData[name] = checkedBoxes.join("_");
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
        <div className="bg-white rounded-lg shadow-lg p-5 space-y-6">
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
                </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Categories
                </h4>
                <div className="space-y-2">
                    {updatedCategories.map((option) => (
                        <label key={option.id} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={option.isChecked}
                                name="categories"
                                onChange={(e) => handleChange(e, option.id)}
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

            {/* Clear Filters */}
            <div className="text-center">
                <button
                    // href={route("tasks")}
                    onClick={() => filter({})}
                    className="w-full text-sm bg-gray-100 text-gray-700 py-2.5 px-4 rounded-lg hover:bg-gray-200"
                >
                    Clear All Filters
                </button>
            </div>
        </div>
    );
}