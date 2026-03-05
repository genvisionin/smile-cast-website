"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutTemplate, AlignCenter, Activity } from "lucide-react";

export function Treatments() {
    const treatments = [
        {
            title: "Teeth whitening",
            details: "Upload a patient's photo to instantly visualize different shades of whitening, allowing them to see their brighter smile before committing.",
            icon: Sparkles,
            color: "var(--color-neutral-900)",
        },
        {
            title: "Veneers",
            details: "Instantly simulate custom veneer placements on any uploaded image, showing patients exactly how their new smile will comfortably fit their face.",
            icon: LayoutTemplate,
            color: "var(--color-neutral-700)",
        },
        {
            title: "Straightening",
            details: "Visualize the final alignment of crowded or gapped teeth by simply uploading a before photo—perfect for clear aligner consultations.",
            icon: AlignCenter,
            color: "var(--color-neutral-500)",
        },
        {
            title: "Gum correction",
            details: "Show patients how gum contouring will enhance their smile proportions with our rapid AI visualization from a single photo.",
            icon: Activity,
            color: "var(--color-neutral-400)",
        }
    ];

    return (
        <section className="w-full bg-neutral-100 py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-4">
                        TREATMENT TYPES
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                        All the treatments your patients ask about.
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {treatments.map((t, i) => (
                        <motion.div
                            key={t.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
                            className="bg-white rounded-[24px] border border-neutral-200 shadow-[var(--shadow-sm)] p-8 relative overflow-hidden group hover:shadow-[var(--shadow-md)] hover:border-neutral-300 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-6 text-neutral-700 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                                <t.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 mb-3">{t.title}</h3>

                            {t.details && (
                                <p className="text-sm font-medium text-neutral-500 mb-2 leading-relaxed">
                                    {t.details}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
