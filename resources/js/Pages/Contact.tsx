import React, { FormEventHandler, ChangeEvent } from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

export default function Contact() {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <GuestLayout>
            <Head title="Hubungi Kami" />

            <div className="bg-white">
                <div className="relative">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/contact-hero.jpg"
                            alt="Contact Hero"
                        />
                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Hubungi Kami
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl">
                            Kami siap membantu Anda. Silakan hubungi kami
                            melalui form di bawah ini atau melalui informasi
                            kontak yang tersedia.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900">
                                Informasi Kontak
                            </h2>
                            <div className="mt-8 space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Telepon
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            +62 821-2345-6789
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Email
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            info@stocku.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Alamat
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Jl. Sudirman No. 123
                                            <br />
                                            Jakarta Pusat, 10220
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Jam Operasional
                                </h3>
                                <dl className="mt-2 text-base text-gray-500">
                                    <div className="mt-1">
                                        <dt className="inline">
                                            Senin - Jumat:
                                        </dt>
                                        <dd className="inline ml-2">
                                            09:00 - 17:00 WIB
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="inline">Sabtu:</dt>
                                        <dd className="inline ml-2">
                                            09:00 - 15:00 WIB
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="inline">Minggu:</dt>
                                        <dd className="inline ml-2">Tutup</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0">
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 gap-y-6"
                            >
                                <div>
                                    <InputLabel htmlFor="name" value="Nama" />
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="subject"
                                        value="Subjek"
                                    />
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="message"
                                        value="Pesan"
                                    />
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Kirim Pesan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
