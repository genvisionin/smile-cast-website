"use client";

import { motion } from "framer-motion";
import { Sparkles, LayoutTemplate, AlignCenter, Activity } from "lucide-react";

export function Treatments() {
    const treatments = [
        {
            title: "Teeth whitening",
            details: "Walk patients through every shade on the VITA scale and let them choose their target. The moment they pick their shade, the case is nearly closed.",
            icon: Sparkles,
            color: "var(--color-neutral-900)",
        },
        {
            title: "Veneers",
            details: "Veneer consultations live or die on the patient's ability to imagine the result. Show them their Hollywood smile in 20 seconds and watch the conversation change.",
            icon: LayoutTemplate,
            color: "var(--color-neutral-700)",
        },
        {
            title: "Straightening",
            details: "For patients sitting on the fence about aligners vs braces, seeing the final alignment removes the hesitation better than any before/after photo library.",
            icon: AlignCenter,
            color: "var(--color-neutral-500)",
        },
        {
            title: "Gum correction",
            details: "Gummy smile correction is one of the most underbooked treatments — only because patients don't know it's possible. One simulation changes that.",
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
