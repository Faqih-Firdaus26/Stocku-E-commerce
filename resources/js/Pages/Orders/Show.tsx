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
    order: Order;
}

export default function Show({ order }: Props) {
    return (
        <>
            <Head title={`Detail Pesanan #${order.order_number}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Detail Pesanan #{order.order_number}
                                </h1>

                                <Link
                                    href={route("orders.index")}
                                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Kembali ke Daftar Pesanan
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Order Info */}
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Informasi Pesanan
                                        </h2>
                                        <dl className="mt-4 space-y-4">
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Status Pesanan
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {formatOrderStatus(
                                                        order.order_status
                                                    )}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Status Pembayaran
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {formatPaymentStatus(
                                                        order.payment_status
                                                    )}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Metode Pembayaran
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {order.payment_method ||
                                                        "-"}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Tanggal Pesanan
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {formatDate(
                                                        order.created_at
                                                    )}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div>
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Alamat Pengiriman
                                        </h2>
                                        <dl className="mt-4 space-y-4">
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Nama
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .name
                                                    }
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Telepon
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .phone
                                                    }
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Alamat
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .address
                                                    }
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Kota
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .city
                                                    }
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Provinsi
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .province
                                                    }
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">
                                                    Kode Pos
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {
                                                        order.shipping_address
                                                            .postal_code
                                                    }
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Detail Produk
                                    </h2>
                                    <div className="mt-4 space-y-4">
                                        {order.items.map((item) => (
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
                                                    className="w-16 h-16 object-cover rounded"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="text-sm font-medium text-gray-900">
                                                        {item.product.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {item.quantity} x{" "}
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

                                    <div className="mt-6 pt-6 border-t">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                Total
                                            </h3>
                                            <p className="text-2xl font-bold text-indigo-600">
                                                {formatCurrency(
                                                    order.total_amount
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
