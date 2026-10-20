import { useCallback, useEffect, useState } from 'react';

const DETECTION_MARGIN = 50;

export const useActiveSection = (sectionIds, headerRef) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  const detect = useCallback(() => {
    const offset = (headerRef.current?.offsetHeight || 80) + DETECTION_MARGIN;
    const current = [...sectionIds].reverse().find((id) => {
      const element = document.getElementById(id);
      return element && element.getBoundingClientRect().top <= offset;
    });
    setActiveId(current || sectionIds[0]);
  }, [sectionIds, headerRef]);

  useEffect(() => {
    detect();
    window.addEventListener('scroll', detect, { passive: true });
    return () => window.removeEventListener('scroll', detect);
  }, [detect]);

  return [activeId, setActiveId];
};
