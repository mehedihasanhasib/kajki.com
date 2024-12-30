import FormInputError from "@/Components/Frontend/FormInputError";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormSubmitButton from "@/Components/Frontend/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/FormTextInput";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

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
                        <div>
                            <FormLabel htmlFor="name">Name:</FormLabel>
                            <FormTextInput
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name"
                                value={data.name}
                                handleChange={handleChange}
                            />
                            {errors.name && (
                                <FormInputError>{errors.name}</FormInputError>
                            )}
                        </div>
                        <div>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            <FormTextInput
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@email.com"
                                value={data.email}
                                handleChange={handleChange}
                            />
                            {errors.email && (
                                <FormInputError>{errors.email}</FormInputError>
                            )}
                        </div>
                        <div>
                            <FormLabel htmlFor="password">Password:</FormLabel>
                            <FormTextInput
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                value={data.password}
                                handleChange={handleChange}
                            />
                            {errors.password && (
                                <FormInputError>
                                    {errors.password}
                                </FormInputError>
                            )}
                        </div>
                        <div>
                            <FormLabel htmlFor="password_confirmation">
                                Confirm Password:
                            </FormLabel>
                            <FormTextInput
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                placeholder="Confirm Password"
                                value={data.password_confirmation}
                                handleChange={handleChange}
                            />
                            {errors.password_confirmation && (
                                <FormInputError>
                                    {errors.password_confirmation}
                                </FormInputError>
                            )}
                        </div>
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
