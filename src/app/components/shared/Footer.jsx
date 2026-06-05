import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white/90 py-6 sm:py-10 md:py-12 border-t border-slate-200 dark:bg-slate-950/95 dark:border-slate-800">

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 grid grid-cols-1 sm:flex sm:justify-between gap-5 sm:gap-10 text-center sm:text-left">

                {/* Brand */}
                <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
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

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 sm:mb-4">
                        The ultimate digital library for students, professionals, and book enthusiasts.
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3">
                        <Link href="#" className="w-8 h-8 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center transition hover:bg-blue-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-500/20">
                            <FaFacebook className="w-5 h-5 text-blue-500" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center transition hover:bg-blue-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-purple-500/20">
                            <FaInstagramSquare className="w-5 h-5 text-purple-500" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center transition hover:bg-blue-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-500/20">
                            <FaTelegram className="w-5 h-5 text-blue-500" />
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold mb-2 sm:mb-4 text-slate-900 dark:text-white">Quick Links</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><Link href="/catalog" className="hover:text-slate-900 dark:hover:text-white transition">Catalog</Link></li>
                        <li><Link href="/pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</Link></li>
                        <li><Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-2 sm:mb-4 text-slate-900 dark:text-white">Contact</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">hello@libriflow.com</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">+1 (555) 000-0000</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">San Francisco, CA</p>
                </div>

            </div>

            <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-5 sm:mt-8 md:mt-10 px-4">
                © 2024 LibriFlow Digital Library. By Supayan C. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;