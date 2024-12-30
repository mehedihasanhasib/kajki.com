import FormInputError from "@/Components/Frontend/FormInputError";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormSubmitButton from "@/Components/Frontend/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/FormTextInput";
import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Profile({ auth }) {
    const [profilePicture, setProfilePicture] = useState(
        auth.user.profile_picture
    );
    const { data, setData, processing } = useForm({
        _method: "PATCH",
        name: auth.user.name,
        profile_picture: null,
    });
    const [errors, setErrors] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        router.post(route("profile.update"), data, {
            forceFormData: true,
            onSuccess: ({ props }) => {
                toast.success("Profile Updated Successfully");
                setProfilePicture(props.auth.user.profile_picture);
            },
            onError: (validationErrors) => {
                toast.error("Error Updating Profile");
                setErrors({ ...validationErrors });
                console.log(errors);
            },
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(name, value);
    };

    const handleProfilePictureChange = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setData("profile_picture", files[0]);
        }
    };
    return (
        <AppLayout>
            <Head>
                <title>My Profile</title>
            </Head>
            <section className="flex flex-col gap-3 p-2 xl:gap-0 xl:p-0 xl:flex-row w-full">
                <ProfileSideBar />

                <div className="flex-1 shadow-lg xl:shadow-none">
                    <div className="bg-white shadow-md p-6 md:p-8">
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* <!-- Email Field --> */}
                            <div className="space-y-2">
                                <strong>Email: </strong>
                                <span>{auth.user.email}</span>
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
                                    value={data.name}
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
                                {errors.profile_picture && (
                                    <FormInputError>
                                        {errors.profile_picture}
                                    </FormInputError>
                                )}
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={
                                            profilePicture != null
                                                ? `/storage/${profilePicture}`
                                                : `/assets/images/user-avatar.webp`
                                        }
                                        alt={`KajKi.com`}
                                        style={{
                                            height: "120px",
                                            width: "120px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    <FormLabel
                                        htmlFor="profile_picture"
                                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Choose Image
                                    </FormLabel>
                                    {/* <label
                                        htmlFor="profile_picture"
                                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        Choose Image
                                    </label> */}
                                    <input
                                        type="file"
                                        name="profile_picture"
                                        className="hidden"
                                        id="profile_picture"
                                        onChange={(e) =>
                                            handleProfilePictureChange(e)
                                        }
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
