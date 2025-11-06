import { Clock, Bell, ThumbsUp, UserPlus, Shield } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Human-like Rhythm',
    desc: 'Irregular, natural delays with thinking pauses for every action.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Scan, schedule, and respond to likes and follows over time.',
  },
  {
    icon: ThumbsUp,
    title: 'Daily Quotas',
    desc: 'Distribute likes gently across 6–24h windows from multiple feeds.',
  },
  {
    icon: UserPlus,
    title: 'Follower Care',
    desc: 'Follow back and engage with configurable depth and timing.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    desc: 'OAuth2 flow, token refresh, and graceful error handling.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Designed to feel truly human</h2>
        <p className="mt-2 text-white/70">A beautiful, responsive terminal app with a minimal, informative UI.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-orange-500/20 flex items-center justify-center">
                  <Icon className="text-orange-400" size={18} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
