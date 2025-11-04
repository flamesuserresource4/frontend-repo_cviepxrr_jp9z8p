import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ITEMS = [
  {
    q_en: 'Will I get remedies for all my doshas?',
    a_en:
      "Yes, absolutely! We don't just tell you about your doshas, we also provide effective remedies so you can move in the right direction.",
    q_hi: 'क्या मुझे सभी दोषों के remedies मिलेंगे?',
    a_hi:
      'हाँ, बिल्कुल! हम सिर्फ आपके दोषों के बारे में नहीं बताते, बल्कि उन्हें ठीक करने के लिए प्रभावी remedies भी देते हैं ताकि आप अपने जीवन को सही दिशा दे सकें।',
  },
  {
    q_en: 'How is this report different from others?',
    a_en:
      'It uniquely blends traditional Vedic astrology, detailed palm reading, and name-based numerology for a holistic analysis.',
    q_hi: 'यह रिपोर्ट दूसरों से कैसे अलग है?',
    a_hi:
      'हमारी रिपोर्ट पारंपरिक ज्योतिष, आपके हाथ की लकीरों और आपके नाम के अंक ज्योतिष का अनूठा संयोजन है — एक समग्र और गहरा विश्लेषण।',
  },
  {
    q_en: "What if I don't receive my report within 72 hours?",
    a_en:
      'We promise delivery within 72 hours. If not, you will receive a full refund — your money is safe with us.',
    q_hi: 'अगर मुझे 72 घंटे में report नहीं मिली तो?',
    a_hi:
      'हमारा वादा है कि आपको 72 घंटे के अंदर आपकी report मिल जाएगी। अगर किसी कारण से ऐसा नहीं होता, तो आपको पूरा refund मिलेगा।',
  },
];

export default function FAQ() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-white">
      <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-indigo-200 via-amber-200 to-rose-200 bg-clip-text text-transparent">
        {lang === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले सवाल'}
      </h3>

      <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="p-4 sm:p-6">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-base font-semibold text-white">
                  {lang === 'en' ? item.q_en : item.q_hi}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-amber-200 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} mt-2`}
              >
                <div className="overflow-hidden text-sm leading-relaxed text-indigo-100/85">
                  <p className="pt-2">
                    {lang === 'en' ? item.a_en : item.a_hi}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
