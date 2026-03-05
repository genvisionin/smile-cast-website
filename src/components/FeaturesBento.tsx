"use client";

import { motion } from "framer-motion";
import { Copy, Mail, Smartphone, MonitorSmartphone, Sparkles } from "lucide-react";

export function FeaturesBento() {
    const hoverAnim = {
        whileHover: {
            scale: 1.01,
            boxShadow: "var(--shadow-md)",
            borderColor: "var(--color-neutral-300)"
        },
        transition: { duration: 0.2, ease: "easeInOut" as const }
    };

    return (
        <section id="features" className="w-full bg-neutral-100 py-20 px-6 lg:px-8">
            <div className="mx-auto max-w-[1320px]">
                {/* Header */}
                <div className="mb-12">
                    <div className="text-xs font-semibold text-neutral-500 mb-3 uppercase tracking-wider">
                        PLATFORM FEATURES
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                        Everything your practice needs.
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-neutral-500">
                        Built for the moment a patient decides to say yes.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Card 1: Large Col-Span 2 */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col justify-between overflow-hidden relative"
                    >
                        <div className="mb-8 z-10 relative">
                            <span className="inline-block text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded-sm mb-4">
                                AI VISUALIZATION
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">Hyper-realistic simulations.</h3>
                            <p className="text-base font-medium text-neutral-500 max-w-lg">
                                Every simulation is patient-specific — not stock photos. The AI understands lighting, skin tone, and tooth geometry to produce results that look like real post-treatment photos.
                            </p>
                        </div>
                        {/* Visual Placeholder */}
                        <div className="relative h-48 sm:h-64 w-full bg-neutral-100 rounded-t-xl overflow-hidden self-end translate-y-8 flex items-end justify-center">
                            <div className="w-[80%] h-[90%] bg-neutral-200 rounded-t-lg shadow-sm flex items-center justify-center p-4">
                                {/* Simulated Before/After */}
                                <div className="w-full h-full bg-white rounded border border-neutral-300 flex overflow-hidden">
                                    <div className="w-1/2 h-full bg-neutral-100 flex items-center justify-center border-r border-dashed border-neutral-300 text-neutral-400 font-medium pb-4">
                                        Before
                                    </div>
                                    <div className="w-1/2 h-full bg-neutral-100 border-l border-neutral-200 flex items-center justify-center text-neutral-500 font-medium pb-4">
                                        After
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Small Col-Span 1 */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col justify-between"
                    >
                        <div>
                            <span className="inline-block text-xs font-semibold text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm mb-4 uppercase">
                                4 TREATMENTS
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">Every treatment covered.</h3>
                            <p className="text-base font-medium text-neutral-500">
                                Whitening · Veneers · Straightening · Gum Correction — all in one platform.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square bg-neutral-100 rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-neutral-400" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3: Small Col-Span 1 */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col justify-between"
                    >
                        <div className="mb-6">
                            <span className="inline-block text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded-sm mb-4">
                                PATIENT SHARING
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">Send a link. Close the case.</h3>
                            <p className="text-base font-medium text-neutral-500">
                                Every simulation gets a branded shareable link. Patients review it at home, show their family, and come back ready to commit.
                            </p>
                        </div>
                        <div className="h-32 bg-neutral-100 rounded-xl flex items-center justify-center self-center w-full max-w-[200px] mt-auto">
                            <Smartphone className="w-12 h-12 text-neutral-400" />
                        </div>
                    </motion.div>

                    {/* Card 4: Small Col-Span 1 */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col justify-between"
                    >
                        <div className="mb-6">
                            <span className="inline-block text-xs font-semibold text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm mb-4 uppercase">
                                COST TRANSPARENCY
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">Payment breakdown built in.</h3>
                            <p className="text-base font-medium text-neutral-500">
                                Show patients a clear treatment cost and payment plan right alongside their simulation. No surprises. More trust.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 mt-auto">
                            <div className="w-full h-8 bg-neutral-100 rounded-md"></div>
                            <div className="w-full h-8 bg-neutral-100 border border-neutral-200 rounded-md"></div>
                            <div className="w-full h-8 bg-neutral-100 rounded-md"></div>
                        </div>
                    </motion.div>

                    {/* Card 5: Small Col-Span 1 */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col justify-between"
                    >
                        <div>
                            <span className="inline-block text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded-sm mb-4 uppercase">
                                PATIENT RETENTION
                            </span>
                            <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">Re-engage after they leave.</h3>
                            <p className="text-base font-medium text-neutral-500">
                                Send promo codes and offers through the patient portal — even days after their visit. Keep your practice top of mind.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5 text-neutral-600" />
                            </div>
                            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                                <Copy className="w-5 h-5 text-neutral-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 6: Large Col-Span 2 (Bottom Left) */}
                    <motion.div
                        {...hoverAnim}
                        className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-[20px] shadow-[var(--shadow-sm)] border border-neutral-200 p-8 flex flex-col md:flex-row gap-8 justify-between items-center"
                    >
                        <div className="md:w-1/2">
                            <span className="inline-block text-xs font-semibold text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm mb-4 uppercase">
                                YOUR BRAND
                            </span>
                            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-3">Fully branded. Your name, your colors.</h3>
                            <p className="text-base font-medium text-neutral-500">
                                Every patient link and simulation view carries your clinic&apos;s identity. Patients see your name — not ours. Smilecast works invisibly in the background.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-center gap-6 bg-neutral-50 rounded-xl p-4 sm:p-8 shrink-0">
                            <div className="w-24 border-2 border-dashed border-neutral-300 aspect-[9/19] rounded-xl flex items-center justify-center bg-white shadow-sm opacity-50 relative">
                                <MonitorSmartphone className="w-8 h-8 text-neutral-300" />
                            </div>
                            <div className="h-6 w-6 rounded-full bg-neutral-200 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-neutral-600" />
                            </div>
                            <div className="w-28 shadow-[var(--shadow-lg)] aspect-[9/19] rounded-xl flex flex-col bg-white border border-neutral-200 overflow-hidden relative">
                                <div className="h-10 bg-neutral-900 w-full flex items-center justify-center">
                                    <div className="w-10 h-2 bg-white/50 rounded-full" />
                                </div>
                                <div className="flex-1 p-2 flex flex-col gap-2">
                                    <div className="w-full h-1/2 bg-neutral-100 rounded" />
                                    <div className="w-full h-1/4 bg-neutral-200 rounded" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
