import { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', toggle: () => {}, setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en'); // 'en' | 'hi'
  const toggle = () => setLang((l) => (l === 'en' ? 'hi' : 'en'));
  const value = useMemo(() => ({ lang, setLang, toggle }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
