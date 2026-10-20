import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const StatCounter = ({ value, suffix = '', label, className = '' }) => {
  const numberRef = useRef(null);

  useGSAP(() => {
    gsap.matchMedia().add(MOTION_OK, () => {
      gsap.set(numberRef.current, { textContent: 0 });
      gsap.to(numberRef.current, {
        textContent: value,
        duration: 1.6,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: numberRef.current, start: 'top 85%', once: true },
      });
    });
  });

  return (
    <div data-reveal className={className}>
      <p className="mb-2 text-gradient-vivid text-[2.25rem] leading-none font-extrabold tabular-nums sm:text-[2.75rem]">
        <span ref={numberRef}>{value}</span>
        {suffix}
      </p>
      <p className="text-sm font-medium text-ink-muted sm:text-base">{label}</p>
    </div>
  );
};

export default StatCounter;
