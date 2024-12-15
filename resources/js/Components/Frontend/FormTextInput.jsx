import React from "react";

export default function FormTextInput({
    type,
    name,
    id,
    placeholder,
    value,
    handleChange,
    className = "",
}) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
            className={`mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 ${className}`}
        />
    );
}
