export default function CTASection() {
  return (
    <section id="get-started" className="bg-zinc-950 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to try AniPal?</h2>
        <p className="mt-3 text-white/70">The terminal app installs in minutes and runs smoothly on Termux. OAuth setup is guided and friendly.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://anilist.co" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 font-medium shadow hover:bg-white/90 transition-colors">
            Visit AniList
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition-colors">
            View Installer Guide
          </a>
        </div>
      </div>
    </section>
  );
}
