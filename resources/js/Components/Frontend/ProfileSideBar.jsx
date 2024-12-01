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
                    <Link href={route("profile")}>প্রোফাইল</Link>
                </li>
                <li className={`py-3 px-2 m-1 ${
                        url === "" ? "bg-gray-100" : ""
                    }`}>আমার কাজ</li>
            </ul>
        </div>
    );
}
