import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 sm:py-12 border-t border-gray-200">
            
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

                {/* Brand */}
                <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                        <span className="font-semibold text-lg">LibriFlow</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                        The ultimate digital library for students, professionals, and book enthusiasts.
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3">
                        <Link href="#" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaFacebook className="w-5 h-5 text-blue-500" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaInstagramSquare className="w-5 h-5 text-purple-500" />
                        </Link>
                        <Link href="#" className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaTelegram className="w-5 h-5 text-blue-500" />
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="/catalog">Catalog</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <p className="text-sm text-gray-600">hello@libriflow.com</p>
                    <p className="text-sm text-gray-600">+1 (555) 000-0000</p>
                    <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>

            </div>

            <div className="text-center text-xs text-gray-500 mt-10 px-4">
                © 2024 LibriFlow Digital Library. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;