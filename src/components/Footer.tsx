import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 md:py-14 px-8 md:px-16 lg:px-28 snap-start">
      <div className="">
        <div className="border-t border-white/30 mb-10 md:mb-14"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/orinox-white-logo.png" 
              alt="Orinox"
              width={200}
              height={50}
              className="w-[140px] md:w-[130px] h-auto"
            />
          </div>
          <p className="text-[12px] md:text-[14px] text-white/50">
            © 2026 Orinox Holding
          </p>
        </div>
      </div>
    </footer>
  );
}