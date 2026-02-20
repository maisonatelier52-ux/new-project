import Image from "next/image";

export default function OurExpertise() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/why-we-excel-over-the-rest.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 right-16 z-20 flex items-center gap-3">
        <img
          src="/images/Orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="absolute bottom-26 left-16 z-20 max-w-xl text-white">
        <p className="inline-block text-xs uppercase tracking-widest text-white">
  WHO WE ARE
</p>

        <h1 className="text-4xl font-light leading-tight mb-4">
          Precision Drilling &amp; 
          <br />
          <span className="font-normal">Low-Carbon Infrastructure Partner</span>
        </h1>
<p className="">High-performance</p>
        <p className="text-sm text-white/70 leading-tight">
          Specilalist drilling and field development partner (Upstream & Near-Field Midstream.)
          <br />
          Combining drilling excellence with digital optimization and low-carbon readiness
          <br />
       Targeting attractive IRRs across drilling. CCUS, and hydrogen-ready advisory.
        </p>
      </div>
    </main>
  );
}
