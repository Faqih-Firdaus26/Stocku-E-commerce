import { useEffect, FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Selamat Datang Kembali
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Silakan masuk ke akun Anda
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Ingat saya
                                </span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-blue-600 hover:text-blue-900"
                                >
                                    Lupa password?
                                </Link>
                            )}
                        </div>

                        <div className="mt-6">
                            <PrimaryButton
                                className="w-full justify-center"
                                disabled={processing}
                            >
                                Masuk
                            </PrimaryButton>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Belum punya akun?{" "}
                                <Link
                                    href={route("register")}
                                    className="font-medium text-blue-600 hover:text-blue-900"
                                >
                                    Daftar sekarang
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
