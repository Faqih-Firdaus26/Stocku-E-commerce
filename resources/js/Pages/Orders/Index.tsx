import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Order } from "@/types";
import {
    formatCurrency,
    formatDate,
    formatOrderStatus,
    formatPaymentStatus,
} from "@/utils/format";

interface Props {
    orders: {
        data: Order[];
        current_page: number;
        last_page: number;
        total: number;
    };
}

export default function Index({ orders }: Props) {
    return (
        <>
            <Head title="Daftar Pesanan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-6">
                                Daftar Pesanan
                            </h1>

                            {orders.data.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">
                                        Anda belum memiliki pesanan
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
                                    {orders.data.map((order) => (
                                        <div
                                            key={order.id}
                                            className="border rounded-lg overflow-hidden"
                                        >
                                            <div className="p-4 bg-gray-50 border-b">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">
                                                            Order #
                                                            {order.order_number}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {formatDate(
                                                                order.created_at
                                                            )}
                                                        </p>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            {formatCurrency(
                                                                order.total_amount
                                                            )}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {formatPaymentStatus(
                                                                order.payment_status
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4">
                                                <div className="space-y-4">
                                                    {order.items.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="flex items-center space-x-4"
                                                        >
                                                            <img
                                                                src={
                                                                    item.product
                                                                        .images?.[0]
                                                                        ?.image ||
                                                                    "/images/default-product.png"
                                                                }
                                                                alt={
                                                                    item.product
                                                                        .name
                                                                }
                                                                className="w-16 h-16 object-cover rounded"
                                                            />

                                                            <div className="flex-1">
                                                                <h3 className="text-sm font-medium text-gray-900">
                                                                    {
                                                                        item
                                                                            .product
                                                                            .name
                                                                    }
                                                                </h3>
                                                                <p className="text-sm text-gray-500">
                                                                    {
                                                                        item.quantity
                                                                    }{" "}
                                                                    x{" "}
                                                                    {formatCurrency(
                                                                        item.price
                                                                    )}
                                                                </p>
                                                            </div>

                                                            <div className="text-right">
                                                                <p className="text-sm font-medium text-gray-900">
                                                                    {formatCurrency(
                                                                        item.subtotal
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-4 pt-4 border-t">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                Status Pesanan
                                                            </p>
                                                            <p className="text-sm text-gray-500">
                                                                {formatOrderStatus(
                                                                    order.order_status
                                                                )}
                                                            </p>
                                                        </div>

                                                        <Link
                                                            href={route(
                                                                "orders.show",
                                                                order.id
                                                            )}
                                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Lihat Detail
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {orders.last_page > 1 && (
                                <div className="mt-6">
                                    {/* Implement pagination component here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
