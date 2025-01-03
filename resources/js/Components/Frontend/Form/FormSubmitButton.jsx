import React from "react";

export default function FormSubmitButton({
    processing,
    processingText,
    children,
}) {
    return (
        <button
            type="submit"
            disabled={processing}
            className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
        >
            {processing ? `${processingText} ...` : children}
        </button>
    );
}
