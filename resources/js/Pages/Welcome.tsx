import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Product } from "@/types";
import { formatCurrency } from "@/utils/currency";

interface Props {
    canLogin: boolean;
    canRegister: boolean;
    featuredProducts: Product[];
    categories: {
        id: number;
        name: string;
        slug: string;
        image: string;
    }[];
}

export default function Welcome({
    canLogin,
    canRegister,
    featuredProducts,
    categories,
}: Props) {
    return (
        <GuestLayout>
            <Head title="Welcome" />

            <div className="relative">
                {/* Hero Section */}
                <div className="bg-blue-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                                Selamat Datang di Stocku
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                Temukan berbagai produk berkualitas dengan harga
                                terbaik
                            </p>
                            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/products"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                    >
                                        Mulai Belanja
                                    </Link>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <Link
                                        href="/about"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                                    >
                                        Pelajari Lebih Lanjut
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                        Kategori Produk
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/products?category=${category.slug}`}
                                className="group relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-w-3 aspect-h-2">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-semibold text-white">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                            Produk Unggulan
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {featuredProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.slug}`}
                                    className="group"
                                >
                                    <div className="relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="aspect-w-1 aspect-h-1">
                                            <img
                                                src={product.images[0].image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {product.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                {product.category.name}
                                            </p>
                                            <p className="mt-2 text-lg font-semibold text-blue-600">
                                                {formatCurrency(product.price)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
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
                            <h3 className="mt-6 text-lg font-medium text-gray-900">
                                Produk Berkualitas
                            </h3>
                            <p className="mt-2 text-base text-gray-500">
                                Kami menyediakan produk dengan kualitas terbaik
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
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
                            <h3 className="mt-6 text-lg font-medium text-gray-900">
                                Pengiriman Cepat
                            </h3>
                            <p className="mt-2 text-base text-gray-500">
                                Layanan pengiriman cepat dan aman
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">
                                Pembayaran Mudah
                            </h3>
                            <p className="mt-2 text-base text-gray-500">
                                Berbagai metode pembayaran yang tersedia
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-blue-600">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block">
                                Siap untuk mulai berbelanja?
                            </span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                                >
                                    Daftar Sekarang
                                </Link>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                                >
                                    Lihat Produk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
