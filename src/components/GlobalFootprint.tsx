export default function GlobalFootprint() {
  const locations = [
    "Dubai",
    "London",
    "Madrid",
    "Caracas",
  ];

  return (
    <section className="w-full bg-black py-20 md:py-20 px-8 md:px-16 lg:px-28 snap-start">
      <div className="">
        <h2 className="text-[30px] md:text-5xl text-white lg:text-[45px] font-extrabold mb-8 md:mb-10">
          Global Footprint
        </h2>
        <div className="w-full h-[1px] bg-white/40 mb-12 md:mb-12" />
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {locations.map((city, index) => (
            <div key={index} className="flex-1">
              <p className="text-[12px] tracking-[0.25em] text-white/90 mb-4">
                ORINOX PRESENCE
              </p>
              <h3 className="text-2xl text-white md:text-[22px] font-bold">
                {city}
              </h3>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
}