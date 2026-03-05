"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";

export function InteractiveDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [, setSliderPosition] = useState(50);
    const [isHovering, setIsHovering] = useState(false);
    const controls = useAnimation();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion) return;

        const sequence = async () => {
            if (isHovering) return;
            await controls.start({ width: "30%" });
            if (isHovering) return;
            await controls.start({ width: "70%" });
            if (isHovering) return;
            await controls.start({ width: "50%" });
        };

        // Auto animate on mount
        const timer = setTimeout(sequence, 500);
        return () => clearTimeout(timer);
    }, [controls, isHovering, shouldReduceMotion]);

    const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const position = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
        setSliderPosition(position);
        controls.set({ width: `${position}%` });
    };

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
        setIsHovering(true);
        handleDrag(e);

        // Add global event listeners for drag
        const moveHandler = (e: MouseEvent | TouchEvent) => handleDrag(e);
        const stopHandler = () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseup", stopHandler);
            window.removeEventListener("touchmove", moveHandler);
            window.removeEventListener("touchend", stopHandler);
            setIsHovering(false);
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseup", stopHandler);
        window.addEventListener("touchmove", moveHandler);
        window.addEventListener("touchend", stopHandler);
    };

    return (
        <section className="w-full bg-white py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-[1024px] flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-4">
                        INTERACTIVE DEMO
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                        Drag to compare.
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-neutral-500">
                        This is exactly what your patients will see.
                    </p>
                </div>

                {/* Demo slider */}
                <div
                    ref={containerRef}
                    className="relative w-full max-w-[760px] aspect-[4/3] sm:aspect-video rounded-[24px] shadow-[var(--shadow-lg)] border border-neutral-200 overflow-hidden cursor-ew-resize select-none bg-neutral-100"
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                >
                    {/* Overlay Before/After Labels for Mockup purposes */}
                    <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                        <div className="text-neutral-400 font-bold text-2xl md:text-3xl font-semibold opacity-30">After Output</div>
                    </div>

                    <div className="absolute bottom-4 right-4 z-10 text-xs font-semibold text-neutral-900 bg-white px-3 py-1.5 rounded-sm shadow-sm">
                        After
                    </div>

                    {/* Overlay Image (Before) via clipPath */}
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-neutral-200 border-r-2 border-white flex items-center justify-center overflow-hidden"
                        initial={{ width: "50%" }}
                        animate={controls}
                        transition={{ ease: "easeInOut", duration: 1 }}
                    >
                        {/* Note: The inner image needs width based on parent viewport to not stretch. 
                 Using fixed absolute positioning to parent container matches background size. */}
                        <div className="absolute top-0 left-0 w-[100vw] sm:w-[760px] h-full flex items-center justify-center">
                            <div className="text-neutral-400 font-bold text-2xl md:text-3xl font-semibold opacity-30">Before Source</div>
                        </div>

                        <div className="absolute bottom-4 left-4 text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-sm shadow-sm pointer-events-none">
                            Before
                        </div>

                        {/* Slider Handle */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[40px] h-[40px] rounded-full bg-white shadow-[var(--shadow-md)] border border-neutral-200 flex items-center justify-center pointer-events-none cursor-ew-resize">
                            <ChevronsLeftRight className="w-4 h-4 text-neutral-700" />
                        </div>
                    </motion.div>
                </div>

                {/* Footer info */}
                <p className="mt-6 text-sm font-medium text-neutral-500 text-center">
                    Generated in 18 seconds · Sent to patient&apos;s phone instantly
                </p>
            </div>
        </section>
    );
}
