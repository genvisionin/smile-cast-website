"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 64);
    });

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "For Dentists", href: "#testimonials" },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-colors duration-200 ${isScrolled
                ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-[var(--shadow-sm)]"
                : "bg-transparent border-b border-transparent"
                }`}
            initial={{ height: 72 }}
            animate={{ height: isScrolled ? 60 : 72 }}
            transition={{ duration: 0.12 }}
        >
            {/* LEFT: Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <svg
                    width="20"
                    height="20"
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
                <span className="text-[20px] font-bold text-neutral-900 tracking-tight">
                    Smilecast
                </span>
            </div>

            {/* CENTER: Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors duration-120"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* RIGHT: CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
                <Button
                    className="hidden md:inline-flex bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl h-10 px-4 transition-colors duration-200"
                >
                    Start free trial
                </Button>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-neutral-900">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-white px-6 py-8 border-l border-neutral-200">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <div className="flex flex-col gap-6 mt-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl md:text-2xl font-semibold text-neutral-900"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl mt-4 h-12">
                                Start free trial
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.nav>
    );
}
