import React from 'react'

export default function FormInputNumber({
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
            className={`mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-gray-300 focus:border-gray-300 ${className}`}
        />
    );
}
