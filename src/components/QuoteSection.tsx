"use client"
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="w-full bg-black py-20 md:py-30 px-8 md:px-16 lg:px-24 snap-start">
      <div className="max-w-200 mx-auto text-center">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-[28px] md:text-5xl lg:text-[35px]  font-light leading-[1.1] md:leading-[1.0] tracking-tight"
          style={{ fontFamily: "'Helvetica', Arial, sans-serif" }}
        >
            “Advancing energy operations through a steadfast commitment to high-precision upstream and midstream technical infrastructure.”
        </motion.h2>
      </div>
    </section>
  );
}