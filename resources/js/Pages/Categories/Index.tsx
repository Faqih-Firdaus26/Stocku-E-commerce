import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category } from "@/types";

interface Props {
    categories: Category[];
}

export default function Index({ categories }: Props) {
    return (
        <GuestLayout>
            <Head title="Kategori" />

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Kategori Produk
                        </h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Temukan produk yang Anda butuhkan berdasarkan
                            kategori
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/products?category=${category.slug}`}
                                className="group"
                            >
                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                                            <p className="mt-1 text-sm text-gray-200">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
