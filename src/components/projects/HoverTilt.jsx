import { useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { usePointerPosition } from '../../hooks/usePointerPosition';

const MAX_TILT = 7;
const TILT_EASE = { duration: 0.6, ease: 'power3.out' };

const HoverTilt = ({ children }) => {
  const ref = useRef(null);
  const tilt = useRef(null);

  const tiltTo = (rotationX, rotationY) => {
    if (!tilt.current) gsap.set(ref.current, { transformPerspective: 1100 });
    tilt.current ??= {
      x: gsap.quickTo(ref.current, 'rotationX', TILT_EASE),
      y: gsap.quickTo(ref.current, 'rotationY', TILT_EASE),
    };
    tilt.current.x(rotationX);
    tilt.current.y(rotationY);
  };

  usePointerPosition(ref, {
    onMove: ({ x, y, width, height }) => tiltTo((0.5 - y / height) * MAX_TILT, (x / width - 0.5) * MAX_TILT),
    onLeave: () => tiltTo(0, 0),
  });

  return (
    <div ref={ref} className="group/tilt relative">
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-[radial-gradient(320px_circle_at_var(--pointer-x,50%)_var(--pointer-y,50%),rgba(255,255,255,0.16),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
      />
    </div>
  );
};

export default HoverTilt;
