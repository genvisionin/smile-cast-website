"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            q: "Do I need special equipment or cameras?",
            a: "No. Any smartphone camera works. Take the photo directly in the app or upload an existing one. No dental photography setup required."
        },
        {
            q: "How realistic are the simulations?",
            a: "Every simulation is patient-specific — not stock images. The AI reflects the patient's actual lighting, skin tone, and tooth structure in the result."
        },
        {
            q: "Can patients view the simulation on their phone?",
            a: "Yes. Every simulation gets a shareable link that opens a mobile-optimized patient view with a before/after comparison slider. Patients can bookmark it and share it with family."
        },
        {
            q: "Is patient data secure?",
            a: "All images are stored encrypted. Patient portal access requires email or phone verification. We never use patient images for any purpose other than generating their simulation."
        },
        {
            q: "Can I brand it with my clinic logo and colors?",
            a: "Yes, from the Base plan onwards. On Ultra, you can use your own clinic domain."
        },
        {
            q: "What treatments can I visualize?",
            a: "Whitening (VITA shade selection), veneers (shape, shade, finish), straightening (alignment, gap closure, arch correction), and gum correction."
        },
        {
            q: "Can I send patients offers after they leave?",
            a: "Yes — on the Ultra plan, you can send promo codes through the patient portal days after their visit."
        },
        {
            q: "What happens after my free trial ends?",
            a: "We send a reminder on day 5. If you don't upgrade, your account pauses — no charges, no data deleted."
        }
    ];

    return (
        <section className="w-full bg-white py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-[768px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                        Frequently asked questions.
                    </h2>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="border-b border-neutral-200"
                        >
                            <AccordionTrigger className="hover:no-underline py-5 ext-left text-neutral-900 text-lg md:text-xl font-semibold [&[data-state=open]>svg]:rotate-180">
                                <span className="text-left">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-medium text-neutral-500 pt-2 pb-6">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
