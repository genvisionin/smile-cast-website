"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// CountUp component wrapper for the numbers
function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

            // easeOutSine
            const easeProgress = Math.sin((progress * Math.PI) / 2);

            setCount(Math.floor(easeProgress * to));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(to);
            }
        };

        window.requestAnimationFrame(step);
    }, [isInView, to, duration]);

    return (
        <span ref={nodeRef}>
            {count}{suffix}
        </span>
    );
}

export function Stats() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[1024px] bg-white rounded-2xl shadow-[var(--shadow-sm)] p-8 lg:p-12 mt-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200">

                {/* STAT 1 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 pb-2 md:py-0 md:px-8 text-center md:text-left first:pt-0 first:pl-0 last:pr-0">
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 font-bold mb-2">
                        <CountUp to={60} suffix="%" />
                    </div>
                    <div className="text-base font-medium text-neutral-500 mb-1">
                        Increase in case acceptance
                    </div>
                    <div className="text-sm font-medium text-neutral-500 opacity-80">
                        Across visualization-enabled practices
                    </div>
                </div>

                {/* STAT 2 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 pb-2 md:py-0 md:px-8">
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 font-bold mb-2">
                        <CountUp to={20} suffix=" sec" />
                    </div>
                    <div className="text-base font-medium text-neutral-500 mb-1">
                        To generate a simulation
                    </div>
                    <div className="text-sm font-medium text-neutral-500 opacity-80">
                        From photo upload to patient-ready result
                    </div>
                </div>

                {/* STAT 3 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left pt-6 pb-2 md:py-0 md:pl-8">
                    <div className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 font-bold mb-2">
                        <CountUp to={3} suffix="×" />
                    </div>
                    <div className="text-base font-medium text-neutral-500 mb-1">
                        More consultations converted
                    </div>
                    <div className="text-sm font-medium text-neutral-500 opacity-80">
                        When patients can see their outcome first
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
