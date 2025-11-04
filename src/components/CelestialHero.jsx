import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import AudioPlayer from './AudioPlayer';

export default function CelestialHero() {
  const { lang } = useLanguage();

  const titleEn = 'Decode Your Destiny Under The Stars';
  const titleHi = 'सितारों के साये में अपनी किस्मत समझें';
  const subEn = 'Personalized Vedic astrology sessions, remedies, and guidance to bring clarity, calm, and momentum to your life.';
  const subHi = 'व्यक्तिगत वैदिक ज्योतिष सत्र, उपाय और मार्गदर्शन जो आपके जीवन में स्पष्टता, शांति और प्रगति लाएँ।';

  return (
    <section className="relative overflow-hidden">
      {/* cosmic background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-black to-black" />
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.5) 0, transparent 1px),\n             radial-gradient(1px 1px at 80% 30%, rgba(255,255,255,0.4) 0, transparent 1px),\n             radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.35) 0, transparent 1px)'
        }} />
        {/* floating orbs */}
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {lang === 'en' ? titleEn : titleHi}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-indigo-100/90 sm:text-lg"
          >
            {lang === 'en' ? subEn : subHi}
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-amber-300 to-rose-300 px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-105 active:scale-95"
            >
              {lang === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}
            </a>
            <a
              href="#faq"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
            >
              {lang === 'en' ? 'See FAQs' : 'सामान्य प्रश्न देखें'}
            </a>
          </div>

          <AudioPlayer src="/intro.mp3" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900 via-black to-black p-1 sm:h-96"
        >
          <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-white/5 to-white/0">
            {/* simple starfield grid to suggest a chart */}
            <div className="absolute inset-0 opacity-60" style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '28px 28px'
            }} />
            <div className="absolute inset-0">
              <motion.div
                className="absolute left-10 top-10 h-3 w-3 rounded-full bg-amber-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute right-12 bottom-12 h-3 w-3 rounded-full bg-indigo-300"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/40"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/30"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
