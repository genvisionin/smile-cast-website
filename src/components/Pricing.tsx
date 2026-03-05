"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {

    const plans = [
        {
            name: "Base",
            monthlyPrice: 49,
            tagline: "Perfect for solo practices",
            simulations: "60 simulations/month",
            quality: "1K image quality",
            features: [
                "All 4 treatments",
                "Shareable patient links (30-day expiry)",
                "Clinic logo on patient link",
                "Email support",
            ],
            isPopular: false,
            btnVariant: "secondary" as const,
        },
        {
            name: "Pro",
            monthlyPrice: 99,
            tagline: "For active cosmetic practices",
            simulations: "150 simulations/month",
            quality: "2K image quality",
            features: [
                "Everything in Base",
                "Permanent patient links (no expiry)",
                "Before/after slider on patient link",
                "Analytics dashboard",
                "Priority generation queue",
                "Chat + email support",
            ],
            isPopular: true,
            btnVariant: "default" as const,
        },
        {
            name: "Max",
            monthlyPrice: 159,
            tagline: "For high-volume & multi-dentist clinics",
            simulations: "250 simulations/month",
            quality: "2K image quality",
            features: [
                "Everything in Pro",
                "White-label patient links (your domain)",
                "Promo code & offer sending to patients",
                "Payment plan builder for patients",
                "Dedicated onboarding call",
                "Priority support — 4hr SLA",
            ],
            isPopular: false,
            btnVariant: "secondary" as const,
        }
    ];

    return (
        <section id="pricing" className="w-full bg-neutral-100 py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-4">
                        PRICING
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
                        Simple, transparent pricing.
                    </h2>
                    <p className="text-lg md:text-xl font-medium text-neutral-500">
                        Start free. Scale as your practice grows.
                    </p>
                </div>

                {/* Space instead of toggle */}
                <div className="mb-16"></div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-xl p-8 flex flex-col ${plan.isPopular
                                ? 'bg-neutral-900 text-white shadow-[var(--shadow-lg)] border-0 -translate-y-2'
                                : 'bg-white shadow-[var(--shadow-sm)] border border-neutral-200'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-4 right-4 text-xs font-semibold text-neutral-900 bg-white px-3 py-1 rounded-sm shadow-sm">
                                    Most popular
                                </div>
                            )}

                            <div className={`text-sm font-semibold uppercase mb-4 ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                {plan.name}
                            </div>

                            <div className="mb-1 flex items-end">
                                <span className={`text-4xl md:text-5xl font-bold tracking-tight font-bold leading-none ${plan.isPopular ? 'text-white' : 'text-neutral-900'}`}>
                                    ${plan.monthlyPrice}
                                </span>
                                <span className={`text-base font-medium ml-1 pb-1 ${plan.isPopular ? 'text-neutral-500' : 'text-neutral-500'}`}>
                                    /month
                                </span>
                            </div>

                            <div className="h-[20px] mb-4"></div> {/* spacer */}

                            <p className={`text-sm font-medium ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'} mb-6`}>
                                {plan.tagline}
                            </p>

                            <div className={`w-full h-px mb-6 ${plan.isPopular ? 'bg-neutral-700' : 'bg-neutral-200'}`} />

                            <div className={`text-lg md:text-xl font-semibold mb-1 ${plan.isPopular ? 'text-white' : 'text-neutral-900'}`}>
                                {plan.simulations}
                            </div>
                            <div className={`text-sm font-medium mb-8 ${plan.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                {plan.quality}
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={`text-sm font-medium flex items-start ${plan.isPopular ? 'text-neutral-200' : 'text-neutral-900'}`}>
                                        <Check className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${plan.isPopular ? 'text-neutral-900' : 'text-neutral-900'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.btnVariant}
                                className={`w-full h-12 rounded-xl text-[16px] font-semibold transition-colors duration-200 ${plan.btnVariant === 'default'
                                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white'
                                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200'
                                    }`}
                            >
                                Start free trial
                            </Button>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-center text-sm font-medium text-neutral-500 max-w-sm mx-auto">
                    All plans include a 7-day free trial with 15 simulations.
                    No credit card required. Cancel anytime.
                </p>
            </div>
        </section>
    );
}
