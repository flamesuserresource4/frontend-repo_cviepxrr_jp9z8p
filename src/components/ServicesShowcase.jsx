import { Shield, Star, Clock, HeartHandshake, Compass, Telescope } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const items = [
  { icon: Telescope, key: 'reading', en: 'Detailed Birth Chart Reading', hi: 'विस्तृत जन्म कुंडली विश्लेषण' },
  { icon: Compass, key: 'guidance', en: 'Career & Life Path Guidance', hi: 'कैरियर एवं जीवन पथ मार्गदर्शन' },
  { icon: Clock, key: 'timing', en: 'Favorable Time Selection (Muhurat)', hi: 'शुभ मुहूर्त चयन' },
  { icon: Shield, key: 'remedies', en: 'Personalized Remedies & Mantras', hi: 'व्यक्तिगत उपाय और मंत्र' },
  { icon: HeartHandshake, key: 'relationships', en: 'Relationship Compatibility', hi: 'संबंध संगतता' },
  { icon: Star, key: 'luck', en: 'Gemstone & Luck Enhancers', hi: 'रत्न एवं भाग्यवर्धक उपाय' },
];

export default function ServicesShowcase() {
  const { lang } = useLanguage();

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:mb-10 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {lang === 'en' ? 'Services & Offer' : 'सेवाएँ और विशेष प्रस्ताव'}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-indigo-100/80">
            {lang === 'en'
              ? 'Clarity-driven consultations with actionable steps you can start today.'
              : 'स्पष्टता पर आधारित परामर्श जिनके व्यावहारिक कदम आप आज ही शुरू कर सकते हैं।'}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-amber-300/30 bg-gradient-to-br from-amber-300/15 to-rose-300/10 px-6 py-4 text-amber-100 shadow"
        >
          <div className="text-xs uppercase tracking-wider text-amber-200/80">
            {lang === 'en' ? 'Intro Offer' : 'प्रारंभिक प्रस्ताव'}
          </div>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-extrabold text-amber-200">₹21</span>
            <span className="mb-1 text-xs text-amber-100/80">{lang === 'en' ? 'Limited time' : 'सीमित समय'}</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-amber-400/20 text-amber-200 ring-1 ring-white/10">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {lang === 'en' ? it.en : it.hi}
              </h3>
            </div>
            <p className="text-sm text-indigo-100/80">
              {lang === 'en'
                ? 'Get precise insights and a clear plan tailored for you.'
                : 'आपके लिए तैयार सटीक अंतर्दृष्टि और स्पष्ट योजना प्राप्त करें।'}
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl transition group-hover:bg-amber-300/20" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#book"
          className="rounded-full bg-gradient-to-r from-amber-300 to-rose-300 px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-105 active:scale-95"
        >
          {lang === 'en' ? 'Start for ₹21' : '₹21 में शुरू करें'}
        </a>
        <span className="text-xs text-indigo-100/70">
          {lang === 'en' ? 'Money-back guarantee if you feel no value.*' : 'यदि आपको लाभ न लगे तो धन-वापसी की गारंटी.*'}
        </span>
      </div>
    </section>
  );
}
