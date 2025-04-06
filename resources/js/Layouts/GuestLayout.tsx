import React, { PropsWithChildren, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { User } from "@/types";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

interface PageProps extends Record<string, unknown> {
    auth?: {
        user: User;
    };
}

export default function GuestLayout({ children }: PropsWithChildren<{}>) {
    const { auth } = usePage<PageProps>().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link
                                    href="/"
                                    className="text-2xl font-bold text-blue-600"
                                >
                                    Stocku
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href="/"
                                    active={window.location.pathname === "/"}
                                >
                                    Beranda
                                </NavLink>
                                <NavLink
                                    href="/products"
                                    active={
                                        window.location.pathname === "/products"
                                    }
                                >
                                    Produk
                                </NavLink>
                                <NavLink
                                    href="/categories"
                                    active={
                                        window.location.pathname ===
                                        "/categories"
                                    }
                                >
                                    Kategori
                                </NavLink>
                                <NavLink
                                    href="/about"
                                    active={
                                        window.location.pathname === "/about"
                                    }
                                >
                                    Tentang Kami
                                </NavLink>
                                <NavLink
                                    href="/contact"
                                    active={
                                        window.location.pathname === "/contact"
                                    }
                                >
                                    Kontak
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3 flex items-center space-x-4">
                                <Link
                                    href="/cart"
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </Link>

                                {auth?.user ? (
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                >
                                                    {auth.user.name}

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link href="/profile">
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                ) : (
                                    <div className="space-x-4">
                                        <Link
                                            href="/login"
                                            className="text-sm text-gray-700 hover:text-gray-900"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href="/register"
                                            className="text-sm text-gray-700 hover:text-gray-900"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href="/"
                            active={window.location.pathname === "/"}
                        >
                            Beranda
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/products"
                            active={window.location.pathname === "/products"}
                        >
                            Produk
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/categories"
                            active={window.location.pathname === "/categories"}
                        >
                            Kategori
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/about"
                            active={window.location.pathname === "/about"}
                        >
                            Tentang Kami
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/contact"
                            active={window.location.pathname === "/contact"}
                        >
                            Kontak
                        </ResponsiveNavLink>
                    </div>

                    {auth?.user ? (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href="/profile">
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href="/logout"
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="space-y-1">
                                <ResponsiveNavLink href="/login">
                                    Log in
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="/register">
                                    Register
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Stocku
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Platform e-commerce terpercaya dengan berbagai
                                produk berkualitas untuk memenuhi kebutuhan
                                Anda.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Kategori
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Elektronik
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Fashion
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Kesehatan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Makanan & Minuman
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Layanan
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Bantuan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Pengiriman
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        Pengembalian
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 text-sm"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Hubungi Kami
                            </h3>
                            <ul className="space-y-2">
                                <li className="text-gray-600 text-sm">
                                    <span className="font-medium">Email:</span>{" "}
                                    info@stocku.com
                                </li>
                                <li className="text-gray-600 text-sm">
                                    <span className="font-medium">
                                        Telepon:
                                    </span>{" "}
                                    (021) 1234-5678
                                </li>
                                <li className="text-gray-600 text-sm">
                                    <span className="font-medium">Alamat:</span>{" "}
                                    Jl. Sudirman No. 123, Jakarta
                                </li>
                            </ul>
                            <div className="mt-4 flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-600"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-600"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-blue-600"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-200 pt-8">
                        <p className="text-center text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Stocku. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
