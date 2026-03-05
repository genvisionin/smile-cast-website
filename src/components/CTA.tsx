"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="relative w-full bg-neutral-900 py-[80px] px-6 lg:px-8 overflow-hidden">
            {/* Subtle radial brand gradient */}
            <div
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{ background: 'radial-gradient(ellipse 500px 300px at 50% 50%, rgba(217,119,87,0.12) 0%, transparent 70%)' }}
            />

            <div className="relative z-10 mx-auto max-w-[768px] flex flex-col items-center text-center">
                <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-6">
                    GET STARTED
                </div>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-bold mb-6">
                    The best consultations end with a yes.
                </h2>

                <p className="text-lg md:text-xl font-medium text-neutral-400 max-w-[520px] mb-10">
                    Give your patients the clarity they need to commit. Start your free trial — no credit card, no setup fees.
                </p>

                <Button className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl h-14 px-8 text-[18px] mb-4">
                    Start 7-day free trial
                </Button>

                <p className="text-sm font-medium text-neutral-500">
                    15 simulations included · All 4 treatments · Cancel anytime
                </p>
            </div>
        </section>
    );
}
