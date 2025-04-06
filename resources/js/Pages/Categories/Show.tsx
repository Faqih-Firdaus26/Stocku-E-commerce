import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Category, Product } from "@/types";
import { formatCurrency } from "@/utils/currency";

interface Props {
    category: Category;
    products: Product[];
}

export default function Show({ category, products }: Props) {
    const [sortBy, setSortBy] = useState("newest");

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case "price_low":
                return a.price - b.price;
            case "price_high":
                return b.price - a.price;
            case "newest":
                return (
                    new Date(b.created_at).getTime() -
                    new Date(a.created_at).getTime()
                );
            default:
                return 0;
        }
    });

    return (
        <GuestLayout>
            <Head title={category.name} />

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            {category.name}
                        </h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            {category.description}
                        </p>
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <label
                                htmlFor="sort"
                                className="text-sm font-medium text-gray-700"
                            >
                                Urutkan:
                            </label>
                            <select
                                id="sort"
                                name="sort"
                                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Terbaru</option>
                                <option value="price_low">
                                    Harga: Rendah ke Tinggi
                                </option>
                                <option value="price_high">
                                    Harga: Tinggi ke Rendah
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {sortedProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group"
                            >
                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-w-3 aspect-h-2">
                                        <img
                                            src={product.images[0].image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.description}
                                        </p>
                                        <p className="mt-2 text-lg font-bold text-blue-600">
                                            {formatCurrency(product.price)}
                                        </p>
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
