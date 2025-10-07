"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Github } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand / About */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">MyStore</h2>
                    <p className="text-sm">
                        Your one-stop shop for trendy fashion and quality products. We bring
                        style and comfort right to your doorstep.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-white">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Customer Service
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/faq" className="hover:text-white">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/shipping" className="hover:text-white">
                                Shipping & Returns
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-white">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-white">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                    <form className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md text-gray-800 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Social icons */}
                    <div className="flex space-x-4 mt-4 text-xl">
                        <Link href="#" className="hover:text-white">
                            <Facebook />
                        </Link>
                        <Link href="#" className="hover:text-white">
                            <Instagram />
                        </Link>
                        <Link href="#" className="hover:text-white">
                            <Github />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} J Shop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
