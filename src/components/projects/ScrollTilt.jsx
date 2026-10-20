import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const ScrollTilt = ({ children, className = '' }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add({ motion: MOTION_OK, desktop: '(min-width: 768px)' }, ({ conditions }) => {
        if (!conditions.motion) return;
        gsap.set(ref.current, {
          rotateX: conditions.desktop ? 24 : 14,
          scale: 0.9,
          y: 30,
          transformPerspective: 1200,
          transformOrigin: '50% 100%',
        });
        gsap.to(ref.current, {
          rotateX: 0,
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top 95%', end: 'top 45%', scrub: 0.6 },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ScrollTilt;
