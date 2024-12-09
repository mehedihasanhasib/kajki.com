import { Link, usePage } from "@inertiajs/react";

export default function ProfileSideBar() {
    const { url } = usePage();
    return (
        <div className="bg-white xl:w-[20vw] 2xl:w-[16vw]">
            <ul className="p-4">
                <li
                    className={`py-3 px-2 m-1 ${
                        url === "/profile" ? "bg-gray-200" : ""
                    }`}
                >
                    <Link href={route("profile")}>আমার প্রোফাইল</Link>
                </li>
                <li
                    className={`py-3 px-2 m-1 ${
                        url === "/profile/update-password" ? "bg-gray-200" : ""
                    }`}
                >
                    <Link href={route("profile.update.password")}>পাসওয়ার্ড পরিবর্তন</Link>
                </li>
                <li
                    className={`py-3 px-2 m-1 ${
                        url === "/profile/my-tasks" ? "bg-gray-100" : ""
                    }`}
                >
                    <Link href={route("profile.mytasks")}>আমার কাজগুলো</Link>
                </li>
                <li className={`py-3 px-2 m-1`}>
                    <Link href={route("logout")} method="post" as="button">
                        লগ আউট
                    </Link>
                </li>
            </ul>
        </div>
    );
}
