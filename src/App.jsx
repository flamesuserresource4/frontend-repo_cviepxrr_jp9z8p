import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import CelestialHero from './components/CelestialHero';
import ServicesShowcase from './components/ServicesShowcase';
import FAQ from './components/FAQ';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-[#ecf0f1] text-[#34495e]">
        <Header />
        <main>
          <CelestialHero />
          <ServicesShowcase />
          <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
            <FAQ />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
