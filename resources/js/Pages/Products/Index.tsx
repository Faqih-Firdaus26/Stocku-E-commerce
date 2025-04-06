import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Product, Category } from "@/types";
import { formatCurrency } from "@/utils/currency";

interface Props {
    products: Product[];
    categories: Category[];
    filters: {
        category?: string;
        search?: string;
    };
}

export default function Index({ products, categories, filters }: Props) {
    const [search, setSearch] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || ""
    );
    const [sortBy, setSortBy] = useState("newest");

    const handleFilter = () => {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (selectedCategory) params.append("category", selectedCategory);
        window.location.href = `/products?${params.toString()}`;
    };

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
            <Head title="Produk" />

            <div className="bg-white">
                <div className="relative">
                    <div className="absolute inset-0">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/products-hero.jpg"
                            alt="Products Hero"
                        />
                        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Produk Kami
                        </h1>
                        <p className="mt-6 text-xl text-white max-w-3xl">
                            Temukan berbagai produk berkualitas dengan harga
                            terbaik untuk memenuhi kebutuhan Anda.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/4">
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h2 className="text-lg font-medium text-gray-900 mb-4">
                                    Filter
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="search"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Cari Produk
                                        </label>
                                        <input
                                            type="text"
                                            id="search"
                                            value={search}
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                            placeholder="Cari produk..."
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Kategori
                                        </label>
                                        <select
                                            id="category"
                                            value={selectedCategory}
                                            onChange={(e) =>
                                                setSelectedCategory(
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                        >
                                            <option value="">
                                                Semua Kategori
                                            </option>
                                            {categories.map((category) => (
                                                <option
                                                    key={category.id}
                                                    value={category.slug}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleFilter}
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Terapkan Filter
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/4">
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-sm text-gray-500">
                                    Menampilkan {sortedProducts.length} produk
                                </p>
                                <div className="flex items-center space-x-4">
                                    <label
                                        htmlFor="sort"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Urutkan:
                                    </label>
                                    <select
                                        id="sort"
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                        className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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

                            {sortedProducts.length === 0 ? (
                                <div className="text-center py-12">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Tidak ada produk ditemukan
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Coba ubah filter pencarian Anda untuk
                                        menemukan produk yang Anda cari.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                    {sortedProducts.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.slug}`}
                                            className="group"
                                        >
                                            <div className="relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                <div className="aspect-w-3 aspect-h-2">
                                                    <img
                                                        src={
                                                            product.images[0]
                                                                .image
                                                        }
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
                                                        {formatCurrency(
                                                            product.price
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
