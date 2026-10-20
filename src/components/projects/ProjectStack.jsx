import { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap';

const STACK_MEDIA = '(min-width: 1024px) and (min-height: 820px)';
const STACK_TOP_REM = 5.5;
const STACK_STEP_REM = 1.25;
const SHRINK = 0.06;
const SHADE = 0.4;

const stickyTop = (element) => parseFloat(getComputedStyle(element).top) || 0;

const ProjectStack = ({ children }) => {
  const scopeRef = useRef(null);
  const items = [].concat(children);

  useGSAP(
    () => {
      gsap.matchMedia().add(`${STACK_MEDIA} and ${MOTION_OK}`, () => {
        const layers = gsap.utils.toArray('[data-stack-item]', scopeRef.current);
        layers.slice(0, -1).forEach((layer, index) => {
          const next = layers[index + 1];
          const remaining = layers.length - 1 - index;
          gsap
            .timeline({
              scrollTrigger: {
                trigger: next,
                start: 'top bottom',
                end: () => `top ${stickyTop(next)}px`,
                scrub: true,
                invalidateOnRefresh: true,
              },
            })
            .to(layer.firstElementChild, { scale: 1 - SHRINK * Math.min(remaining, 2), ease: 'none' }, 0)
            .to(layer.querySelector('[data-stack-shade]'), { opacity: SHADE, ease: 'none' }, 0);
        });
      });
    },
    { scope: scopeRef, dependencies: [items.length] }
  );

  return (
    <div ref={scopeRef} className="flex flex-col gap-7 md:gap-10">
      {items.map((child, index) => (
        <div
          key={child.key}
          data-stack-item
          style={{ top: `${STACK_TOP_REM + STACK_STEP_REM * index}rem` }}
          className="[@media(min-width:1024px)_and_(min-height:820px)]:sticky"
        >
          <div className="relative origin-top">
            {child}
            <span
              data-stack-shade
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[20px] bg-slate-950 opacity-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStack;
