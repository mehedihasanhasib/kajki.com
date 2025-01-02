import Footer from "@/Components/Frontend/Footer";
import Nav from "@/Components/Frontend/Nav";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import 'react-toastify/dist/ReactToastify.min.css';


export default function AppLayout({ children }) {
    return (
        <>
            <header className="sticky top-0">
                <Nav />
            </header>
            <main className="bg-[#f8f9fa]">
                <ToastContainer />
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-8">
                <Footer />
            </footer>
        </>
    );
}
