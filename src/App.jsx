import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import SettingsPreview from './components/SettingsPreview';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeatureGrid />
      <SettingsPreview />
      <CTASection />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-white/60">
          <span>© {new Date().getFullYear()} AniPal</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#settings">Settings</a>
            <a className="hover:text-white" href="#get-started">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
