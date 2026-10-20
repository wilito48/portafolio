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
      <p className="mb-2.5 text-[2rem] font-bold text-primary tabular-nums sm:text-[2.5rem]">
        <span ref={numberRef}>{value}</span>
        {suffix}
      </p>
      <p className="font-medium text-ink-muted">{label}</p>
    </div>
  );
};

export default StatCounter;
