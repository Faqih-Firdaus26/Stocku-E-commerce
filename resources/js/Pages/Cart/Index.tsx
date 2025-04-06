import React from "react";
import { Head, useForm } from "@inertiajs/react";
import { Cart } from "@/types";
import { formatCurrency } from "@/utils/format";

interface Props {
    cartItems: Cart[];
    total: number;
}

export default function Index({ cartItems, total }: Props) {
    const { delete: destroy, put, processing } = useForm();

    const handleUpdateQuantity = (cart: Cart, quantity: number) => {
        put(route("cart.update", cart.id), {
            data: { quantity },
            preserveScroll: true,
        });
    };

    const handleRemoveItem = (cart: Cart) => {
        destroy(route("cart.destroy", cart.id), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Keranjang Belanja" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">
                                Keranjang Belanja
                            </h1>

                            {cartItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Keranjang belanja Anda kosong
                                    </p>
                                    <a
                                        href={route("products.index")}
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Belanja Sekarang
                                    </a>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {/* Cart Items */}
                                    <div className="space-y-4">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center space-x-4 p-4 border rounded-lg"
                                            >
                                                <img
                                                    src={
                                                        item.product.images?.[0]
                                                            ?.image ||
                                                        "/images/default-product.png"
                                                    }
                                                    alt={item.product.name}
                                                    className="w-24 h-24 object-cover rounded"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {item.product.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {
                                                            item.product
                                                                .category.name
                                                        }
                                                    </p>
                                                    <p className="mt-1 text-lg font-medium text-indigo-600">
                                                        {formatCurrency(
                                                            item.product.price
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleUpdateQuantity(
                                                                    item,
                                                                    Math.max(
                                                                        1,
                                                                        item.quantity -
                                                                            1
                                                                    )
                                                                )
                                                            }
                                                            disabled={
                                                                processing ||
                                                                item.quantity <=
                                                                    1
                                                            }
                                                            className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>

                                                        <span className="text-gray-900">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleUpdateQuantity(
                                                                    item,
                                                                    Math.min(
                                                                        item
                                                                            .product
                                                                            .stock,
                                                                        item.quantity +
                                                                            1
                                                                    )
                                                                )
                                                            }
                                                            disabled={
                                                                processing ||
                                                                item.quantity >=
                                                                    item.product
                                                                        .stock
                                                            }
                                                            className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                                        >
                                                            <svg
                                                                className="h-5 w-5"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleRemoveItem(
                                                                item
                                                            )
                                                        }
                                                        disabled={processing}
                                                        className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
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
                                        ))}
                                    </div>

                                    {/* Cart Summary */}
                                    <div className="border-t pt-6">
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-lg font-medium text-gray-900">
                                                Total
                                            </h2>
                                            <p className="text-2xl font-bold text-indigo-600">
                                                {formatCurrency(total)}
                                            </p>
                                        </div>

                                        <div className="mt-6 flex justify-end space-x-4">
                                            <a
                                                href={route("products.index")}
                                                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Lanjut Belanja
                                            </a>

                                            <a
                                                href={route("checkout.index")}
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Checkout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
