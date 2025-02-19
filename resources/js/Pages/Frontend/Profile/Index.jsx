import FormInputError from "@/Components/Frontend/Form/FormInputError";
import FormLabel from "@/Components/Frontend/Form/FormLabel";
import FormSubmitButton from "@/Components/Frontend/Form/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/Form/FormTextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { asset } from "@/utils/helpers";

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
            setProfilePicture(URL.createObjectURL(files[0]));
        }
    };
    return (
        <ProfileLayout>
            <div className="md:w-3/4 p-8">
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                >
                    <div className="space-y-6">
                        {/* Email (non-editable) */}
                        <div>
                            <FormLabel htmlFor="email" className="font-medium">Email Address</FormLabel>
                            <div className="mt-1 border border-gray-300 rounded-md px-4 py-3 bg-gray-50 text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        {/* Name Field */}
                        <div>
                            <FormLabel htmlFor="name" className="font-medium">Full Name</FormLabel>
                            <div className="mt-1">
                                <FormTextInput
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="py-3 shadow-sm"
                                    placeholder="Enter your name"
                                    value={data.name}
                                    handleChange={handleChange}
                                />
                            </div>
                            {errors.name && (
                                <FormInputError>{errors.name}</FormInputError>
                            )}
                        </div>

                        {/* Profile Picture Upload */}
                        <div>
                            <FormLabel htmlFor="profile_picture" className="font-medium">Profile Picture</FormLabel>
                            <div className="mt-3 flex items-center space-x-6">
                                <div className="relative group">
                                    <img
                                        src={profilePicture ?? asset(`assets/images/user-avatar.webp`)}
                                        alt={`Profile picture preview`}
                                        className="h-28 w-28 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                    <label htmlFor="profile_picture" className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer">
                                        <span className="text-white text-xs">
                                            Choose
                                        </span>
                                    </label>
                                </div>
                                <div className="flex-1">
                                    <div className="mb-2">
                                        <label
                                            htmlFor="profile_picture"
                                            className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                                        >
                                            Choose New Image
                                        </label>
                                        <input
                                            type="file"
                                            name="profile_picture"
                                            id="profile_picture"
                                            className="hidden"
                                            onChange={handleProfilePictureChange}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Recommended: Square JPG or PNG, at least 512x512 pixels
                                    </p>
                                </div>
                            </div>
                            {errors.profile_picture && (
                                <FormInputError className="mt-2">{errors.profile_picture}</FormInputError>
                            )}
                        </div>

                        {/* Save Button */}
                        <div className="pt-6">
                            <FormSubmitButton
                                processing={processing}
                                processingText="Updating Profile..."
                                className="w-full py-3"
                            >
                                Save Changes
                            </FormSubmitButton>
                        </div>
                    </div>
                </form>
            </div>
        </ProfileLayout>
    );
}
