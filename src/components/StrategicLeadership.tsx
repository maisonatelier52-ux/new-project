export default function StrategicLeadership() {
  return (
    <section className="w-full bg-black text-white py-40  px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex">

        {/* Content */}
        <div className="flex flex-col max-w-[520px]">

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-[64px] leading-[1.05] font-bold mb-10">
            Strategic <br /> Leadership
          </h2>

          {/* Paragraph */}
          <p className="text-[15px] leading-tight text-white/90 mb-12">
            Orinox is guided by a team of industry veterans with deep expertise in petroleum engineering and midstream infrastructure. Our leadership is committed to transparency, technical innovation, and delivering the highest level of resource security to our global partners.
          </p>

          {/* Button */}
          <a
            href="/team"
            className="inline-block border border-white/60 px-10 py-4 text-sm tracking-wide font-medium hover:bg-black hover:text-white transition duration-300 w-fit"
          >
            VIEW FULL TEAM
          </a>

        </div>

      </div>
    </section>
  );
}