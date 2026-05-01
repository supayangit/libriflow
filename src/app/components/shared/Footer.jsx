import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 mx-auto w-full border-t border-gray-200">
            <div className="mx-auto w-full px-50 grid grid-cols-3 gap-10">

                {/* Brand */}
                <div className="text-left">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                        <span className="font-semibold text-lg">LibriFlow</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                        The ultimate digital library for students, professionals, and book enthusiasts.
                    </p>

                    <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaFacebook className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaInstagramSquare className="w-6 h-6 text-purple-500" />
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <FaTelegram className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="text-right">
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Catalog</li>
                        <li>Pricing</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-right">
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <p className="text-sm text-gray-600">hello@libriflow.com</p>
                    <p className="text-sm text-gray-600">+1 (555) 000-0000</p>
                    <p className="text-sm text-gray-600">San Francisco, CA</p>
                </div>

            </div>

            <div className="text-center text-xs text-gray-500 mt-10">
                © 2024 LibriFlow Digital Library. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;