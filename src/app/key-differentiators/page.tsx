import Image from "next/image";

export default function FutureCapabilities() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/storage-solutions.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-fit"
      />

      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="absolute top-8 right-16 z-20 flex items-center gap-3">
        <img
          src="/images/Orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="absolute bottom-26 left-16 z-20 max-w-xl text-white">
        <p className="inline-block bg-black/90 px-3 py-2 text-xs uppercase tracking-widest text-white">
  The Future
</p>

        <h1 className="text-4xl font-light leading-tight mb-4">
          Oil &amp; gas is transforming,
          <br />
          <span className="font-normal">not disappearing.</span>
        </h1>

        <p className="text-sm text-white/70 leading-tight">
          Global oil and gas demand forecasts with long plateau.
          <br />
          Capital disciplined operators seeking higher productivity, lower
          emissions.
          <br />
          Huge capex in brownfield optimization, CCUS, and infrastructure
          upgrade.
        </p>
      </div>
    </main>
  );
}
