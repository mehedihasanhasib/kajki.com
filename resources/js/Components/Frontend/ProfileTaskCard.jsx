import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import ConfirmDialog from "../ConfirmDialog";

export default function ProfileTaskCard({ id, title, details }) {

    const [showConfirmation, setShowConfirmation] = useState(false)

    const deleteConfirm = () => {
        setShowConfirmation(true)
    }

    return (
        <>
            <div className="border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow w-full">
                <h2 className="text-lg font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    {details.length > 120 ? details.substring(0, 120) + "..." : details}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        Posted on: Dec 20, 2024
                    </span>
                    <div className="flex gap-3">
                        <Link href={route("profile.mytask.edit", { id })} className="text-blue-600 text-sm font-medium hover:underline">
                            Edit
                        </Link>
                        <button onClick={deleteConfirm} className="text-red-600 text-sm font-medium hover:underline">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {showConfirmation && <ConfirmDialog deleteRoute={route('profile.mytask.delete', { id })} setShowConfirmation={setShowConfirmation} />}
        </>
    );
}
