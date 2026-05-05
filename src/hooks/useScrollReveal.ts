import { useEffect } from 'react';

export function useScrollReveal(selector = '.reveal', rootMargin = '-100px') {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selector, rootMargin]);
}
