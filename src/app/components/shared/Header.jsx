"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import { authClient } from '@/lib/auth-client';

const Header = () => {
    const { data: session } = authClient.useSession();
    console.log("session data", session);

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/signin"; // redirect to login page
                },
            },
        });
    };

    return (
        <header className="w-full border-b border-gray-200 bg-white">
            <div className="mx-auto px-10 py-4 flex items-center justify-between">

                {/* Left */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                    <span className="font-semibold text-lg">LibriFlow</span>
                </div>

                {/* Center */}
                <Navbar />

                {/* Right */}
                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs text-gray-500">Welcome</p>
                        <p className="text-sm font-medium">{
                            session?.user?.name || "Guest"
                        }</p>
                    </div>
                    <div className="w-10 h-10 relative rounded-full overflow-hidden">
                        <Image
                        src={session?.user?.image || "/assets/user.jpg"}
                        alt="user"
                        fill
                        sizes="40px"
                        className="object-cover"
                    />
                    </div>
                    {session?.user ? (
                        <button
                            onClick={handleSignOut}
                            className="btn bg-blue-50 px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition cursor-pointer"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link
                            href="/signin"
                            className="btn bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Sign In
                        </Link>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Header;