import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import CelestialHero from './components/CelestialHero';
import ServicesShowcase from './components/ServicesShowcase';
import FAQ from './components/FAQ';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-black text-white">
        <Header />
        <main>
          <CelestialHero />
          <ServicesShowcase />
          <section id="faq" className="mx-auto max-w-6xl px-4">
            <FAQ />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
