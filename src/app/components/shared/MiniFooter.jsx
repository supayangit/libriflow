
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MiniFooter = () => {
    return (
        <footer className="border-t border-slate-200 bg-white/90 py-10 sm:py-14 dark:border-slate-800 dark:bg-slate-950/95">
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
                <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2.5 sm:mt-6 md:mt-10 px-4">
                    © 2024 LibriFlow Digital Library. By Supayan C. All rights reserved.
                </div>

                {/* Right*/}
                <div className="flex gap-5 text-sm text-slate-600 dark:text-slate-300 font-medium">
                    <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition">
                        Privacy
                    </Link>
                    <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition">
                        Terms
                    </Link>
                    <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition">
                        Contact
                    </Link>
                </div>

            </div>
        </footer>
    );
};

export default MiniFooter;