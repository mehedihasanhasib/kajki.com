import { Link } from "@inertiajs/react";

export default function PopularCategories({ category_id, category_name }) {
    return (
        <Link href={`/tasks?categories=${category_id}`}>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category_name}</h3>
                <p className="text-gray-600">Custom work & repairs</p>
            </div>
        </Link>
    );
}