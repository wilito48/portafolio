import { useRef } from 'react';
import { FINE_POINTER, gsap, useGSAP } from '../../lib/gsap';

const STRENGTH = 0.3;

const Magnetic = ({ children, className = '' }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(FINE_POINTER, () => {
        const element = ref.current;
        const xTo = gsap.quickTo(element, 'x', { duration: 0.5, ease: 'power3.out' });
        const yTo = gsap.quickTo(element, 'y', { duration: 0.5, ease: 'power3.out' });

        const handleMove = (event) => {
          const { left, top, width, height } = element.getBoundingClientRect();
          xTo((event.clientX - (left + width / 2)) * STRENGTH);
          yTo((event.clientY - (top + height / 2)) * STRENGTH);
        };
        const handleLeave = () => {
          xTo(0);
          yTo(0);
        };

        element.addEventListener('pointermove', handleMove);
        element.addEventListener('pointerleave', handleLeave);
        return () => {
          element.removeEventListener('pointermove', handleMove);
          element.removeEventListener('pointerleave', handleLeave);
        };
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      {children}
    </span>
  );
};

export default Magnetic;
