"use client"
import { motion } from "framer-motion";

export default function StrategicLeadership() {
  return (
    <section className="w-full bg-black text-white h-screen flex  justify-center flex-col gap-15  px-8 md:px-16 lg:px-24 snap-start">
      <div className="flex">

        <div className="flex flex-col ">

          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-[400px] leading-tight text-white font-bold mb-4 md:mb-7 flex flex-col uppercase"
          >
            <span className="text-[40px] text-white">STRATEGIC</span>
            <span className="text-[45px] text-white">LEADERSHIP</span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[12px] leading-tight max-w-[520px] text-white/90 mb-10"
          >
            Orinox is guided by a team of industry veterans with deep expertise in petroleum engineering and midstream infrastructure. Our leadership is committed to transparency, technical innovation, and delivering the highest level of resource security to our global partners.
          </motion.p>

          {/* Button */}
          <a
            href="/team"
            className="inline-block border border-white/60 px-10 py-4 text-sm tracking-wide font-medium hover:bg-black hover:text-white transition duration-300 w-fit"
          >
            VIEW FULL TEAM
          </a>

        </div>

      </div>
          <div className="">

        {/* Heading */}
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[33px] md:text-[35px] font-semibold text-white/90 mb-7"
        >
          CORE VALUES
        </motion.h2>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">

          {/* Value 1 */}
          <div className="flex-1">
              <div className="border-t border-white/20 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-[20px] md:text-[18px] font-bold mb-2 md:mb-2">
                  ABSOLUTE INTEGRITY
                </h3>
                <p className="text-[12px] leading-tight text-white/90 max-w-[300px]">
                  Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex-1">
            <div className="border-t border-white/20 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <h3 className="text-[20px] md:text-[18px] font-bold mb-2 md:mb-2">
                  STRATEGIC RELIABILITY
                </h3>
                <p className="text-[12px] leading-tight text-white/90 max-w-[300px]">
                  Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex-1">
            <div className="border-t border-white/20 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <h3 className="text-[20px] md:text-[18px] font-bold mb-2 md:mb-2">
                  TECHNICAL MASTERY
                </h3>
                <p className="text-[12px] leading-tight text-white/90 max-w-[300px]">
                  Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
                </p>
              </motion.div>
            </div> 
          </div>

        </div>
      </div>
    </section>
  );
}