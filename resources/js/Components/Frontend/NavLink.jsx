import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function NavLink({ route, children, activePath }) {
    const { url } = usePage();
    return (
        <Link
            preserveScroll={true}
            href={route}
            className={`py-2 md:py-0 border-gray-100 font-bold ${url === activePath ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
        >
            {children}
        </Link>
    );
}
