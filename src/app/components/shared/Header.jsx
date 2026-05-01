import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
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
                            <p className="text-sm font-medium">Alex Rivera</p>
                            <p className="text-xs text-gray-500">Premium Member</p>
                        </div>
                        <Image
                            src="/assets/user.jpg"
                            alt="user"
                            width={36}
                            height={36}
                            className="rounded-full object-cover"
                        />
                        <Link href="/signin" className="btn bg-blue-100 px-6 py-3 rounded-lg shadow">Sign In</Link>
                    </div>

                </div>
            </header>
    );
};

export default Header;