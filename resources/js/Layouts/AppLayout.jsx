import Footer from "@/Components/Frontend/Footer";
import Nav from "@/Components/Frontend/Nav";
import React from "react";

export default function AppLayout({ children }) {
    return (
        <>
            <header className="sticky top-0">
                <Nav />
            </header>
            <main className="2xl:px-80  bg-[#f8f9fa]">{children}</main>
            <footer className="bg-gray-800 text-white py-8">
                <Footer />
            </footer>
        </>
    );
}
