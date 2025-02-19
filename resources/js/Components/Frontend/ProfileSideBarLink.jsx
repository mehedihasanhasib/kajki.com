import { usePage, Link } from "@inertiajs/react";

export default function ProfileSideBarLink({
    route,
    activePath = "",
    method = "get",
    children,
    asButton = false,
}) {
    const { url } = usePage();
    return (
        <li
            className={`py-3 px-2 m-1 ${url === activePath
                ? "bg-blue-500 text-white font-extrabold xl:text-lg"
                : ""
                }`}
        >
            <Link
                preserveScroll={true}
                className="font-bold"
                href={route}
                method={method}
                as={asButton ? "button" : "a"}
            >
                {children}
            </Link>
        </li>
    );
}
