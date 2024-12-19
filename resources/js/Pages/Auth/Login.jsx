import FormInputError from "@/Components/Frontend/FormInputError";
import FormLabel from "@/Components/Frontend/FormLabel";
import FormSubmitButton from "@/Components/Frontend/FormSubmitButton";
import FormTextInput from "@/Components/Frontend/FormTextInput";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <AppLayout>
                <section className="flex justify-center p-4 items-center">
                    <div className="bg-white rounded-xl shadow-md p-4 lg:p-6 xl:p-8 w-full max-w-lg">
                        <h2 className="text-xl lg:text-2xl xl:text-3xl text-center font-extrabold text-gray-800 mb-6">
                            Sign in to Your Profile
                        </h2>
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <FormLabel htmlFor="email">Email:</FormLabel>
                                <FormTextInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={data.email}
                                    handleChange={handleChange}
                                />
                                {errors.email && (
                                    <FormInputError>
                                        {errors.email}
                                    </FormInputError>
                                )}
                            </div>
                            <div>
                                <FormLabel htmlFor="password">Password:</FormLabel>
                                <FormTextInput
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    handleChange={handleChange}
                                />
                                {errors.password && (
                                    <FormInputError>
                                        {errors.password}
                                    </FormInputError>
                                )}
                            </div>
                            <FormSubmitButton
                                processing={processing}
                                processingText="Signing in"
                            >
                                Sign in
                            </FormSubmitButton>
                        </form>
                        <div className="flex items-center my-6">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <button className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-lg shadow-md flex items-center justify-center hover:bg-gray-200 transition">
                            <img
                                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                alt="Google Logo"
                                className="h-6 mr-3"
                            />
                            Continue With Google
                        </button>
                        <div className="mt-6 text-center">
                            <span className="text-gray-600">
                                Don't Have an account?{" "}
                            </span>
                            <Link
                                href={route("register")}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
