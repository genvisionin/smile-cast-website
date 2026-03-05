"use client";

import { motion } from "framer-motion";

export function Testimonials() {
    const testimonials = [
        {
            quote: "Consultations that used to end with 'I'll think about it' now end with a booking.",
        },
        {
            quote: "Patients share their simulation with family before the next appointment — and come back decided.",
        },
        {
            quote: "Setup takes 5 minutes. Patients assume you built it yourself.",
        }
    ];

    return (
        <section className="w-full bg-surface py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-4">
                        FROM THE CHAIR
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                        Why dentists choose Smilecast
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-neutral-50 rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 relative flex flex-col justify-between h-full"
                        >
                            {/* Decorative Quote Mark */}
                            <div className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-300 opacity-40 absolute top-4 left-6 pointer-events-none select-none" style={{ fontFamily: "serif", lineHeight: 1 }}>
                                &ldquo;
                            </div>

                            <p className="text-base font-medium text-neutral-700 italic relative z-10 mb-8 mt-4 leading-relaxed">
                                &quot;{t.quote}&quot;
                            </p>

                            {/* Removed attribution block entirely as they are now outcome observations */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
