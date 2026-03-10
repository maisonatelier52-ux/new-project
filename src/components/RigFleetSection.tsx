"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RigFleetSection() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/what-orinox-commits-to-deliver.png"
                    alt="Strategic Rig Fleet"
                    fill
                    className="object-cover opacity-60 saturate-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl text-white">
                <motion.h2
                    {...anim(0.1)}
                    className="text-2xl md:text-2xl font-bold mb-8 tracking-tight max-w-2xl leading-[1.1]"
                >
                    Strategic High-Spec Rig Fleet & Global Operational Scale
                </motion.h2>

                <motion.p
                    {...anim(0.2)}
                    className="text-white/70 text-[14px] md:text-[15px] max-w-xl mb-16 leading-relaxed font-light"
                >
                    Orinox Holding maintains industrial dominance through specialized technical infrastructure,
                    deployed across the world's most active energy production basins.
                </motion.p>

                <div className="space-y-12">
                    <motion.div {...anim(0.3)} className="max-w-xl">
                        <h3 className="text-lg md:text-lg font-bold mb-3">Core Rig Capabilities</h3>
                        <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-light">
                            The fleet consists of 20 high-specification units (12 offshore and 8 land-based),
                            fully integrated with proprietary Orinox-X IoT sensors for real-time predictive data
                            and zero-downtime performance.
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.4)} className="max-w-xl">
                        <h3 className="text-lg md:text-lg font-bold mb-3">Tier-1 Operational Regions</h3>
                        <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-light">
                            Strategic asset allocation is concentrated in high-yield production zones, including the
                            Gulf of Mexico, North Sea, and key MENA region hubs, ensuring infrastructure proximity
                            to major export networks.
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.5)} className="max-w-xl">
                        <h3 className="text-lg md:text-lg font-bold mb-3">Contractual Yield & Integrity</h3>
                        <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-light">
                            Operational reliability is demonstrated by our 85% fleet utilization rate and a 3.4-year
                            average contract duration with leading international energy partners and national oil companies.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
