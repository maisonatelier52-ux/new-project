export default function GlobalFootprint() {
  const locations = [
    "Dubai",
    "London",
    "Madrid",
    "Caracas",
  ];

  return (
    <section className="w-full bg-black py-20 md:py-30 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[30px] md:text-5xl text-white lg:text-[60px] font-extrabold mb-8 md:mb-10">
          Global Footprint
        </h2>
        <div className="w-full h-[1px] bg-white/40 mb-12 md:mb-16" />
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {locations.map((city, index) => (
            <div key={index} className="flex-1">
              <p className="text-[12px] tracking-[0.25em] text-white/90 mb-4">
                ORINOX PRESENCE
              </p>
              <h3 className="text-2xl text-white md:text-3xl font-bold">
                {city}
              </h3>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}