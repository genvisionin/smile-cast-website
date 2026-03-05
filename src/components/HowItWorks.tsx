"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Share2 } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            badge: "01",
            icon: Camera,
            title: "Upload the photo",
            body: "Take a photo chairside or upload an existing one. Any smartphone camera works — no special equipment needed.",
        },
        {
            badge: "02",
            icon: Sparkles,
            title: "Choose the treatment",
            body: "Select whitening, veneers, straightening, or gum correction. Adjust shade, shape, and intensity with simple controls.",
        },
        {
            badge: "03",
            icon: Share2,
            title: "Share with your patient",
            body: "The simulation is ready in 20 seconds. Show it chairside or send a branded link directly to their phone.",
        }
    ];

    return (
        <section id="how-it-works" className="w-full bg-page py-20 px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-4">
                        SIMPLE WORKFLOW
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary text-neutral-900 mb-4">
                        Three steps to a confident yes.
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-neutral-500 max-w-2xl mx-auto">
                        From photo to shareable patient link — all inside one platform.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-[64px] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-neutral-300 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10 bg-white rounded-2xl shadow-[var(--shadow-sm)] p-8 border border-neutral-200 transition-all duration-200 hover:shadow-[var(--shadow-md)] hover:border-neutral-300 group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-200">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md">
                                    {step.badge}
                                </div>
                            </div>

                            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-base font-medium text-neutral-500">
                                {step.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
