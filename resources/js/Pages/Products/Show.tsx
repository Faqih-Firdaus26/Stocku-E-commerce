import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Product } from "@/types";
import { formatCurrency } from "@/utils/currency";

interface Props {
    product: Product;
    relatedProducts: Product[];
}

export default function Show({ product, relatedProducts }: Props) {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Implementasi logika tambah ke keranjang
        alert(
            `Produk ${product.name} ditambahkan ke keranjang sebanyak ${quantity}`
        );
    };

    return (
        <GuestLayout>
            <Head title={product.name} />

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        {/* Image gallery */}
                        <div className="flex flex-col">
                            <div className="relative rounded-lg overflow-hidden">
                                <img
                                    src={product.images[0].image}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-4 gap-4">
                                {product.images.slice(1).map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-lg overflow-hidden"
                                    >
                                        <img
                                            src={image.image}
                                            alt={`${product.name} - ${
                                                index + 2
                                            }`}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                {product.name}
                            </h1>
                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl text-blue-600">
                                    {formatCurrency(product.price)}
                                </p>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="text-base text-gray-700 space-y-6">
                                    {product.description}
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-700">
                                        Kategori:{" "}
                                        <Link
                                            href={`/products?category=${product.category.slug}`}
                                            className="font-medium text-blue-600 hover:text-blue-500"
                                        >
                                            {product.category.name}
                                        </Link>
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <p className="text-sm text-gray-700">
                                        Stok:{" "}
                                        <span className="font-medium">
                                            {product.stock}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <div className="flex items-center">
                                    <label
                                        htmlFor="quantity"
                                        className="mr-3 text-sm font-medium text-gray-700"
                                    >
                                        Jumlah
                                    </label>
                                    <select
                                        id="quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(Number(e.target.value))
                                        }
                                        className="rounded-md border-gray-300 py-1.5 text-base leading-5 focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        {[
                                            ...Array(
                                                Math.min(10, product.stock)
                                            ),
                                        ].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-8 flex">
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                                Produk Terkait
                            </h2>
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {relatedProducts.map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        href={`/products/${relatedProduct.slug}`}
                                        className="group"
                                    >
                                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="aspect-w-1 aspect-h-1">
                                                <img
                                                    src={
                                                        relatedProduct.images[0]
                                                            .image
                                                    }
                                                    alt={relatedProduct.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    {relatedProduct.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {
                                                        relatedProduct.category
                                                            .name
                                                    }
                                                </p>
                                                <p className="mt-2 text-lg font-semibold text-blue-600">
                                                    {formatCurrency(
                                                        relatedProduct.price
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </GuestLayout>
    );
}
