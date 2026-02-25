"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntegratedInfrastructure() {
  return (
    <section className="w-full bg-black overflow-hidden ">
      <div className="flex flex-col lg:flex-row items-start mt-5">
        {/* LEFT CONTENT */}
        <div className="flex-1 pt-16 lg:pt-27 pb-20 pl-8 md:pl-16 lg:pl-20 pr-8 lg:pr-24">
          <h2 className="text-4xl md:text-6xl lg:text-[62px] text-white font-bold leading-none mb-10">
            Integrated Infrastructure for Upstream and Midstream Excellence
          </h2>

          <p className="text-[17px] text-white/90 leading-tight mb-6">
            Orinox Holding serves as a strategic force in the global energy sector, orchestrating technical success across the entire oil and gas value chain. From high-precision drilling frameworks to sophisticated process infrastructure, we deliver the technical solutions that drive operational efficiency and resource security.
          </p>

          <p className="text-[17px] text-white/90 leading-tight">
            We maintain operational excellence through absolute integrity and transparency. By integrating innovative engineering with streamlined midstream logistics, Orinox provides the foundational reliability required for industrial-scale energy production, transportation, and strategic petroleum management.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div 
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
          className="flex-1 w-full h-[550px] lg:h-[750px]"
        >
          <div className="w-full h-full overflow-hidden">
            <Image
              src="/images/integrated-infrastructure.webp"
              alt="Upstream and Midstream Infrastructure"
              width={1000}
              height={800}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}