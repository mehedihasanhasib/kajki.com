import FormInputError from "@/Components/Frontend/Form/FormInputError";
import FormLabel from "@/Components/Frontend/Form/FormLabel";
import FormSubmitButton from "@/Components/Frontend/Form/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/Form/FormTextInput";
import AppLayout from "@/Layouts/AppLayout";
import { asset } from "@/utils/helpers";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [profilePicture, setProfilePicture] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("register.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleProfilePictureChange = (event) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            setData("profile_picture", files[0]);
            setProfilePicture(URL.createObjectURL(files[0]));
        }
    };

    return (
        <AppLayout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="flex justify-center items-center lg:p-4">
                <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 xl:p-8 w-full max-w-lg">
                    <h2 className="text-xl lg:text-2xl text-center font-extrabold text-gray-800 mb-6">
                        Register Your Account
                    </h2>
                    <form onSubmit={submit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <FormLabel htmlFor="name" required={true}>Name:</FormLabel>
                            <FormTextInput
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name"
                                value={data.name}
                                handleChange={handleChange}
                                required={false}
                            />
                            {errors.name && (
                                <FormInputError>{errors.name}</FormInputError>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <FormLabel htmlFor="email" required={true}>Email:</FormLabel>
                            <FormTextInput
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@email.com"
                                value={data.email}
                                handleChange={handleChange}
                                required={true}
                            />
                            {errors.email && (
                                <FormInputError>{errors.email}</FormInputError>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <FormLabel htmlFor="password" required={true}>Password:</FormLabel>
                            <FormTextInput
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={data.password}
                                handleChange={handleChange}
                                required={true}
                            />
                            {errors.password && (
                                <FormInputError>
                                    {errors.password}
                                </FormInputError>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <FormLabel htmlFor="password_confirmation" required={true}>
                                Confirm Password:
                            </FormLabel>
                            <FormTextInput
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                placeholder="Confirm Password"
                                value={data.password_confirmation}
                                handleChange={handleChange}
                                required={true}
                            />
                            {errors.password_confirmation && (
                                <FormInputError>
                                    {errors.password_confirmation}
                                </FormInputError>
                            )}
                        </div>

                        {/* Profile Picture */}
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
                                    src={profilePicture || asset(`assets/images/user-avatar.webp`)}
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

                        {/* Submit Button */}
                        <FormSubmitButton
                            processing={processing}
                            processingText="Registering"
                        >
                            Register
                        </FormSubmitButton>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="text-center">
                        <span className="text-gray-600">Already Have an Account? </span>
                        <Link
                            href={route("login")}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
