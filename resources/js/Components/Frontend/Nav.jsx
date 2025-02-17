import { Link, usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import NavLinkButton from "./NavLinkButton";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth } = usePage().props;
    const isAuthenticated = auth.user !== null;

    // Close menu when resizing to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="bg-white shadow-md w-full z-30 relative">
            <div className="px-4 lg:px-8 flex flex-wrap justify-between items-center py-4 2xl:max-w-[90vw] mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href={route("home")}
                        className="text-3xl font-extrabold text-blue-600 hover:text-blue-500 transition duration-200"
                    >
                        KajKi.com
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 focus:outline-none"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                    <svg
                        className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg
                        className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Unified Navigation Menu */}
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden md:flex'
                        } flex-col md:flex-row w-full md:w-auto md:space-x-8 mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
                >
                    <NavLink
                        route={route("home")}
                        activePath="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        route={route("tasks")}
                        activePath="/tasks"
                    >
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
                            <div className="py-2 md:py-0">
                                <NavLinkButton route={route("task.create")}>
                                    Post Task
                                </NavLinkButton>
                            </div>
                        </>
                    ) : (
                        <div className="py-2 md:py-0">
                            <NavLinkButton route={route("login")}>
                                Sign in
                            </NavLinkButton>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}