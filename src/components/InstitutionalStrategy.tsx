"use client";

import { motion } from "framer-motion";

const strategyData = [
    {
        title: "Geographic Footprint",
        items: [
            { label: "Rig Fleet", text: "High-spec offshore assets optimized for deep-water extraction." },
            { label: "Regions", text: "Core operations across the Gulf, South America, and West Africa." },
        ],
    },
    {
        title: "Technical Ecosystem",
        items: [
            { label: "Tech Stack", text: "IoT-enabled telemetry and predictive analytics platforms." },
            { label: "Midstream", text: "Streamlined pipeline integrity and distribution contracts." },
        ],
    },
    {
        title: "ESG & Governance",
        items: [
            { label: "Sustainability", text: "Net-zero pathway and IOGP compliance initiatives." },
            { label: "Investors", text: "Transparent reporting and strategic hedging frameworks." },
        ],
    },
];

export default function InstitutionalStrategy() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="max-w-3xl mb-24">
                    <motion.h2
                        {...anim(0.1)}
                        className="text-xl md:text-2xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        Institutional Strategy & Global Operational <br className="hidden md:block" />
                        Infrastructure
                    </motion.h2>

                    <motion.p
                        {...anim(0.2)}
                        className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light"
                    >
                        Orinox Holding delivers long-term investor value by integrating advanced petroleum tech stacks with a
                        resilient ESG framework. Our upstream and midstream services are engineered for scannability and
                        technical reliability across international regions.
                    </motion.p>
                </div>

                {/* Strategy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
                    {strategyData.map((section, idx) => (
                        <motion.div
                            key={idx}
                            {...anim(0.3 + idx * 0.1)}
                            className="flex flex-col"
                        >
                            <h3 className="text-[15px] md:text-[16px] font-bold mb-8 tracking-tight">
                                {section.title}
                            </h3>

                            <ul className="space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start group">
                                        <span className="w-1 h-1 bg-white/40 mt-1.5 mr-4 rounded-full flex-shrink-0" />
                                        <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light">
                                            <span className="font-bold text-white group-hover:text-white transition-colors">{item.label}:</span> {item.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
