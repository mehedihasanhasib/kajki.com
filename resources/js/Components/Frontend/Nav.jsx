import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "./NavLink";
import NavLinkButton from "./NavLinkButton";
import MobileMenuToggleButton from "./MobileMenuToggleButton";

export default function Nav() {
    const { url } = usePage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth } = usePage().props;
    const isAuthenticated = auth.user !== null;

    return (
        <nav className="bg-white shadow-md w-full z-200">
            <div className="px-4 lg:px-8 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href={route("home")}
                        className="text-2xl font-extrabold text-gray-800 tracking-wide hover:text-blue-500 transition duration-200"
                    >
                        KajKi.com
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink route={route("home")} activePath="/">
                        Home
                    </NavLink>
                    <NavLink route={route("tasks")} activePath="/tasks">
                        Tasks
                    </NavLink>
                    {isAuthenticated ? (
                        <>
                            <NavLink
                                route={route("profile")}
                                activePath="/profile"
                            >
                                My Account
                            </NavLink>
                            <NavLinkButton route={route("task.create")}>
                                Post Task
                            </NavLinkButton>
                        </>
                    ) : (
                        <NavLinkButton route={route("login")}>
                            Sign in
                        </NavLinkButton>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <MobileMenuToggleButton
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col space-y-4 py-4 px-6">
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
                            <>
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
                                <Link
                                    href={route("task.create")}
                                    className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-lg"
                                >
                                    Post Task
                                </Link>
                            </>
                        ) : (
                            <Link
                                href={route("login")}
                                className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 shadow-lg"
                            >
                                সাইন ইন
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
