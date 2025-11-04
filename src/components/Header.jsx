import { Sparkles } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';

export default function Header() {
  const { lang } = useLanguage();
  return (
    <header className="sticky top-0 z-40 w-full bg-[#34495e] text-[#ecf0f1] shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#ecf0f1] text-[#34495e] shadow">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">
              {lang === 'en' ? 'Astrologer Ved Rishi' : 'ज्योतिषाचार्य वेद ऋषि'}
            </p>
            <p className="text-[11px] opacity-80">
              {lang === 'en' ? 'Guidance aligned to your stars' : 'आपके सितारों के अनुरूप मार्गदर्शन'}
            </p>
          </div>
        </div>
        <div className="rounded-md bg-[#465a71] px-3 py-1 transition-colors hover:bg-[#5a708c]">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
