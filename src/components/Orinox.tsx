import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const anim = (delay: number = 0) => ({
  variants: fadeUp,
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay: delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  }
});

export default function Orinox() {
  const columns = [
    {
      title: "About",
      items: ["Services", "Operations"],
    },
    {
      title: "Regions",
      items: ["Contracts", "Technology"],
    },
    {
      title: "E&P Services",
      items: ["Upstream", "Midstream"],
    },
    {
      title: "Investors",
      items: ["ESG", "Case Studies / Projects"],
    },
    {
      title: "Team",
      items: ["Insights", "Contact"],
    },
  ];

  return (
    <main className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center px-10 md:px-32">
      {/* Background Illustration - Who We Are */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/who-we-are.png"
          alt="Technical Illustration"
          className="h-full w-full object-cover"
        />
        {/* Subtle overlay to ensure text readability enquanto keeping the dark aesthetic */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Logo Container */}
      <motion.div {...anim(0.1)} className="absolute top-20 left-10 md:left-30 z-20">
        <Link href="/">
          <img
            src="/images/orinox-white-logo.png"
            alt="Orinox Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </motion.div>

      {/* Content Grid */}
      <div className="relative -mt-32 z-10 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-12 md:gap-x-20 lg:gap-x-48 max-w-7xl">
        {columns.map((column, idx) => (
          <motion.div key={idx} {...anim(0.2 + idx * 0.1)} className="flex flex-col space-y-5">
            <h3 className="text-white text-[13px] font-medium tracking-tight cursor-pointer hover:text-white/70 transition-colors ">
              {column.title}
            </h3>
            <div className="flex flex-col space-y-4">
              {column.items.map((item, itemIdx) => (
                <p
                  key={itemIdx}
                  className="text-white/90 text-[13px] font-medium tracking-normal cursor-pointer hover:text-white/70 transition-colors"
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

