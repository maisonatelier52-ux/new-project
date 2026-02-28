"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import Orinox from "@/components/Orinox";

export default function OrinoxCapabilitiesPresentation() {
  return (
    <div className="flex flex-col bg-black">
      {/* 
        This page represents a high-end presentation.
        Each section is fully expanded to allow for granular control over every element.
      */}

      <Orinox />

      {/* 1. UPSTREAM/MIDSTREAM OVERVIEW (Special Upstream Layout) */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img src="/images/e-p.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-screen flex flex-col px-10 md:px-32 text-white">
          <div className="flex-1 flex justify-end items-center">
            <div className="text-right space-y-2 md:space-y-4">
              <div className="flex flex-col items-end">
                <p className="text-white/80 text-[13px] font-medium tracking-normal mb-1">Upstream (Exploration & Production)</p>
                <h1 className="text-white text-6xl md:text-[86px] font-extralight leading-none tracking-tight">E&P</h1>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-white/80 text-[13px] font-medium tracking-normal mb-1">Midstream (Transportation & Storage)</p>
                <h1 className="text-white text-6xl md:text-[86px] font-extralight leading-none tracking-tight">T&S</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-end pb-24">
            <p className="max-w-xl text-right text-white/70 text-[13px] font-medium leading-[1.7] tracking-normal">
              ORINOX is a full-service oil drilling company operating across the Upstream (Exploration & Production) and Midstream (Transportation & Storage) segments of the oil and gas value chain.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/storage-solutions1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-24 md:top-32 left-10 md:left-32 z-20 max-w-5xl text-white flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
            WHO WE ARE
          </p>
          <h1 className="text-4xl md:text-[56px] font-bold leading-[1.05] mb-5 tracking-tight">
            Precision Drilling &<br />
            Low-Carbon Infrastructure Partner
          </h1>
          <p className="text-[16px] md:text-[18px] font-bold mb-6 tracking-normal text-white">
            High-performance drilling and future-ready oil & gas infrastructure
          </p>
          <div className="space-y-1 mb-10">
            <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed font-normal max-w-2xl">
              Specialist drilling and field development partner (Upstream & Near-Field Midstream).
              <br />
              Combining drilling excellence with digital optimization and low-carbon readiness.
              <br />
              Targeting attractive IRRs across drilling, CCUS, and hydrogen-ready advisory.
            </p>
          </div>
          <div>
            <button className="px-8 py-3 border rounded-[5px] border-white/60 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/responsible-hydrocarbons-quantifiable-esc-metrics.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-24 md:top-36 left-10 md:left-32 z-20 max-w-5xl text-white flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-6">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] mb-8 tracking-tight max-w-4xl">
            We develop and manage Critical,<br />
            Capital-Intensive Infrastructure<br />
            for the Oil & Gas Industry
          </h1>
          <div className="space-y-6 mb-12 max-w-2xl">
            <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed font-normal">
              Orinox Holding was founded with a clear mandate: to deliver technical excellence and absolute transparency to the petroleum infrastructure sector. Since our inception as a specialized engineering firm, we have evolved into a premier global organization, managing upstream exploration and midstream logistics with unparalleled precision.
            </p>
            <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed font-normal">
              Our path is defined by disciplined innovation and high-integrity development, ensuring sustained resource security and operational efficiency throughout the energy value chain.
            </p>
          </div>
          <div>
            <button className="px-10 py-3.5 border rounded-[5px] border-white/60 text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/transition-capabilities.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-20 left-0 right-0 z-20 px-10 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-32 max-w-7xl">
            {/* Mission */}
            <div className="flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
                MISSION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium leading-[1.5] text-white">
                To deliver high-precision infrastructure and<br className="hidden lg:block" />
                technical reliability across the global energy<br className="hidden lg:block" />
                value chain.
              </h2>
            </div>

            {/* Vision */}
            <div className="flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
                VISION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium leading-[1.5] text-white">
                Setting the global standard for operational<br className="hidden lg:block" />
                transparency and technical mastery in<br className="hidden lg:block" />
                petroleum logistics.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/integrated-cross-sector-synergy1.png"
          alt="Refinery background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 " />

        {/* Core Values Header */}
        <div className="absolute top-24 md:top-36 left-10 md:left-32 z-20 flex items-center space-x-6">
          <img
            src="/images/logo1.png"
            alt="Orinox Logo"
            className="h-[60px] md:h-[70px] w-auto opacity-95 object-contain"
          />
          <h1 className="text-5xl md:text-[64px] font-bold text-white tracking-tight">Core Values</h1>
        </div>

        {/* Values Grid */}
        <div className="absolute bottom-16 md:bottom-24 left-0 right-0 z-20 px-10 md:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-7xl">
            {/* Absolute Integrity */}
            <div className="flex flex-col border-t border-white/20 pt-8">
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Absolute Integrity</h3>
              <p className="text-white/80 text-[14px] leading-relaxed font-normal">
                Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
              </p>
            </div>

            {/* Strategic Reliability */}
            <div className="flex flex-col border-t border-white/20 pt-8">
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Strategic Reliability</h3>
              <p className="text-white/80 text-[14px] leading-relaxed font-normal">
                Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
              </p>
            </div>

            {/* Technical Mastery */}
            <div className="flex flex-col border-t border-white/20 pt-8">
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">Technical Mastery</h3>
              <p className="text-white/80 text-[14px] leading-relaxed font-normal">
                Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC LEADERSHIP */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/modularity-and-rapid-deployment.png"
          alt="Strategic Leadership"
          className="absolute brightness-250 inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-16 md:bottom-24 left-10 md:left-32 z-20 max-w-4xl text-white">
          <h1 className="text-5xl md:text-[58px] font-bold text-white tracking-tight mb-6">
            Strategic Leadership
          </h1>
          <p className="text-[14px] md:text-[16px] text-white/90 leading-relaxed font-normal max-w-2xl">
            Orinox is guided by a team of industry veterans with deep expertise in petroleum engineering and midstream infrastructure. Our leadership is committed to transparency, technical innovation, and delivering the highest level of resource security to our global partners.
          </p>
        </div>
      </section>

      {/* 7. ADVANCING THE FRONTIER */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/future1.png"
          alt="Refinery Aerial View"
          className="absolute brightness-200 inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-10">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 leading-tight max-w-5xl tracking-tight">
            Advancing the Frontier of<br />
            Petroleum Infrastructure
          </h1>
          <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed max-w-3xl mb-12 font-normal">
            Orinox Holding stands at the intersection of technical mastery and industry reliability.<br className="hidden md:block" />
            We deliver the foundational systems that drive exploration, production, and midstream efficiency across the global oil and gas sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="min-w-[180px] px-8 py-3.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] rounded-[5px] hover:bg-white/90 transition-all duration-300">
              View Holding
            </button>
            <button className="min-w-[180px] px-8 py-3.5 border border-white text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-[5px] hover:bg-white/10 transition-all duration-300">
              Contact Experts
            </button>
          </div>
        </div>
      </section>

      {/* 8. INTEGRATED INFRASTRUCTURE */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img
          src="/images/future-capabilities1.png"
          alt="Pumpjacks at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-32 z-20 max-w-5xl text-white flex flex-col">
          <h1 className="text-4xl md:text-4xl lg:text-[52px] font-bold leading-[1.1] mb-8 tracking-tight max-w-4xl">
            Integrated Infrastructure for<br />
            Upstream and Midstream<br />
            Excellence
          </h1>
          <div className="space-y-6 mb-12 max-w-2xl">
            <p className="text-[10px] md:text-[12px] text-white/90 leading-relaxed font-normal">
              Orinox Holding serves as a strategic force in the global energy sector, orchestrating technical success across the entire oil and gas value chain. From high-precision drilling frameworks to sophisticated process infrastructure, we deliver the technical solutions that drive operational efficiency and resource security.
            </p>
            <p className="text-[10px] md:text-[12px] text-white/90 leading-relaxed font-normal">
              We maintain operational excellence through absolute integrity and transparency. By integrating innovative engineering with streamlined midstream logistics, Orinox provides the foundational reliability required for industrial-scale energy production, transportation, and strategic petroleum management.
            </p>
          </div>
          <div>
            <button className="px-10 py-3.5 border rounded-[5px] border-white/60 text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* 9. GATHERING & TRANSPORTATION */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img src="/images/gathering-and-transportaion.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
          <div>
            <p className="inline-block text-xs uppercase tracking-wide mb-1 text-white/50">Midstream Services</p>
          </div>
          <h1 className="text-[14px] font-semibold leading-none text-white/80">Gathering & Transportation</h1>
          <div className="space-y-1">
            <p className="text-[12px] text-white/60 leading-tight">Designing and operating infrastructure to move hydrocarbons from wellhead to market. Multi-phase pipelines and regional trunk systems.</p>
          </div>
        </div>
      </section>

      {/* 11. OIL & GAS PROCESSING */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img src="/images/oil-and-gas-processing.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
          <div>
            <p className="inline-block text-xs uppercase tracking-wide mb-1 text-white/50">Midstream Services</p>
          </div>
          <h1 className="text-[14px] font-semibold leading-none text-white/80">Oil & Gas Processing</h1>
          <div className="space-y-1">
            <p className="text-[12px] text-white/60 leading-tight">Developing central processing facilities for gas treatment and extraction of NGLs, ensuring production is market-ready.</p>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL LOCATIONS */}
      <section className="relative h-screen w-full overflow-hidden block">
        <img src="/images/orinox-global-locations.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 -translate-y-1/2 right-10 lg:right-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col text-right">
          <div className="space-y-1">
            <h2 className="text-white/80 text-sm font-semibold">United Kingdom</h2>
            <p className="text-[10px] text-white/60 leading-tight">Level 28, 52 Lime Street, London, EC3M 7AF</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-white/80 text-sm font-semibold">United Arab Emirates</h2>
            <p className="text-[10px] text-white/60 leading-tight">Villa 145, Al Manara Street, Dubai, UAE</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-white/80 text-sm font-semibold">Venezuela</h2>
            <p className="text-[10px] text-white/60 leading-tight">Edificio Epsilon CIIP 3, Caracas 1060</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-white/80 text-sm font-semibold">Spain</h2>
            <p className="text-[10px] text-white/60 leading-tight">Plaza de la Independencia 8, Madrid</p>
          </div>
        </div>
      </section>

    </div>
  );
}


