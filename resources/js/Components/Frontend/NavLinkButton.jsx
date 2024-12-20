import { Link } from "@inertiajs/react";

export default function NavLinkButton({children, route}) {
    return (
        <Link
            href={route}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-200 shadow-lg"
        >
            {children}
        </Link>
    );
}
