import React from "react";

export default function FormInputError({error}) {
    return <span className="text-red-600 text-sm mt-1">{error}</span>;
}
