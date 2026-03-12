"use client";

import { motion } from "framer-motion";

export default function TechnicalBriefsTransition() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-white py-12 px-8 flex flex-col items-center text-center border-t border-white/5">
      {/* Small Category Label */}
      <motion.span 
        {...anim(0.1)}
        className="text-[9px] md:text-[9px] font-bold tracking-[0.4em] text-black/30 uppercase mb-4"
      >
        INSIGHTS & PUBLICATIONS
      </motion.span>
      
      {/* Main Technical Title */}
      <motion.h2 
        {...anim(0.2)}
        className="text-xl md:text-2xl font-bold text-black mb-6 tracking-tight max-w-2xl"
      >
        Technical Briefs: Energy Transition Infrastructure
      </motion.h2>

      {/* Analytical Description */}
      <motion.p 
        {...anim(0.3)}
        className="text-[13px] md:text-[14px] text-zinc-500 font-light max-w-2xl leading-relaxed mb-16"
      >
        Access proprietary technical updates on CCUS Transport and Storage (T&S), digital drilling automation, and hydrogen-ready midstream networks. Investor-ready summaries delivered quarterly.
      </motion.p>

      {/* Minimalist Divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
        className="w-52 h-[1px] bg-black/30 origin-center"
      />
    </section>
  );
}
