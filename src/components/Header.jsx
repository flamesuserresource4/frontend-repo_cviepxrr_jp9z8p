import { Sparkles } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { lang } = useLanguage();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-amber-200">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-300/90 to-indigo-400/90 text-black shadow">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-white">
              {lang === 'en' ? 'Astrologer Ved Rishi' : 'ज्योतिषाचार्य वेद ऋषि'}
            </p>
            <p className="text-[11px] text-indigo-100/80">
              {lang === 'en' ? 'Guidance aligned to your stars' : 'आपके सितारों के अनुरूप मार्गदर्शन'}
            </p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}
