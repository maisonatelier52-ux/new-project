export default function CoreValues() {
  return (
    <section className="w-full bg-black text-white py-20  px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20 pb-15">
          Core Values
        </h2>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-12">

          {/* Value 1 */}
          <div className="flex-1">
            <div className="border-t border-white/30 pt-5">
              <h3 className="text-[30px] font-bold mb-5">
                Absolute Integrity
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex-1">
            <div className="border-t border-white/30 pt-5">
              <h3 className="text-[30px] font-bold mb-5">
                Strategic Reliability
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex-1">
            <div className="border-t border-white/30 pt-5">
              <h3 className="text-[30px] font-bold mb-5">
                Technical Mastery
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}