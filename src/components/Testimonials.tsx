"use client";

import { motion } from "framer-motion";

export function Testimonials() {
    const testimonials = [
        {
            quote: "We used to spend 20 minutes explaining what veneers could look like. Now we show them in 30 seconds and they're already asking about booking dates.",
            name: "Dr. Sarah M.",
            clinic: "London, UK",
        },
        {
            quote: "The shareable link changed how we close cases. Patients go home, show their partner, and call back the next morning ready to commit.",
            name: "Dr. James K.",
            clinic: "Dubai, UAE",
        },
        {
            quote: "Five minutes to set up. Our logo, our colors. Patients think we built it ourselves. That's exactly what we wanted.",
            name: "Dr. Priya R.",
            clinic: "New York, USA",
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
                        What dentists are saying.
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

                            <div className="mt-auto">
                                <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
                                <div className="text-sm font-medium text-neutral-500">{t.clinic}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
