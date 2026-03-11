"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OperationsHero() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative w-full min-h-screen bg-black flex items-center pt-32 lg:pt-20 px-8 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <motion.div
                        {...anim(0.1)}
                        className="max-w-xl"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-8">
                            Elite Rig Fleet & Advanced <br />
                            Infrastructure
                        </h1>

                        <p className="text-white/70 text-sm md:text-[14px] leading-relaxed mb-12 max-w-lg">
                            Orinox Holding manages a high-specification offshore fleet and production units.
                            We deliver technical mastery in upstream exploration and midstream logistics,
                            optimizing production efficiency across global petroleum regions with an
                            investor-focused commitment to safety and innovation.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-12 py-4 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-colors hover:bg-white/90"
                        >
                            View Fleet
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Image Side */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="relative w-full aspect-square md:aspect-[5/6] max-h-[700px] overflow-hidden rounded-sm"
                    >
                        <Image
                            src="/images/offshore-rig-sunset.png"
                            alt="Offshore Rig"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
