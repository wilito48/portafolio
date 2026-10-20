import { useRef } from 'react';
import { gsap, MOTION_OK, SplitText, useGSAP } from '../../lib/gsap';

const DIMMED = 0.2;

const StoryText = ({ paragraphs }) => {
  const scopeRef = useRef(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const split = SplitText.create(scopeRef.current.querySelectorAll('p'), { type: 'words', aria: 'none' });
        gsap.set(split.words, { opacity: DIMMED });
        gsap.to(split.words, {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: { trigger: scopeRef.current, start: 'top 80%', end: 'bottom 50%', scrub: 0.5 },
        });
      });
    },
    { scope: scopeRef }
  );

  return (
    <div ref={scopeRef}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-5 text-lg leading-[1.7] text-ink-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default StoryText;
