import { Star, Clock, Phone, MessageCircle, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const items = [
  { icon: Sun, key: 'reading', en: 'Detailed Birth Chart Reading', hi: 'विस्तृत जन्म कुंडली विश्लेषण' },
  { icon: Star, key: 'guidance', en: 'Career & Life Path Guidance', hi: 'कैरियर एवं जीवन पथ मार्गदर्शन' },
  { icon: Clock, key: 'timing', en: 'Favorable Time Selection (Muhurat)', hi: 'शुभ मुहूर्त चयन' },
  { icon: Phone, key: 'remedies', en: 'Personalized Remedies & Mantras', hi: 'व्यक्तिगत उपाय और मंत्र' },
  { icon: MessageCircle, key: 'relationships', en: 'Relationship Compatibility', hi: 'संबंध संगतता' },
  { icon: Star, key: 'luck', en: 'Gemstone & Luck Enhancers', hi: 'रत्न एवं भाग्यवर्धक उपाय' },
];

export default function ServicesShowcase() {
  const { lang } = useLanguage();

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="section-title text-center font-bold text-[#2c3e50] sm:text-left">
            {lang === 'en' ? 'Services & Offer' : 'सेवाएँ और विशेष प्रस्ताव'}
          </h2>
          <p className="section-subtitle text-[#34495e] opacity-90 sm:text-left">
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
          className="relative overflow-hidden rounded-2xl border border-[#bdc3c7] bg-[#34495e] px-6 py-4 text-[#ecf0f1] shadow"
        >
          <div className="text-xs uppercase tracking-wider opacity-90">
            {lang === 'en' ? 'Intro Offer' : 'प्रारंभिक प्रस्ताव'}
          </div>
          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-extrabold text-[#e74c3c]">₹21</span>
            <span className="mb-1 text-xs opacity-80">{lang === 'en' ? 'Limited time' : 'सीमित समय'}</span>
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
            className="group relative overflow-hidden rounded-2xl border border-[#bdc3c7] bg-white p-5 shadow-sm transition hover:shadow"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ecf0f1] text-[#e74c3c] ring-1 ring-[#bdc3c7]">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-[#2c3e50]">
                {lang === 'en' ? it.en : it.hi}
              </h3>
            </div>
            <p className="text-sm text-[#34495e]">
              {lang === 'en'
                ? 'Get precise insights and a clear plan tailored for you.'
                : 'आपके लिए तैयार सटीक अंतर्दृष्टि और स्पष्ट योजना प्राप्त करें।'}
            </p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#e74c3c]/5 blur-2xl transition group-hover:bg-[#e74c3c]/10" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#book"
          className="cta-button rounded-full bg-[#e74c3c] px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-[#c0392b] active:scale-95"
        >
          {lang === 'en' ? 'Start for ₹21' : '₹21 में शुरू करें'}
        </a>
        <span className="text-xs text-[#34495e] opacity-70">
          {lang === 'en' ? 'Money-back guarantee if you feel no value.*' : 'यदि आपको लाभ न लगे तो धन-वापसी की गारंटी.*'}
        </span>
      </div>
    </section>
  );
}
