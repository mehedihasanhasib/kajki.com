import FormInputError from "@/Components/Frontend/Form/FormInputError";
import FormLabel from "@/Components/Frontend/Form/FormLabel";
import FormSubmitButton from "@/Components/Frontend/Form/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/Form/FormTextInput";
import ProfileContent from "@/Layouts/ProfileContent";
import ProfileSideBar from "@/Components/Frontend/ProfileSideBar";
import AppLayout from "@/Layouts/AppLayout";
import { Head, useForm } from "@inertiajs/react";
import { toast } from "react-toastify";

export default function ProfileUpdatePassword() {
    const { data, setData, errors, put, reset, processing } = useForm({
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
            <section className="flex flex-col gap-3 p-2 xl:gap-0 xl:p-0 xl:flex-row w-full">
                <ProfileSideBar />

                <ProfileContent>
                    <form
                        className="space-y-6"
                        onSubmit={updatePassword}
                        encType="multipart/form-data"
                    >
                        {/* <!-- Current Password --> */}
                        <div className="space-y-2">
                            <FormLabel htmlFor="current_password" required={true}>
                                Current Password
                            </FormLabel>
                            <FormTextInput
                                id="current_password"
                                name="current_password"
                                type="password"
                                placeholder="Enter current password"
                                value={data.current_password}
                                handleChange={handleChange}
                                required={true}
                            />
                            <FormInputError>
                                {errors.current_password}
                            </FormInputError>
                        </div>
                        {/* <!-- New Password --> */}
                        <div className="space-y-2">
                            <FormLabel htmlFor="password" required={true}>
                                New Password
                            </FormLabel>
                            <FormTextInput
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter new password"
                                value={data.password}
                                handleChange={handleChange}
                                required={true}
                            />
                            <FormInputError>{errors.password}</FormInputError>
                        </div>
                        {/* <!-- Confirm New Password --> */}
                        <div className="space-y-2">
                            <FormLabel htmlFor="password_confirmation" required={true}>
                                Confirm New Password
                            </FormLabel>
                            <FormTextInput
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                placeholder="Confirm new password"
                                value={data.password_confirmation}
                                handleChange={handleChange}
                                required={true}
                            />
                            <FormInputError>
                                {errors.password_confirmation}
                            </FormInputError>
                        </div>

                        {/* <!-- Save Button --> */}
                        <div className="pt-4">
                            <FormSubmitButton
                                processing={processing}
                                processingText="Updating"
                            >
                                Update
                            </FormSubmitButton>
                        </div>
                    </form>
                </ProfileContent>
            </section>
        </AppLayout>
    );
}
