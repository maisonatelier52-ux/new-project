"use client";

import { motion } from "framer-motion";

const frameworks = [
    {
        title: "Production Sharing Contracts (PSC)",
        description: "A performance-driven framework where Orinox manages technical exploration and production risks in exchange for a defined percentage of total physical output.",
        points: [
            "COST RECOVERY MECHANISMS",
            "PROFIT OIL ALLOCATION",
            "OPERATIONAL AUTONOMY",
            "FISCAL STABILITY PROVISIONS"
        ]
    },
    {
        title: "Risk Service Agreements",
        description: "Fee-based arrangements focusing on technical execution and infrastructure development where Orinox receives compensation based on project milestones and operational success.",
        points: [
            "TECHNICAL SERVICE FEES",
            "PRODUCTION MILESTONE BONUSES",
            "ASSET TRANSFER GUIDELINES",
            "ENHANCED RECOVERY INCENTIVES"
        ]
    },
    {
        title: "Joint Operating Agreements (JOA)",
        description: "Collaborative partnership models defining the specific rights, obligations, and governance protocols between consortium members for shared upstream ventures.",
        points: [
            "COST SHARING PROTOCOLS",
            "VOTING & GOVERNANCE RIGHTS",
            "PROCUREMENT TRANSPARENCY CLAUSES",
            "INDEMNIFICATION FRAMEWORKS"
        ]
    },
    {
        title: "EPCM & Infrastructure",
        description: "Comprehensive turn-key design and maintenance models for midstream assets, ensuring world-class technical standards and infrastructure longevity through the entire lifecycle.",
        points: [
            "FULL LIFECYCLE MAINTENANCE",
            "INTEGRATED TECHNICAL AUDITS",
            "COMPLIANCE & ESG REPORTING",
            "DIGITAL TWIN INTEGRATION"
        ]
    }
];

export default function ContractFrameworks() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 md:py-32 px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl">
                <motion.h2
                    {...anim(0.1)}
                    className="text-xl md:text-2xl font-bold mb-8 tracking-tight"
                >
                    Strategic Contractual Frameworks
                </motion.h2>

                <motion.p
                    {...anim(0.2)}
                    className="text-white/60 text-[13px] md:text-[14px] max-w-[500px] mb-20 leading-relaxed font-light"
                >
                    Orinox Holding utilizes industry-standard contract models designed to ensure
                    operational clarity, risk mitigation, and long-term asset value across global petroleum
                    jurisdictions.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                    {frameworks.map((framework, index) => (
                        <motion.div
                            key={index}
                            {...anim(0.3 + index * 0.1)}
                            className="bg-white/10 border border-white/5 p-12 md:p-16  rounded-sm flex flex-col h-full hover:bg-white/[0.02] transition-colors duration-500"
                        >
                            <h3 className="text-lg md:text-lg font-bold mb-10 max-w-[280px] leading-tight text-white">
                                {framework.title}
                            </h3>

                            <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed mb-12 flex-grow font-light">
                                {framework.description}
                            </p>

                            <ul className="space-y-4">
                                {framework.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center text-[10px] md:text-[10px] font-bold tracking-[0.2em] text-white/70">
                                        <span className="w-1 h-1 bg-white/40 mr-4 rounded-full" />
                                        {point}
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
