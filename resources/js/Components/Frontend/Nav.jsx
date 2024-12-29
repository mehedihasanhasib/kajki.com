import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import NavLink from "./NavLink";
import NavLinkButton from "./NavLinkButton";
import MobileMenuToggleButton from "./MobileMenuToggleButton";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth } = usePage().props;
    const isAuthenticated = auth.user !== null;

    return (
        <nav className="bg-white shadow-md w-full z-200">
            <div className="px-4 lg:px-8 flex justify-between items-center py-4 2xl:max-w-[90vw] mx-auto">
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
                </div>
            )}
        </nav>
    );
}
