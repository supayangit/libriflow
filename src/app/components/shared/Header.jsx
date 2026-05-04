"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { authClient } from "@/lib/auth-client";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const { data: session, isPending } = authClient.useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    closeMenu();
                    window.location.href = "/signin";
                },
            },
        });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full border-b border-gray-200 bg-white relative">
            <div className="mx-auto max-w-7xl px-4 md:px-5 lg:px-10 py-4 flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md relative overflow-hidden">
                        <Image
                        src="/assets/icon.png"
                        alt="icon"
                        fill
                        sizes="32px"
                        className="object-cover"                     
                        />
                    </div>
                    <span className="font-semibold text-lg">LibriFlow</span>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:block">
                    <Navbar />
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">

                    <div className="text-right hidden sm:block">
                        {isPending ? (
                            <div className="space-y-1 animate-pulse">
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                <div className="h-3 w-24 bg-gray-300 rounded"></div>
                            </div>
                        ) : (
                            <>
                                <p className="text-xs text-gray-500">Welcome</p>
                                <p className="text-sm font-medium">
                                    {session?.user?.name || "Guest"}
                                </p>
                            </>
                        )}
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 relative rounded-full overflow-hidden">
                        {!isPending && (
                            <Image
                                src={session?.user?.image || "/assets/user.png"}
                                alt="user"
                                fill
                                sizes="40px"
                                className="object-cover"
                            />
                        )}
                    </div>

                    <div className="hidden sm:block">
                        {isPending ? (
                            <div className="space-y-1 animate-pulse">
                                <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                <div className="h-3 w-24 bg-gray-300 rounded"></div>
                            </div>
                        ) : session?.user ? (
                            <button
                                onClick={() => {
                                    handleSignOut();
                                    closeMenu();
                                }}
                                className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-100 transition"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                href="/signin"
                                onClick={closeMenu}
                                className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-xl transition-transform duration-200"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden border-t border-gray-200 px-4 pb-4 space-y-4"
                >
                    <div onClick={closeMenu}>
                        <Navbar mobile />
                    </div>

                    <div className="flex flex-col gap-2">
                        {session?.user ? (
                            <button
                                onClick={() => {
                                    handleSignOut();
                                    closeMenu();
                                }}
                                className="bg-blue-50 px-4 py-2 rounded-lg text-left"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                href="/signin"
                                onClick={closeMenu}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;