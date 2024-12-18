import FormInputError from "@/Components/Frontend/FormInputError";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormTextInput from "@/Components/Frontend/FormTextInput";
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        event.preventDefault();
        setData(name, value);
    };

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success("Password Updated Successfully");
            },
            onError: (errors) => {
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
                                <FormLabel>Current Password</FormLabel>
                                <FormTextInput
                                    id="current_password"
                                    name="current_password"
                                    type="password"
                                    placeholder="Enter current password"
                                    value={data.current_password}
                                    handleChange={handleChange}
                                />
                                <FormInputError>
                                    {errors.current_password}
                                </FormInputError>
                            </div>
                            {/* <!-- New Password --> */}
                            <div className="space-y-2">
                                <FormLabel>New Password</FormLabel>
                                <FormTextInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter new password"
                                    value={data.password}
                                    handleChange={handleChange}
                                />
                                <FormInputError>
                                    {errors.password}
                                </FormInputError>
                            </div>
                            {/* <!-- Confirm New Password --> */}
                            <div className="space-y-2">
                                <FormLabel>Confirm New Password</FormLabel>
                                <FormTextInput
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={data.password_confirmation}
                                    handleChange={handleChange}
                                />
                                <FormInputError>
                                    {errors.password_confirmation}
                                </FormInputError>
                            </div>

                            {/* <!-- Save Button --> */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
