import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import HeroContent from "./HeroContent";

export default async function Hero() {
  return (
    <section className="relative  bg-gradient-to-b from-[#edebeb] via-[rgb(239,234,237)] via-60% to-[#ffffff] pt-24 pb-12 md:pt-32 md:pb-20 overflow-x-hidden min-h-screen">
      <div className="absolute -top-10 left-1/2 h-60 w-full transform -translate-x-1/2 bg-radial from-[#f9f4f4] via-[#edf0f4] rounded-b-full via-10% to-transparent" />

      <BackgroundRippleEffect />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}
