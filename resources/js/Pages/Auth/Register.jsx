import TextInput from "@/Components/TextInput";
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

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AppLayout>
            <Head>
                <title>Register</title>
            </Head>
            <section className="flex justify-center items-center p-4">
                <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg">
                    <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-6">
                        Create Your Account
                    </h2>
                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Full Name
                            </label>
                            <TextInput
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your full name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.name && (
                                <span className="text-red-600 text-sm mt-1">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Email Address
                            </label>
                            <TextInput
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.email && (
                                <span className="text-red-600 text-sm mt-1">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Password
                            </label>
                            <TextInput
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.password && (
                                <span className="text-red-600 text-sm mt-1">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-600"
                            >
                                Confirm Password
                            </label>
                            <TextInput
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                placeholder="Confirm your password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData("password_confirmation", e.target.value)
                                }
                                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.password_confirmation && (
                                <span className="text-red-600 text-sm mt-1">
                                    {errors.password_confirmation}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
                        >
                            {processing ? "Registering..." : "Register"}
                        </button>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="text-center">
                        <span className="text-gray-600">
                            Already have an account?{" "}
                        </span>
                        <Link
                            href={route("login")}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </section>
        </AppLayout>
    );
}
