"use client";

import { motion } from "framer-motion";

export function SocialProof() {
    const clinics = [
        "AURA DENTAL",
        "LUMINOUS SMILES",
        "THE LONDON IMPLANT CLINIC",
        "OAKWAY COSMETICS",
        "ELEVATE STUDIO",
    ];

    return (
        <div className="w-full bg-neutral-100 border-y border-neutral-200 py-6 overflow-hidden">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Left */}
                <div className="text-sm font-semibold text-neutral-500 whitespace-nowrap shrink-0">
                    Trusted by practices across
                </div>

                {/* Center / Marquee on Mobile, Static on Desktop */}
                <div className="flex-1 w-full overflow-hidden relative flex items-center">
                    {/* Desktop static layout */}
                    <div className="hidden md:flex items-center justify-center gap-6 w-full">
                        {clinics.map((clinic, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <span className="font-bold text-[16px] text-neutral-400 tracking-wider">
                                    {clinic}
                                </span>
                                {i !== clinics.length - 1 && (
                                    <div className="w-px h-4 bg-neutral-300" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile marquee layout */}
                    <div className="flex md:hidden relative w-full overflow-hidden">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

                        <motion.div
                            className="flex items-center gap-8 whitespace-nowrap"
                            animate={{ x: [0, -1000] }}
                            transition={{ ease: "linear", duration: 24, repeat: Infinity }}
                        >
                            {/* Repeat array for seamless looping */}
                            {[...clinics, ...clinics, ...clinics].map((clinic, i) => (
                                <div key={i} className="flex items-center gap-8">
                                    <span className="font-bold text-[16px] text-neutral-400 tracking-wider">
                                        {clinic}
                                    </span>
                                    <div className="w-px h-4 bg-neutral-300" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right */}
                <div className="text-sm font-semibold text-neutral-900 font-semibold whitespace-nowrap shrink-0">
                    2,400+ simulations generated
                </div>

            </div>
        </div>
    );
}
