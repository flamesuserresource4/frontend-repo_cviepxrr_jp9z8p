import { useEffect } from 'react';

// Adds 'is-visible' to elements when they enter viewport for CSS-driven reveals
export function useReveal(selector, options = {}) {
  useEffect(() => {
    const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    if (!elements || elements.length === 0) return;

    const opts = { threshold: 0.15, rootMargin: '0px 0px -5% 0px', ...options };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, opts);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
}
