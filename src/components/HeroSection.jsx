import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full">{/* No negative z-index to keep Spline interactive */}
      <div className="relative h-[520px] md:h-[640px] w-full">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              AniPal — Human-like AniList Companion
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/85">
              Natural rhythms, gentle pauses, and thoughtful actions. A lightweight assistant with a beautiful terminal UI.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 font-medium shadow hover:bg-white/90 transition-colors">
                Explore Features
              </a>
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
