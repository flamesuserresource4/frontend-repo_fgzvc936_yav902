import { Settings } from 'lucide-react';

export default function SettingsPreview() {
  return (
    <section id="settings" className="bg-gradient-to-b from-black to-zinc-900 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Gentle controls, clear intent</h2>
          <p className="mt-3 text-white/70">
            Choose delay modes, set daily quotas, configure notification windows, and manage multiple accounts. The terminal UI stays calm with only essential updates and progress bars.
          </p>
          <ul className="mt-5 space-y-2 text-white/80 text-sm list-disc pl-5">
            <li>Delay modes: fast, balanced, distracted</li>
            <li>Notification likes spread over days</li>
            <li>Quota window: 6–24h, sources configurable</li>
            <li>Follow-back with optional recent likes</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/40 p-5">
          <div className="flex items-center gap-2 text-white mb-4">
            <Settings size={18} />
            <span className="font-semibold">Sample Profile</span>
          </div>
          <div className="space-y-3 text-sm">
            <Row label="Delay mode" value="Balanced (2s → 4s → 13s → 6s)" />
            <Row label="Daily quota" value="120 likes across 12h" />
            <Row label="Notifications" value="Like back within 24–48h" />
            <Row label="Follow-back" value="On (2 recent likes)" />
            <Row label="UI verbosity" value="Minimal (5 lines)" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 p-3 bg-white/5">
      <span className="text-white/70">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}
