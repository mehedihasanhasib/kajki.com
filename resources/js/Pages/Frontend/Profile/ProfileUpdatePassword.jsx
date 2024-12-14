import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function ProfileUpdatePassword() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success("Password Updated Successfully");
            },
            onError: (errors) => {
                console.log(errors);
                if (errors.password) {
                    reset("password", "password_confirmation");
                }

                if (errors.current_password) {
                    reset("current_password");
                }

                toast.error("Something went worng");
            },
        });
    };
    return (
        <AppLayout>
            <Head>
                <title>Update Password</title>
            </Head>
            <section className="py-2 xl:flex w-full">
                <ProfileSideBar />

                <div className="flex-1">
                    <div className="bg-white shadow-md p-6 md:p-8">
                        <form
                            className="space-y-6"
                            onSubmit={updatePassword}
                            encType="multipart/form-data"
                        >
                            {/* <!-- Current Password --> */}
                            <div className="space-y-2">
                                <label
                                    for="current_password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    বর্তমান পাসওয়ার্ড
                                </label>
                                <input
                                    id="current_password"
                                    name="current_password"
                                    type="password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="আপনার বর্তমান পাসওয়ার্ড লিখুন"
                                    value={data.current_password}
                                    onChange={(e) =>
                                        setData(
                                            "current_password",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.current_password && (
                                    <span className="text-red-600 text-sm mt-1">
                                        {errors.current_password}
                                    </span>
                                )}
                            </div>
                            {/* <!-- New Password --> */}
                            <div className="space-y-2">
                                <label
                                    for="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    নতুন পাসওয়ার্ড
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="নতুন পাসওয়ার্ড লিখুন"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <span className="text-red-600 text-sm mt-1">
                                        {errors.password}
                                    </span>
                                )}
                            </div>
                            {/* <!-- Confirm New Password --> */}
                            <div className="space-y-2">
                                <label
                                    for="password_confirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    কনফার্ম নতুন পাসওয়ার্ড
                                </label>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    placeholder="পুনরায় নতুন পাসওয়ার্ড লিখুন"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                {errors.password_confirmation && (
                                    <span className="text-red-600 text-sm mt-1">
                                        {errors.password_confirmation}
                                    </span>
                                )}
                            </div>

                            {/* <!-- Save Button --> */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                                >
                                    সংরক্ষণ করুন
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
