"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import { authClient } from '@/lib/auth-client';
import { FaBars } from "react-icons/fa";

const Header = () => {
    const { data: session } = authClient.useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/signin";
                },
            },
        });
    };

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                    <span className="font-semibold text-lg">LibriFlow</span>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:block">
                    <Navbar />
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">

                    {/* User Info (hide on mobile) */}
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-gray-500">Welcome</p>
                        <p className="text-sm font-medium">
                            {session?.user?.name || "Guest"}
                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 relative rounded-full overflow-hidden">
                        <Image
                            src={session?.user?.image || "/assets/user.jpg"}
                            alt="user"
                            fill
                            sizes="40px"
                            className="object-cover"
                        />
                    </div>

                    {/* Auth Button (hide on very small screens) */}
                    <div className="hidden sm:block">
                        {session?.user ? (
                            <button
                                onClick={handleSignOut}
                                className="bg-blue-50 px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-100 transition"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                href="/signin"
                                className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-xl"
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-200 px-4 pb-4">
                    <Navbar mobile />

                    <div className="mt-4 flex flex-col gap-2">
                        {session?.user ? (
                            <button
                                onClick={handleSignOut}
                                className="bg-blue-50 px-4 py-2 rounded-lg text-left"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Link
                                href="/signin"
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