"use client";

import { motion } from "framer-motion";

const marqueeText = " 99.8% UPTIME | ISO 9001 CERTIFIED | GLOBAL OPERATIONS | TECH STACK OPTIMIZATION | UPSTREAM PRECISION | MIDSTREAM RELIABILITY | 99.8% UPTIME | ISO 9001 CERTIFIED | ";

export default function EfficiencyAtScale() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 overflow-hidden border-t border-white/5">
            {/* Running Headline (Marquee) */}
            <div className="relative flex overflow-x-hidden mb-32 border-b border-white/5 py-6">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/80">
                        {marqueeText.repeat(4)}
                    </span>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left Side: Heading */}
                    <motion.div {...anim(0.1)}>
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                            Efficiency at Scale
                        </h2>
                        <motion.p
                            {...anim(0.2)}
                            className="text-[12px] md:text-[13px] leading-relaxed text-white/60 font-light mt-8 max-w-lg"
                        >
                            Orinox Holdings optimizes operational capacity through a specialized rig fleet engineered for
                            99.8% uptime. Our tech stack, integrated with advanced predictive telemetry, ensures
                            modular flexibility across upstream and midstream contracts. We deliver global energy
                            reliability through rigorous ISO 9001-certified processes and investor-ready technical
                            infrastructure.
                        </motion.p>
                    </motion.div>
                    
                    

                    {/* Right Side: Content & Stats */}
                    <div className="flex flex-col">
                        

                        <div className="space-y-12">
                            <motion.div {...anim(0.3)}>
                                <h4 className="text-xl md:text-2xl font-bold mb-1 tracking-tight">99.8%</h4>
                                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                    TECHNICAL UPTIME
                                </p>
                            </motion.div>

                            <motion.div {...anim(0.4)}>
                                <h4 className="text-xl md:text-2xl font-bold mb-1 tracking-tight">ISO 9001</h4>
                                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                    CERTIFIED RELIABILITY
                                </p>
                            </motion.div>

                            <motion.div {...anim(0.5)}>
                                <h4 className="text-xl md:text-2xl font-bold mb-1 tracking-tight">24/7</h4>
                                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                    GLOBAL MONITORING
                                </p>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
