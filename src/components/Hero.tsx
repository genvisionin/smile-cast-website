"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Check, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const entryTransition = {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1] as const,
    };

    const getAnimation = (delay: number, isRightColumn: boolean = false) => {
        if (shouldReduceMotion) {
            return {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { ...entryTransition, delay },
            };
        }
        return {
            initial: { opacity: 0, y: isRightColumn ? 0 : 8, x: isRightColumn ? 24 : 0 },
            animate: { opacity: 1, y: 0, x: 0 },
            transition: { ...entryTransition, delay },
        };
    };

    return (
        <section className="relative w-full bg-page pt-[120px] pb-[64px] min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 600px 400px at 10% 40%, rgba(0,0,0,0.04) 0%, transparent 70%)' }}
            />

            <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-center">

                {/* Left Column */}
                <div className="flex flex-col items-start pt-10">
                    <motion.div {...getAnimation(0)} className="text-xs font-semibold uppercase text-neutral-500 tracking-[0.08em] mb-4">
                        AI-POWERED DENTAL VISUALIZATION
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary text-neutral-900 mb-6">
                        <motion.div {...getAnimation(0.04)}>Show Patients</motion.div>
                        <motion.div {...getAnimation(0.08)}>Their Future Smile.</motion.div>
                        <motion.div {...getAnimation(0.12)} className="text-neutral-500">Before They Commit.</motion.div>
                    </h1>

                    <motion.p {...getAnimation(0.18)} className="text-lg md:text-xl font-medium text-neutral-500 max-w-[480px] mb-8">
                        Every day, patients leave your chair saying 'I need to think about it.' Smilecast shows them their result before they walk out — so they book instead of hesitating.
                    </motion.p>

                    <motion.div {...getAnimation(0.24)} className="flex flex-col sm:flex-row gap-3 mb-6">
                        <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl h-[48px] px-8 text-[16px]">
                            Start 7-day free trial
                        </Button>
                        <Button variant="ghost" size="lg" className="text-neutral-700 hover:text-neutral-900 rounded-xl h-[48px] px-6 text-[16px]">
                            <Play className="w-5 h-5 mr-2" />
                            Watch demo
                        </Button>
                    </motion.div>

                    <motion.div {...getAnimation(0.30)} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-neutral-500">
                        <div className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-neutral-900" strokeWidth={3} />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-neutral-900" strokeWidth={3} />
                            <span>Ready in 5 minutes</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-neutral-900" strokeWidth={3} />
                            <span>Cancel anytime</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column */}
                <motion.div
                    {...getAnimation(0.16, true)}
                    className="relative w-full aspect-[4/3] lg:aspect-square flex justify-center lg:justify-end items-center"
                >
                    <motion.div
                        animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full max-w-[440px] bg-white rounded-2xl shadow-[var(--shadow-lg)] p-2 lg:p-4"
                        style={{ transform: 'perspective(1200px) rotateY(-6deg) rotateX(2deg)' }}
                    >
                        {/* Mockup Card Interior */}
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-100 flex flex-col">
                            <div className="relative flex-1 bg-neutral-200">
                                {/* Left / Right split visualization filler */}
                                <div className="absolute inset-0 flex">
                                    <div className="w-1/2 bg-neutral-300"></div>
                                    <div className="w-1/2 bg-neutral-100/30"></div>
                                </div>

                                {/* Divider Bar */}
                                <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-neutral-900/50 shadow-sm z-10 flex items-center justify-center">
                                    <div className="w-6 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-neutral-200">
                                        <GripVertical className="w-3 h-3 text-neutral-900" />
                                    </div>
                                </div>

                                {/* Labels */}
                                <div className="absolute bottom-4 left-4 text-xs font-semibold text-neutral-500 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm shadow-sm">
                                    Before
                                </div>
                                <div className="absolute bottom-4 right-4 text-xs font-semibold text-neutral-900 font-bold bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm shadow-sm">
                                    After — Veneers B1
                                </div>
                            </div>

                            {/* Bottom Treatment Pills */}
                            <div className="h-[72px] bg-white border-t border-neutral-100 flex items-center justify-center gap-3 px-4">
                                <div className="h-8 rounded-full bg-neutral-100 border border-neutral-200 px-4 flex items-center justify-center text-xs font-semibold text-neutral-600">
                                    Whitening
                                </div>
                                <div className="h-8 rounded-full bg-neutral-900 px-4 flex items-center justify-center text-xs font-semibold text-white shadow-sm ring-2 ring-neutral-200">
                                    Veneers
                                </div>
                                <div className="h-8 rounded-full bg-neutral-100 border border-neutral-200 px-4 flex items-center justify-center text-xs font-semibold text-neutral-600">
                                    Alignment
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
