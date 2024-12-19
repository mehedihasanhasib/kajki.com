import React from "react";

export default function FormInputSelect({
    id,
    name,
}) {
    return (
        <select
            id={id}
            name={name}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-gray-300 focus:border-gray-300"
        >
            <option value="">Select a category</option>
            {/* {options.map((option) => {
                <option value="option">{option}</option>;
            })} */}
            <option value="plumbing">Plumbing</option>;
            <option value="carpentry">Carpentry</option>
            <option value="electrical">Electrical</option>
            <option value="cleaning">Cleaning</option>
        </select>
    );
}
