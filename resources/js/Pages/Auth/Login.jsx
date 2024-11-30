import TextInput from "@/Components/TextInput";
import AppLayout from "@/Layouts/AppLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
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
                    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg">
                        <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-6">
                            Welcome Back
                        </h2>
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
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
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                                {errors.password && (
                                    <span className="text-red-600 text-sm mt-1">
                                        {errors.password}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
                            >
                                {processing ? "Logging in..." : "Login"}
                            </button>
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
                            Continue with Google
                        </button>
                        {/* <Link
                            href={route("register")}
                            className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-lg shadow-md flex items-center justify-center mt-4 hover:bg-gray-200 transition"
                        >
                            Sign up with email
                        </Link> */}
                        <div className="mt-6 text-center">
                            <span className="text-gray-600">
                                Don't have an account?{" "}
                            </span>
                            <Link
                                href={route("register")}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}
