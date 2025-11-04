import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { lang, toggle } = useLanguage();
  const hiText = 'भाषा बदलने के लिए यहां टैप करें';
  const enText = 'Tap to change language to English';

  return (
    <div className="sticky top-0 z-30 w-full bg-gradient-to-r from-indigo-900/70 via-black/70 to-amber-900/50 backdrop-blur px-4 py-2 text-center text-xs sm:text-sm text-amber-100">
      <button onClick={toggle} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:bg-white/10">
        <span className="opacity-90">{lang === 'en' ? enText : hiText}</span>
        <span className="rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-semibold text-amber-200 ring-1 ring-amber-300/30">
          {lang === 'en' ? 'EN' : 'HI'}
        </span>
      </button>
    </div>
  );
}
