import { useEffect, useState } from 'react';

export const useScrolledPast = (threshold) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const update = () => setIsPast(window.scrollY > threshold);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return isPast;
};
