import { useEffect, useRef } from 'react';
import { Star, Shield, Clock, Sparkles, HeartHandshake, Telescope, Compass } from 'lucide-react';
import { useReveal } from './useReveal';

export default function Features() {
  const containerRef = useRef(null);
  useReveal('.reveal-card');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.reveal-card'));
    cards.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 90}ms`; // asymmetrical stagger per row
    });
  }, []);

  return (
    <section id="benefits" ref={containerRef} className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      {/* What you'll get */}
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="bg-gradient-to-r from-indigo-200 via-amber-200 to-rose-200 bg-clip-text text-3xl font-bold text-transparent">
          What You'll Get
        </h3>
        <p className="mt-3 text-indigo-100/85">A harmonious blend of ancient wisdom and contemporary clarity—crafted for your unique journey.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {[
          { Icon: Telescope, title: 'Personal Chart Deep-Dive', desc: 'Insight across key houses, planetary strengths, and timing windows.' },
          { Icon: Sparkles, title: 'Actionable Remedies', desc: 'Simple, effective practices aligned to your chart and lifestyle.' },
          { Icon: Compass, title: 'Career & Relationship Guidance', desc: 'Practical clarity for decisions that matter most.' },
          { Icon: Clock, title: 'Timing & Mahadasha Focus', desc: 'Navigate periods with foresight, not guesswork.' },
        ].map((item, i) => (
          <Card key={item.title} index={i} {...item} />
        ))}
      </div>

      {/* Why choose us */}
      <div className="mt-16 mx-auto max-w-3xl text-center">
        <h3 className="bg-gradient-to-r from-amber-200 via-yellow-200 to-rose-200 bg-clip-text text-3xl font-bold text-transparent">
          Why Choose Us
        </h3>
        <p className="mt-3 text-indigo-100/85">Trusted, empathetic, and discreet—experience guidance that respects your pace and privacy.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {[
          { Icon: Shield, title: 'Confidential & Ethical', desc: 'Your data and story stay safe—advice rooted in integrity.' },
          { Icon: Star, title: 'Premium Experience', desc: 'High-touch, refined, and soothing from start to finish.' },
          { Icon: HeartHandshake, title: 'Human-Centered', desc: 'Genuine support that meets you where you are.' },
        ].map((item, i) => (
          <TrustCard key={item.title} index={i} {...item} />
        ))}
      </div>

      <style>{`
        .reveal-card { opacity: 0; transform: translateY(16px) translateZ(0); will-change: opacity, transform; transition: opacity .9s cubic-bezier(0.22,1,0.36,1), transform .9s cubic-bezier(0.22,1,0.36,1); }
        .reveal-card.is-visible { opacity: 1; transform: translateY(0) }
        .reveal-card:nth-child(odd).is-visible { transform: translateY(0) translateX(0) }
      `}</style>
    </section>
  );
}

function Card({ Icon, title, desc, index }) {
  return (
    <div className={`reveal-card rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-amber-300/40 transition-colors`}>
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gradient-to-br from-indigo-500/30 to-amber-400/30 p-2 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-amber-200" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-indigo-100/85">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function TrustCard({ Icon, title, desc, index }) {
  return (
    <div className={`reveal-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-amber-300/40 transition-colors`}>
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gradient-to-br from-amber-400/30 to-rose-400/30 p-2 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-amber-200" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-indigo-100/85">{desc}</p>
        </div>
      </div>
    </div>
  );
}
