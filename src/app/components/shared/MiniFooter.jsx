
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MiniFooter = () => {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left*/}
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

                {/* Center*/}
                <div className="text-center text-xs text-gray-500 mt-10 px-4">
                    © 2024 LibriFlow Digital Library. By Supayan C. All rights reserved.
                </div>

                {/* Right*/}
                <div className="flex gap-5 text-sm text-gray-600 font-medium">
                    <Link href="/privacy" className="hover:text-black transition">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-black transition">
                        Terms
                    </Link>
                    <Link href="/contact" className="hover:text-black transition">
                        Contact
                    </Link>
                </div>

            </div>
        </footer>
    );
};

export default MiniFooter;