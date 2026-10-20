import { useCallback, useEffect, useRef, useState } from 'react';

const EDGE_TOLERANCE = 4;

export const useTrackScroll = () => {
  const trackRef = useRef(null);
  const [state, setState] = useState({ canPrev: false, canNext: false });

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setState({
      canPrev: track.scrollLeft > EDGE_TOLERANCE,
      canNext: track.scrollLeft < max - EDGE_TOLERANCE,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    update();
    track.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => {
      track.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [update]);

  const scrollByItem = (direction) => {
    const track = trackRef.current;
    const item = track?.firstElementChild;
    if (!item) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: 'smooth' });
  };

  return { trackRef, ...state, scrollByItem };
};
