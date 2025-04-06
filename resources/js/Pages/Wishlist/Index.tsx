import React from "react";
import { Head, useForm } from "@inertiajs/react";
import { Wishlist } from "@/types";
import { formatCurrency } from "@/utils/format";

interface Props {
    wishlistItems: Wishlist[];
}

export default function Index({ wishlistItems }: Props) {
    const { delete: destroy, post, processing } = useForm();

    const handleAddToCart = (productId: number) => {
        post(route("cart.store", productId), {
            data: { quantity: 1 },
            preserveScroll: true,
        });
    };

    const handleRemoveFromWishlist = (wishlist: Wishlist) => {
        destroy(route("wishlist.destroy", wishlist.id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Daftar Produk yang Disukai" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">
                                Daftar Produk yang Disukai
                            </h1>

                            {wishlistItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Anda belum memiliki produk yang disukai
                                    </p>
                                    <a
                                        href={route("products.index")}
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Belanja Sekarang
                                    </a>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {wishlistItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white border rounded-lg overflow-hidden"
                                        >
                                            <img
                                                src={
                                                    item.product.images?.[0]
                                                        ?.image ||
                                                    "/images/default-product.png"
                                                }
                                                alt={item.product.name}
                                                className="w-full h-48 object-cover"
                                            />

                                            <div className="p-4">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    {item.product.name}
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {item.product.category.name}
                                                </p>
                                                <p className="mt-2 text-lg font-medium text-indigo-600">
                                                    {formatCurrency(
                                                        item.product.price
                                                    )}
                                                </p>

                                                <div className="mt-4 flex space-x-2">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                item.product.id
                                                            )
                                                        }
                                                        disabled={
                                                            processing ||
                                                            item.product
                                                                .stock === 0
                                                        }
                                                        className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                                    >
                                                        Tambah ke Keranjang
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveFromWishlist(
                                                                item
                                                            )
                                                        }
                                                        disabled={processing}
                                                        className="inline-flex items-center p-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                                    >
                                                        <svg
                                                            className="h-5 w-5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
