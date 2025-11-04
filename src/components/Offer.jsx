import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from './LanguageContext';

function timeLeft(targetTs) {
  const now = Date.now();
  const diff = Math.max(targetTs - now, 0);
  const hrs = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  return { hrs, mins, secs };
}

export default function Offer() {
  const { lang } = useLanguage();
  const target = useMemo(() => Date.now() + 1000 * 60 * 60 * 24, []); // 24h from mount
  const [left, setLeft] = useState(timeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setLeft(timeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const priceLine =
    lang === 'en' ? (
      <span>
        <span className="mr-2">Now just</span>
        <span className="line-through opacity-60">₹1000</span>
        <span className="mx-2">not, only</span>
        <span className="font-extrabold text-amber-300">₹21</span>
        <span className="ml-2">for</span>
      </span>
    ) : (
      <span>
        <span className="mr-2">अब</span>
        <span className="line-through opacity-60">₹1000</span>
        <span className="mx-2">नहीं, सिर्फ</span>
        <span className="font-extrabold text-amber-300">₹21</span>
        <span className="ml-2">में</span>
      </span>
    );

  const labels = lang === 'en' ? ['Hours', 'Minutes', 'Seconds'] : ['घंटे', 'मिनट', 'सेकंड'];

  return (
    <section id="offer" className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="bg-gradient-to-r from-amber-200 via-yellow-200 to-rose-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              {lang === 'en' ? 'Limited Time Introductory Reading' : 'सीमित समय का परिचयात्मक रीडिंग'}
            </h2>
            <p className="mt-2 max-w-xl text-indigo-100/85">
              {lang === 'en'
                ? 'Start your journey with a focused consultation designed to unlock immediate clarity.'
                : 'तुरंत स्पष्टता देने के लिए बनाई गई एक केंद्रित परामर्श से अपनी यात्रा शुरू करें।'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative rounded-xl border border-amber-300/40 bg-black/30 px-4 py-3 shadow-inner shadow-amber-300/10">
              <span className="text-xs uppercase tracking-wider text-amber-200/80">{lang === 'en' ? 'Only' : 'सिर्फ'}</span>
              <div className="price-glow text-3xl font-extrabold text-amber-300">₹21</div>
              <div className="pointer-events-none absolute -inset-0.5 rounded-xl glow-border" />
            </div>
            <a href="#book" className="rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-rose-300 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-900/30 transition-transform duration-300 hover:scale-[1.02] active:scale-95">
              {lang === 'en' ? 'Claim Offer' : 'ऑफ़र लें'}
            </a>
          </div>
        </div>

        {/* Price line and free offer */}
        <div className="mt-6 text-center text-indigo-100/90">
          <div className="text-sm">{priceLine}</div>
          <div className="mt-2 text-sm">
            {lang === 'en' ? (
              <span>With Kundli + Palm reading [FREE]</span>
            ) : (
              <span>कुंडली + हाथ की लकीरों का विश्लेषण [मुफ्त में]</span>
            )}
          </div>
        </div>

        {/* Timer */}
        <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-sm sm:grid-cols-3">
          {[
            { label: labels[0], value: String(left.hrs).padStart(2, '0') },
            { label: labels[1], value: String(left.mins).padStart(2, '0') },
            { label: labels[2], value: String(left.secs).padStart(2, '0') },
          ].map((t, i) => (
            <div key={t.label} className={`timer-box rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm opacity-0 translate-y-3`} style={{ animationDelay: `${i * 120}ms` }}>
              <div className="text-2xl font-bold text-amber-200">{t.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-indigo-200/70">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="#apply" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-indigo-100 backdrop-blur transition-colors duration-300 hover:border-amber-300/60 hover:text-amber-200">
            {lang === 'en' ? 'Apply Now' : 'Apply Now'}
          </a>
          <p className="mt-3 text-xs text-indigo-200/80">{lang === 'en' ? 'Only for 100 people' : 'केवल 100 लोगों के लिए'}</p>
        </div>
      </div>

      <style>{`
        @keyframes softPulse { 0% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.35) } 70% { box-shadow: 0 0 22px 6px rgba(251, 191, 36, 0.18) } 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.0) } }
        @keyframes glowBorder { 0% { opacity: .55; filter: blur(10px) } 50% { opacity: .95; filter: blur(14px) } 100% { opacity: .55; filter: blur(10px) } }
        .price-glow { text-shadow: 0 0 14px rgba(251, 191, 36, 0.35); animation: softPulse 2.6s ease-in-out infinite; }
        .glow-border { background: radial-gradient(120px 70px at 50% 50%, rgba(251,191,36,.45), rgba(251,191,36,.15) 40%, transparent 60%); animation: glowBorder 3.2s ease-in-out infinite; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        .timer-box { animation: fadeInUp 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>
    </section>
  );
}
