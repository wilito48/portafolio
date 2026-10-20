import { FINE_POINTER, gsap, useGSAP } from '../lib/gsap';

export const usePointerPosition = (ref, { onMove, onLeave } = {}) => {
  useGSAP(
    () => {
      gsap.matchMedia().add(FINE_POINTER, () => {
        const element = ref.current;

        const handleMove = (event) => {
          const rect = element.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          element.style.setProperty('--pointer-x', `${x}px`);
          element.style.setProperty('--pointer-y', `${y}px`);
          onMove?.({ x, y, width: rect.width, height: rect.height });
        };
        const handleLeave = () => onLeave?.();

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
};
