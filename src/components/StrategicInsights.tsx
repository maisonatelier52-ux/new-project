"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const publications = [
    {
        title: "CCUS Transport & Storage Infrastructure",
        description: "A technical assessment of high-capacity carbon capture logistics, focusing on integrated CO2 transport networks for industrial clusters.",
        image: "/images/storage-solutions.jpg",
    },
    {
        title: "Protocols for Digital Drilling Optimization",
        description: "Evaluation of real-time rig telemetry and automated steering systems to maximize asset performance and personnel safety during upstream exploration.",
        image: "/images/who-we-are.png", // This is the technical sketch in the library
    },
    {
        title: "Hydrogen-Ready Pipeline Frameworks",
        description: "Technical Briefing on the metallurgical integrity requirements and network adjustments necessary for the transition to H2-blended molecules.",
        image: "/images/gathering-and-transportaion.png",
    },
];

export default function StrategicInsights() {
    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <h2 className="text-2xl font-bold">Strategic Insights & Petroleum Publications</h2>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-[1px] bg-white/20 mb-16 origin-left"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-8 rounded-lg border border-white/5">
                                <Image
                                    src={pub.image}
                                    alt={pub.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-4 group-hover:text-white/80 transition-colors">
                                {pub.title}
                            </h3>
                            <p className="text-[12px] leading-relaxed text-white/50">
                                {pub.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
