import React from "react";

export default function TextInput({type, name, id, placeholder}) {
    return (
        <input
            className="px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
        />
    );
}
