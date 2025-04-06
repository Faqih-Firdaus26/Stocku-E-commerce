import React from "react";
import { Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function About() {
    return (
        <GuestLayout>
            <Head title="Tentang Kami" />

            <div className="bg-white">
                <div className="relative">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/about-hero.jpg"
                            alt="About Hero"
                        />
                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Tentang Stocku
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl">
                            Kami adalah platform e-commerce terpercaya yang
                            menyediakan berbagai produk berkualitas dengan harga
                            terbaik.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Visi & Misi Kami
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg text-gray-500">
                                Stocku berkomitmen untuk memberikan pengalaman
                                berbelanja online yang terbaik bagi pelanggan
                                kami. Kami percaya bahwa setiap produk yang kami
                                jual harus memenuhi standar kualitas tertinggi.
                            </p>
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
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Kualitas Terjamin
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Setiap produk melalui proses quality
                                            control yang ketat sebelum sampai ke
                                            tangan Anda.
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
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Pengiriman Cepat
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Kami bekerja sama dengan jasa
                                            pengiriman terpercaya untuk
                                            memastikan produk sampai tepat
                                            waktu.
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
                                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Layanan Pelanggan 24/7
                                        </h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Tim support kami siap membantu Anda
                                            kapan saja dan di mana saja.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img
                                className="rounded-lg shadow-xl"
                                src="/images/about-team.jpg"
                                alt="Our Team"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
