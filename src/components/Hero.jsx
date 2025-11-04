import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useLanguage } from './LanguageContext';
import AudioPlayer from './AudioPlayer';

export default function Hero() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { lang } = useLanguage();

  // Parallax for overlay stars/gradients
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const y = window.scrollY;
      const translate = Math.min(y * 0.15, 120); // subtle parallax
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title =
    lang === 'en'
      ? 'Your Future Is In Your Hands!'
      : 'आपका भविष्य आपके हाथों में!';
  const subtitle =
    lang === 'en'
      ? 'Discover the hidden chapters of your destiny — career, love, and wealth — with a complete life analysis from Astrologer Ved Rishi.'
      : 'ज्योतिषी वेद ऋषि से संपूर्ण जीवन विश्लेषण के साथ अपने भाग्य के छिपे हुए अध्यायों—अपने करियर, प्यार और धन—को जानें।';
  const cta1 = lang === 'en' ? 'Apply Now' : 'Apply Now';
  const cta2 = lang === 'en' ? 'Explore Benefits' : 'लाभ देखें';

  return (
    <section ref={containerRef} className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <nav className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-fuchsia-400 shadow-lg shadow-indigo-900/40" />
          <span className="text-lg font-semibold tracking-wide text-indigo-100">Astrologer Ved Rishi</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#offer" className="text-sm text-indigo-100 transition-colors duration-300 hover:text-amber-300">{lang === 'en' ? 'Offer' : 'ऑफ़र'}</a>
          <a href="#benefits" className="text-sm text-indigo-100 transition-colors duration-300 hover:text-amber-300">{lang === 'en' ? 'Benefits' : 'लाभ'}</a>
        </div>
      </nav>

      {/* Spline scene as immersive background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + stars overlay with parallax */}
      <div ref={overlayRef} className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(1px_1px_at_20px_20px,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className={`mb-3 text-xs uppercase tracking-[0.35em] text-amber-300/90 ${mounted ? 'fade-in-down' : 'opacity-0 translate-y-2'}`}>{lang === 'en' ? 'Divine Guidance, Modern Insight' : 'दैवीय मार्गदर्शन, आधुनिक दृष्टि'}</p>
        <h1 className={`max-w-3xl bg-gradient-to-br from-indigo-200 via-amber-200 to-rose-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl ${mounted ? 'fade-in-up' : 'opacity-0 translate-y-4'}`}>
          {title}
        </h1>
        <p className={`mt-4 max-w-2xl text-base text-indigo-100/90 sm:text-lg ${mounted ? 'fade-in-up-delayed' : 'opacity-0 translate-y-4'}`}>
          {subtitle}
        </p>

        {/* Audio player */}
        <div className={`${mounted ? 'fade-in-up-delayed-2' : 'opacity-0 translate-y-4'} w-full`}>
          <AudioPlayer src="https://cdn.pixabay.com/download/audio/2022/10/23/audio_1e2e61a8a1.mp3?filename=deep-ambient-124841.mp3" />
        </div>

        <div className={`mt-6 flex flex-wrap items-center justify-center gap-4 ${mounted ? 'fade-in-up-delayed-2' : 'opacity-0 translate-y-4'}`}>
          <a href="#offer" className="rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-indigo-900/40 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            {cta1}
          </a>
          <a href="#benefits" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-indigo-100 backdrop-blur transition-colors duration-300 hover:border-amber-300/60 hover:text-amber-200">
            {cta2}
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-8px) } to { opacity: 1; transform: translateY(0) } }
        .fade-in-up { animation: fadeUp 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in-down { animation: fadeDown 900ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in-up-delayed { animation: fadeUp 1000ms 120ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        .fade-in-up-delayed-2 { animation: fadeUp 1000ms 220ms cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>
    </section>
  );
}
