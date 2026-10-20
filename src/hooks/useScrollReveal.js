import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../lib/gsap';

const HIDDEN = { autoAlpha: 0, y: 40 };

const reveal = (batch) =>
  gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, overwrite: true });

export const useScrollReveal = (scopeRef) => {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const items = gsap.utils.toArray('[data-reveal]', scopeRef.current);
        gsap.set(items, HIDDEN);
        ScrollTrigger.batch(items, { start: 'top 90%', once: true, onEnter: reveal, onLeave: reveal });
      });
    },
    { scope: scopeRef }
  );
};
