export interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "customer";
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface ProductImage {
    id: number;
    product_id: number;
    image: string;
    is_primary: boolean;
    order: number;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    is_featured: boolean;
    category: Category;
    images: {
        id: number;
        image: string;
    }[];
    created_at: string;
    updated_at: string;
}

export interface Cart {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    product: Product;
}

export interface Wishlist {
    id: number;
    user_id: number;
    product_id: number;
    product: Product;
}

export interface OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    subtotal: number;
    product: Product;
}

export interface Order {
    id: number;
    user_id: number;
    order_number: string;
    total_amount: number;
    payment_status: "pending" | "paid" | "failed" | "expired";
    order_status:
        | "pending"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled";
    payment_method: string | null;
    payment_token: string | null;
    shipping_address: {
        name: string;
        phone: string;
        address: string;
        city: string;
        province: string;
        postal_code: string;
    };
    billing_address: {
        name: string;
        phone: string;
        address: string;
        city: string;
        province: string;
        postal_code: string;
    };
    items: OrderItem[];
    created_at: string;
    updated_at: string;
}
