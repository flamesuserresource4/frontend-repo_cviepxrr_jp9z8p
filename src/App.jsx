import Hero from './components/Hero';
import Offer from './components/Offer';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen w-full bg-black">
        <LanguageSwitcher />
        <Hero />
        <Offer />
        <Features />
        <FAQ />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
