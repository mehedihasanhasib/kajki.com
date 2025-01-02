import React from "react";

export default function FormInputTextArea({
    id,
    name,
    rows = "4",
    placeholder,
    handleChange,
    className=""
}) {
    return (
        <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            className={`mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-gray-300 focus:border-gray-300 ${className}`}
            onChange={(e) => handleChange(e)}
        ></textarea>
    );
}
