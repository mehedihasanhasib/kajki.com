import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Nav() {
    const { url } = usePage();
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <>
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link className="text-2xl font-bold text-blue-600">
                            KajKi
                        </Link>

                        <div className="flex items-center">
                            <ul id="menu" className="hidden sm:flex space-x-6">
                                <li>
                                    <Link
                                        href={route('home')}
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
                                        href={route('tasks')}
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
                                        href={route('login')}
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
                                        href="/profile"
                                        id="loginButton"
                                        className={`block rounded py-2 ${
                                            url === "/login"
                                                ? "text-blue-600 underline underline-offset-8"
                                                : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                                        }`}
                                    >
                                        আমার একাউন্ট
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        id=""
                                        className="block p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                    >
                                        কাজ পোস্ট করুন
                                    </Link>
                                </li>
                            </ul>

                            <button
                                id="menu-toggle"
                                onClick={toggleMobileMenu}
                                className="sm:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 ml-4"
                                aria-expanded="false"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenu && <MobileMenu />}
            </nav>
        </>
    );
}
