import { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    });
  });

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-[linear-gradient(90deg,#3b82f6,#8b5cf6,#ec4899)]"
    />
  );
};

export default ScrollProgress;
