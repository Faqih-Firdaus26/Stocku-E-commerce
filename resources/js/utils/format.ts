export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatDate = (date: string | Date): string => {
    return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));
};

export const formatOrderStatus = (status: string): string => {
    const statusMap: Record<string, string> = {
        pending: "Menunggu Pembayaran",
        processing: "Sedang Diproses",
        shipped: "Dalam Pengiriman",
        delivered: "Terkirim",
        cancelled: "Dibatalkan",
    };

    return statusMap[status] || status;
};

export const formatPaymentStatus = (status: string): string => {
    const statusMap: Record<string, string> = {
        pending: "Menunggu Pembayaran",
        paid: "Sudah Dibayar",
        failed: "Gagal",
        expired: "Kadaluarsa",
    };

    return statusMap[status] || status;
};
