import { usePage } from "@inertiajs/react";

export default function Error() {
    const { status } = usePage().props;

    return (
        <div className="text-center mt-20">
            {status === 403 ? (
                <h1 className="text-3xl font-bold text-red-500">403 - Forbidden</h1>
            ) : (
                <h1 className="text-3xl font-bold text-gray-600">Something went wrong</h1>
            )}
            <p className="mt-4">You do not have permission to access this page.</p>
        </div>
    );
}
