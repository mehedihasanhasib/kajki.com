import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function MobileMenu() {
    const { url } = usePage();
    return (
        <ul
            id="mobile-menu"
            className="sm:hidden sm:w-0 px-4 w-full pb-4 text-nowrap bg-white shadow-md z-20 transition-all duration-300 overflow-hidden"
        >
            <li>
                <Link
                    href="/"
                    className={`block rounded py-2 ${
                        url === "/"
                            ? "text-blue-600 underline underline-offset-8"
                            : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                    }`}
                >
                    হোম
                </Link>
            </li>
            <li>
                <Link
                    href="/tasks"
                    className={`block rounded py-2 ${
                        url === "/tasks"
                            ? "text-blue-600 underline underline-offset-8"
                            : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                    }`}
                >
                    সকল কাজ
                </Link>
            </li>
            <li>
                <Link
                    href="/login"
                    id="loginButton"
                    className={`block rounded py-2 ${
                        url === "/login"
                            ? "text-blue-600 underline underline-offset-8"
                            : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                    }`}
                >
                    সাইন ইন
                </Link>
            </li>
            <li>
                <Link
                    href=""
                    id=""
                    className="block p-2 text-center rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    কাজ পোস্ট করুন
                </Link>
            </li>
        </ul>
    );
}
