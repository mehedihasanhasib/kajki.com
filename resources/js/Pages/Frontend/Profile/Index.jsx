import FormInputError from "@/Components/Frontend/FormInputError";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormSubmitButton from "@/Components/Frontend/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/FormTextInput";
import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Profile({ auth }) {
    const [user, setUser] = useState(auth.user);
    const { data, setData, patch, processing, errors, reset } = useForm({
        _method: 'PATCH',
        name: user.name,
        profile_picture: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        router.post(route("profile.update"), data, {
            forceFormData: true,
            onSuccess: () => toast.success("Profile Updated Successfully"),
            onError: () => toast.error("Error Updating Profile"),
        });
    };

    const handleChange = (event) => {
        const { name, type, value, files } = event.target;
        // Update local user state for non-file inputs
        if (type !== "file") {
            setUser((prevUser) => ({
                ...prevUser,
                [name]: value,
            }));
        }

        // Handle file and non-file inputs for Inertia form
        setData(name, value);
        
    };
    return (
        <AppLayout>
            <Head>
                <title>My Profile</title>
            </Head>
            <section className="py-2 xl:flex w-full">
                <ProfileSideBar />

                <div className="flex-1">
                    <div className="bg-white shadow-md p-6 md:p-8">
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* <!-- Email Field --> */}
                            <div className="space-y-2">
                                <strong>Email: </strong>
                                <span>{user.email}</span>
                            </div>

                            {/* <!-- Name Field --> */}
                            <div className="space-y-2">
                                <FormLabel htmlFor="name">Name:</FormLabel>

                                <FormTextInput
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="py-3"
                                    placeholder="Enter your name"
                                    value={user.name}
                                    handleChange={handleChange}
                                />
                                {errors.name && (
                                    <FormInputError>
                                        {errors.name}
                                    </FormInputError>
                                )}
                            </div>

                            {/* <!-- Profile Picture Upload --> */}
                            <div className="space-y-2">
                                <FormLabel htmlFor="image">
                                    Profile Picture:
                                </FormLabel>
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                                        <svg
                                            className="h-12 w-12 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <label
                                        htmlFor="profile_picture"
                                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Choose Image
                                    </label>
                                    <input
                                        type="file"
                                        name="profile_picture"
                                        className="hidden"
                                        id="profile_picture"
                                        onChange={(e) => setData('profile_picture', e.target.files[0])}
                                    />
                                </div>
                            </div>

                            {/* <!-- Save Button --> */}
                            <div className="pt-4">
                                <FormSubmitButton
                                    processing={processing}
                                    processingText="Updating"
                                >
                                    Update
                                </FormSubmitButton>
                                {/* <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                                >
                                    Update
                                </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
