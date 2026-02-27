"use client"
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="w-full bg-black text-white py-6 md:py-15 px-8 md:px-16 lg:px-24 snap-start">
      <div className="max-w-[1200px] mx-auto ">
        
        {/* Flex container */}
        <div className="flex flex-col md:flex-row md:justify-between  gap-10 md:gap-0">

          {/* Mission */}
          <div className="md:w-1/2">
            <p className="text-[13px] tracking-[0.25em] text-white/70 mb-4 md:mb-8">
              MISSION
            </p>

            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
                           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[26px] md:text-4xl lg:text-[30px] leading-[1.1] font-normal max-w-120"
            >
              To deliver high-precision infrastructure and technical reliability across the global energy value chain.
            </motion.h2>
          </div>

          {/* Vision */}
          <div className="md:w-1/2">
            <p className="text-[13px] tracking-[0.25em] text-white/70 mb-4 md:mb-8">
              VISION
            </p>

            <motion.h2 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[26px] md:text-4xl lg:text-[30px] leading-[1.1] font-normal max-w-120"
            >
              Setting the global standard for operational transparency and technical mastery in petroleum logistics.
            </motion.h2>
          </div>

        </div>
      </div>
      
    </section>
  );
} 