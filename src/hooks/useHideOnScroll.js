import { useEffect, useRef } from 'react';
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from '../lib/gsap';

const HIDE_AFTER = 200;

export const useHideOnScroll = (targetRef, isLocked) => {
  const lockedRef = useRef(isLocked);
  const hiddenRef = useRef(false);

  const setHidden = (hidden) => {
    if (hiddenRef.current === hidden) return;
    hiddenRef.current = hidden;
    gsap.to(targetRef.current, { yPercent: hidden ? -100 : 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
  };

  useEffect(() => {
    lockedRef.current = isLocked;
    if (isLocked) setHidden(false);
  });

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const scrollingDown = self.direction === 1;
          setHidden(scrollingDown && self.scroll() > HIDE_AFTER && !lockedRef.current);
        },
      });
      return () => gsap.set(targetRef.current, { yPercent: 0 });
    });
  });
};
