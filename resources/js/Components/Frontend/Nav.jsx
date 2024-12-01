import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Nav() {
    const { url } = usePage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { auth } = usePage().props;
    const isAuthenticated = auth.user !== null;

    return (
        <nav className="bg-white shadow-md w-full z-200">
            <div className="container px-4 lg:px-8 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-extrabold text-gray-800 tracking-wide hover:text-blue-500 transition duration-200">
                        KajKi.com
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link
                        href={route("home")}
                        className={
                            url === "/"
                                ? "text-blue-600 underline underline-offset-8"
                                : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                        }
                    >
                        হোম
                    </Link>
                    <Link
                        href={route("tasks")}
                        className={
                            url === "/tasks"
                                ? "text-blue-600 underline underline-offset-8"
                                : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                        }
                    >
                        সকল কাজ
                    </Link>

                    {/* Dropdown Menu */}
                    {isAuthenticated ? (
                        <Link
                            href={route("profile")}
                            className={
                                url === "/profile"
                                    ? "text-blue-600 underline underline-offset-8"
                                    : "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-8"
                            }
                        >
                            একাউন্ট
                        </Link>
                    ) : (
                        <Link
                            href={route("login")}
                            className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-lg"
                        >
                            সাইন ইন
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-600 hover:text-indigo-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col space-y-4 py-4 px-6">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-500 font-medium transition duration-200"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-500 font-medium transition duration-200"
                        >
                            About
                        </a>

                        {/* Mobile Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                                className="text-gray-600 hover:text-blue-500 font-medium transition duration-200 flex items-center"
                            >
                                Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ml-2 transform transition-all duration-200 ${
                                        isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
                                    >
                                        Service 1
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-600 hover:bg-blue-100"
                                    >
                                        Service 2
                                    </a>
                                </div>
                            )}
                        </div>

                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-500 font-medium transition duration-200"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="bg-blue-500 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-lg"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
