"use client";

import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const productLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Treatments", href: "#" },
    ];

    const companyLinks = [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Book a demo", href: "#" },
    ];

    return (
        <footer className="w-full bg-neutral-900 pt-16 pb-8 px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Column 1 - Brand */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 border-b border-neutral-800 pb-8 md:border-b-0 md:pb-0">
                        <div className="flex items-center gap-2 mb-4">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 10C3 15.5228 7.47715 20 13 20C18.5228 20 23 15.5228 23 10"
                                    stroke="var(--color-neutral-900)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="text-[20px] font-bold text-white tracking-tight">
                                Smilecast
                            </span>
                        </div>
                        <p className="text-sm font-medium text-neutral-500 mb-6 max-w-[240px]">
                            AI-powered smile visualization for modern dental practices.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-150">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-150">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-150">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block"></div>

                    {/* Column 2 - Product */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold text-neutral-400 mb-4">Product</h4>
                        <ul className="flex flex-col gap-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm font-medium text-neutral-500 hover:text-white transition-colors duration-150">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Company */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold text-neutral-400 mb-4">Company</h4>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm font-medium text-neutral-500 hover:text-white transition-colors duration-150">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm font-medium text-neutral-500">
                        &copy; {new Date().getFullYear()} Smilecast. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
